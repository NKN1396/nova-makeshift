//Config
const makeshift = require("./../../resources/makeshift.json")

//Dependencies
var { sample } = require("lodash")

var traceIdMaster = 0

/**
 * Handles the voice channels on the Makeshift guild. Creates a new channel upon joining the lobby, grants members the voice role and deltes unused channels.
 * @param {*} client The bot client.
 */
module.exports = function(client){
	client.on("voiceStateUpdate", (oldMember, newMember) => {
		
		//Check if this happened on the Makeshift guild
		if(newMember.guild.id != makeshift.guild) return
		//Check if member voiceChannel changed
		if(newMember.voiceChannel == oldMember.voiceChannel) return

		const traceId = traceIdMaster++

		if(newMember.voiceChannel){//If connected to VC currently
			//@voice role
			assign_role_voice(newMember, traceId)
			create_new_voiceChannel(newMember, traceId)
		}
		//@voice role
		else{//if disconnected from voice
			remove_role_voice(newMember, traceId)
		}
		
		//Potentially clean up after switching to new channel
		cleanup_empty_voiceChannel(oldMember.voiceChannel, traceId)

	})
}

async function create_new_voiceChannel(newMember, traceId){
	//Check to see if connected to Lobby
	if(newMember.voiceChannel.id != makeshift.channels.voice.lobby) return

	const channelNames = require("./resources/channelNames.json")
	const name = sample(channelNames)
	const optionOverrides = [
		{	//make first member in channel owner
			type: "member",
			id: newMember.id,
			allow: 17825808
		},
		{	//hide for everyone temporarily so the channel list doesn't earthquake
			type: "role",
			id: newMember.guild.defaultRole,
			deny: 1024
		}
	]

	try {
		if(process.env.DEBUG) console.log(`VOICEMAGIC A 00 (ID: ${traceId})`)
		var channel = await newMember.guild.createChannel(
			name, "voice", optionOverrides, ("Requested by " + newMember.displayName)
		)
		if(process.env.DEBUG) console.log(`VOICEMAGIC A 01 (ID: ${traceId})`)
		await channel.setParent(makeshift.categories.voice) //move channel in voice category
		if(process.env.DEBUG) console.log(`VOICEMAGIC A 02 (ID: ${traceId})`)
		await channel.setPosition(newMember.guild.channels.get(makeshift.categories.voice).children.size - 4) //move channel to correct position
		if(process.env.DEBUG) console.log(`VOICEMAGIC A 03 (ID: ${traceId})`)
		await channel.permissionOverwrites.get(newMember.guild.defaultRole.id).delete() //delete overwrite for @everyone (make channel visible again)
		if(process.env.DEBUG) console.log(`VOICEMAGIC A 04 (ID: ${traceId})`)
		await newMember.setVoiceChannel(channel)
		if(process.env.DEBUG) console.log(`VOICEMAGIC A 05 (ID: ${traceId})`)
	} catch (e) {
		console.error(e)
	}

}

async function assign_role_voice(newMember, traceId){
	if(newMember.roles.get(makeshift.roles.voice)) return //member doesn't have @voice role (recently connected)
	try {
		if(process.env.DEBUG) console.log(`VOICEMAGIC B 00 (ID: ${traceId})`)
		await newMember.addRole(makeshift.roles.voice)
		if(process.env.DEBUG) console.log(`VOICEMAGIC B 01 (ID: ${traceId})`)
	} catch (e) {
		console.error(e)
	}
}

async function remove_role_voice(newMember, traceId){
	if(!newMember.roles.get(makeshift.roles.voice)) return
	try {
		if(process.env.DEBUG) console.log(`VOICEMAGIC C 00 (ID: ${traceId})`)
		await newMember.removeRole(makeshift.roles.voice)
		if(process.env.DEBUG) console.log(`VOICEMAGIC C 01 (ID: ${traceId})`)
	} catch (e) {
		console.error(e)
	}
}

function cleanup_empty_voiceChannel(voiceChannel, traceId) {
	//Check to see if previous voice channel exists
	//This could be the case if member just joined VC while not being previously connected
	if(!voiceChannel) return
	//Check if channel is empty
	if(voiceChannel.members.first()) return
	const protectedChannels = [
		makeshift.channels.voice.lobby,
		makeshift.channels.voice.afk
	]
	//Check to see if channel is protected
	var protectedChannel = false
	protectedChannels.forEach(channel => {
		if(voiceChannel.id == channel) protectedChannel = true
	})
	if(protectedChannel) return

	if(process.env.DEBUG) console.log(`VOICEMAGIC D 00 (ID: ${traceId})`)
	setTimeout(async function(){	//queue channel for deletion and wait 30s
		try {
			if(process.env.DEBUG) console.log(`VOICEMAGIC D 01 (ID: ${traceId})`)
			if(!voiceChannel) return
			if(voiceChannel.members.first()) return
			if(process.env.DEBUG) console.log(`VOICEMAGIC D 02 (ID: ${traceId})`)
			await voiceChannel.delete()	//delete channel
			if(process.env.DEBUG) console.log(`VOICEMAGIC D 03 (ID: ${traceId})`)
		} catch (e) {
			console.error(e)
		}
	}, 30000)
}
