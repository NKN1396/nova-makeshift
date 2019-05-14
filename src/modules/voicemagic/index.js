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
	//const name = "Talk " + (newMember.guild.channels.get(makeshift.categories.voice).children.filter(child => child.type == "voice").size - 1)
	const options = {
		type: "voice",
		name: name,
		position: newMember.guild.channels.get(makeshift.categories.voice).children.size - 3,
		parent: newMember.guild.channels.get(makeshift.categories.voice)
	}
	const permissionOverwrites = [
		{	//Make first member in channel owner
			type: "member",
			id: newMember.id,
			allow: 17825808
		}
	]
	
	try {
		if(process.env.DEBUG) console.log(`VOICEMAGIC A 00 (ID: ${traceId})`)
		//Create new channel
		var channel = await newMember.guild.createChannel(
			name, options, permissionOverwrites, (`Requested by ${newMember} (${newMember.displayName})`)
		)
		if(process.env.DEBUG) console.log(`VOICEMAGIC A 01 (ID: ${traceId})`)
		//Move member into new channel
		await newMember.setVoiceChannel(channel)
		if(process.env.DEBUG) console.log(`VOICEMAGIC A 02 (ID: ${traceId})`)
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
	//Queue channel for deletion and wait 30s
	setTimeout(async function(){
		try {
			if(process.env.DEBUG) console.log(`VOICEMAGIC D 01 (ID: ${traceId})`)
			//Check if voice channel still exists
			if(!voiceChannel) return
			//Check if there's no person in the channel
			if(voiceChannel.members.first()) return
			if(process.env.DEBUG) console.log(`VOICEMAGIC D 02 (ID: ${traceId})`)
			//Delete channel
			await voiceChannel.delete()
			if(process.env.DEBUG) console.log(`VOICEMAGIC D 03 (ID: ${traceId})`)
		} catch (e) {
			console.error(e)
		}
	}, 30000)
}
