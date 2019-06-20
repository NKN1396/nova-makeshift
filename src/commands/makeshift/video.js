const { Command } = require("discord.js-commando")
const makeshift = require("./../../resources/makeshift.json")

module.exports = class command extends Command {
	constructor(client) {
		let options = {
			name: "video",
			aliases: [
				"video",
				"webcame"
			],
			group: "makeshift",
			memberName: "video",
			description: "Requests a video link for the current voice channel."
		}
		super(client, options)
	}

	async run(message) {
		if(!message.guild) return
		if(message.guild.id != makeshift.guild) return
		//Error message in case of not being in a voice channel
		if(!message.member.voiceChannel) {
			try {
				message.channel.send("You're not in a voice channel!")
				message.react("❌")
			} catch (error) {
				console.error(error)
			}
			return
		}
		//Send out video link
		try {
			await message.channel.send(`<https://discordapp.com/channels/${message.guild.id}/${message.member.voiceChannel.id}>`)
			message.react("✅")
		} catch (error) {
			console.error(error)
		}
	}
}
