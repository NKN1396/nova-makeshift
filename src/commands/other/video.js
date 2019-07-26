const Command = require("../../utils/novaCommand")

module.exports = class extends Command {
	constructor(client) {
		let options = {
			group: "other",
			name: "video",
			aliases: [ "webcame" ],
			description: "Requests a video link for the current voice channel."
		}
		super(client, options)
	}

	async run(message) {
		if(!message.guild) return
		try {
			if(message.member.voiceChannel) {
				await message.channel.send(`<https://discordapp.com/channels/${message.guild.id}/${message.member.voiceChannel.id}>`)
				message.react("✅")
			} else {
				await message.channel.send("You're not in a voice channel!")
				message.react("❌")
			}
		} catch (error) {
			console.error(error)
		}
	}
}
