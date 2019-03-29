var { Command } = require("discord.js-commando")
var { oneLine } = require("common-tags")
var { stripIndents } = require("common-tags")
var makeshift = require("./../../resources/makeshift.json")

module.exports = class command extends Command {
	constructor(client) {
		super(client, {
			name: "video",
			aliases: [
				"video",
				"webcame"
			],
			group: "makeshift",
			memberName: "video",
			description: "Requests a video link for the current voice channel."
		})
	}

	async run(msg) {
		if(!msg.guild) return
		if(msg.guild.id != makeshift.guild) return
		if(!msg.member.voiceChannel){
			try {
				msg.channel.send("You're not in a voice channel!")
			} catch (e) {
				console.error(e)
			}
			return
		} 
		try {
			await msg.channel.send(`<https://discordapp.com/channels/${msg.guild.id}/${msg.member.voiceChannel.id}>`)
			msg.react("✅")
		} catch (e) {
			console.error(e)
		}
		
	}
}
