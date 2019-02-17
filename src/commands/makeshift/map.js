var { Command } = require("discord.js-commando")
var makeshift = require("./../../resources/makeshift.json")

module.exports = class command extends Command {
	constructor(client) {
		super(client, {
			name: "map",
			aliases: [
				"map",
				"dojo",
				"dojomap"
			],
			group: "makeshift",
			memberName: "map",
			description: "Map of the Makeshift dojo"
		})
	}

	async run(msg) {
		if(!msg.guild) return
		if(msg.guild.id != makeshift.guild) return
		const embed = {
			embed: {
				description: "Makeshift clan dojo map",
				image: {
					url: "https://cdn.discordapp.com/attachments/437703489347649539/437708566787260426/map.png"
				}
			}
		}
		try {
			await msg.channel.send(embed)
			msg.react("✅")
		} catch (e) {
			console.error(e)
		}
	}
}
