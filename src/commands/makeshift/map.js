const Command = require("./../../utils/novaCommand")
const makeshift = require("./../../resources/makeshift.json")

module.exports = class command extends Command {
	constructor(client) {
		let options = {
			group: "makeshift",
			name: "map",
			aliases: [ "dojo", "dojomap" ],
			description: "Map of the Makeshift dojo"
		}
		super(client, options)
	}

	async run(message) {
		if(!message.guild) return
		if(message.guild.id != makeshift.guild) return
		let embed = {
			embed: {
				description: "Makeshift clan dojo map",
				image: {
					url: "https://cdn.discordapp.com/attachments/437703489347649539/437708566787260426/map.png"
				}
			}
		}
		try {
			await message.react("✅")
			message.channel.send(embed)
		} catch (error) {
			console.error(error)
		}
	}
}
