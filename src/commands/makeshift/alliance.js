var { Command } = require("discord.js-commando")
var makeshift = require("./../../resources/makeshift.json")

module.exports = class command extends Command {
	constructor(client) {
		super(client, {
			name: "alliance",
			aliases: [
				"alliance"
			],
			memberName: "alliance",
			group: "makeshift",
			description: "Link to the alliance Discord"
		})
	}

	async run(msg) {
		if(!msg.guild) return
		if(msg.guild.id != makeshift.guild) return
		try {
			await msg.channel.send("We're not in an alliance right now.")
			msg.react("✅")
		} catch (e) {
			console.error(e)
		}
	}
}
