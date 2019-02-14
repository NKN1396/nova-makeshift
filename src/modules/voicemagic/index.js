//Config
const channel_voice_lobby_id = "405196902536314890";
const channel_voice_afk_id = "303642031576711170";
const channel_category_voice_id = "360677664220250113";
const role_voice_id = "405159081502834688";
const array_channel_voice_ids = [
	channel_voice_lobby_id,
	channel_voice_afk_id
];

/**
 * Handles the voice channels on the Makeshift guild. Creates a new channel upon joining the lobby, grants members the voice role and deltes unused channels.
 * @param {*} bot The bot client.
 */
module.exports = function(bot){
	bot.on("voiceStateUpdate", (oldMember, newMember) => {
		console.log("VOICEMAGIC 00: DEBG - Event \"voiceStateUpdate\"");

		
		if(newMember.voiceChannel == oldMember.voiceChannel){
			return;
		}

		if(newMember.voiceChannel){//If connected to VC currently
			//@voice role
			if(!newMember.roles.get(role_voice_id)){ //member doesn't have @voice role (recently connected)
				newMember.addRole(role_voice_id)
					.then(function(){
						console.log(`VOICEMAGIC 01: PASS - Granted role "${newMember.roles.get(role_voice_id).name}" to ${newMember.displayName}`);
					})
					.catch(function(){
						console.error(`VOICEMAGIC 01: FAIL - Role "${newMember.guild.roles.get(role_voice_id).name}" not granted to ${newMember.displayName}`);
					});
			}
			var channelNames = require("./resources/channelNames.json");
			var name = channelNames[Math.floor(Math.random()*channelNames.length)];
			//Handle channels
			if(newMember.voiceChannel.id == channel_voice_lobby_id){//if connected to one of the above voice channels
				newMember.guild.createChannel(
					//("Talk " + newMember.displayName)
					name,
					"voice",
					[
						{	//make first member in channel admin
							type: "member",
							id: newMember.id,
							allow: 17825808
						},
						{	//hide for everyone temporarily so the channel list doesn't earthquake
							type: "role",
							id: newMember.guild.defaultRole,
							deny: 1024
						}
					],
					("Requested by " + newMember.displayName)
				)
					.then(channel=>{
						console.log(`VOICEMAGIC 02: PASS - VoiceChannel "${channel.name}" created`);
						channel.setParent(channel_category_voice_id).then(function(){	//move channel in voice category
							console.log("VOICEMAGIC 03: PASS - Changed parent of channel");
							channel.setPosition(newMember.guild.channels.get(channel_category_voice_id).children.size - 3).then(function(){ //move channel to correct position
								console.log("VOICEMAGIC 04: PASS - Moved channel");
								channel.permissionOverwrites.get(newMember.guild.defaultRole.id).delete().then(function(){ //delete overwrite for @everyone (make channel visible again)
									console.log(`VOICEMAGIC 05: PASS - Deleted overwrites for role "${newMember.guild.defaultRole.name}"`);
									newMember.setVoiceChannel(channel)
										.then(function(){
											console.log(`VOICEMAGIC 06: PASS - Moved ${newMember.displayName} into channel`);
										})
										.catch(function(){
											console.error(`VOICEMAGIC 06: FAIL - Could not move ${newMember.displayName} into channel`);
										});
								}).catch(function(){
									console.error(`VOICEMAGIC 05: PASS - Could not delete overwrites for role "${newMember.guild.defaultRole.name}"`);
								});
							})
								.catch(function(){
									console.error("VOICEMAGIC 04: FAIL - Could not move channel");
								});
						})
							.catch(function(){
								console.error("VOICEMAGIC 03: FAIL - Could not change parent of channel");
							});
					})
					.catch(function(){
						console.error("VOICEMAGIC 02: FAIL - Could not create new channel");
					});
			}
		}

		//@voice role
		else{//if disconnected from voice
			if(newMember.roles.get(role_voice_id)){
				newMember.removeRole(role_voice_id)
					.then(function(){
						console.log(`VOICEMAGIC 07: PASS - Removed "${newMember.guild.roles.get(role_voice_id).name}" role from ${newMember.displayName}`);
					})
					.catch(function(){
						console.error(`VOICEMAGIC 07: PASS - Could not remove "${newMember.guild.roles.get(role_voice_id).name}" role from ${newMember.displayName}`);
					});
			}
		}
		
		//Potentially clean up after switching to new channel
		if(oldMember.voiceChannel){  //if previously connected to a voice channel
			if((!oldMember.voiceChannel.members.first()) && //and that old voice channel without members now
			(oldMember.voiceChannel.id != channel_voice_lobby_id) &&
			(oldMember.voiceChannel.id != channel_voice_afk_id)){   //aswell as not the AFK channel
				console.log(`VOICEMAGIC 08: DEBG - Queued channel ${oldMember.voiceChannel.name} for deletion in 30s`);
				setTimeout(function(){	//queue channel for deletion and wait 30s
					if(oldMember.voiceChannel){
						console.log(`VOICEMAGIC 09: DEBG - Channel ${oldMember.voiceChannel.name} still exists`);
						if(!oldMember.voiceChannel.members.first()){
							console.log(`VOICEMAGIC 10: DEBG - Channel ${oldMember.voiceChannel.name} is empty, attempting to delete`);
							oldMember.voiceChannel.delete()	//delete channel
								.then(channel => {
									console.log(`VOICEMAGIC 11: PASS - Deleted channel ${channel.name}`);
								})
								.catch(channel => {
									console.error(`VOICEMAGIC 11: PASS - Could not delete channel ${channel.name}`);
								});
						}
						else{
							console.log(`VOICEMAGIC 10: DEBG - Channel ${oldMember.voiceChannel.name} is not empty`);
						}
					}
					else{
						console.log(`VOICEMAGIC 09: DEBG - Channel ${oldMember.voiceChannel.name} doesn't exist anymore`);
					}
				}, 30000);
			}
		}
	});
};
