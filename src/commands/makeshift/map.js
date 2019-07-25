const Command = require("./../../utils/novaCommand")
const guildCheck = require("./util/guildCheck")

module.exports = class extends Command {
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
		try {
			if(!guildCheck(message)) return
			await message.channel.send({
				content: "Makeshift clan dojo map",
				embed: {
					image: {
						url: "https://cdn.discordapp.com/attachments/437703489347649539/437708566787260426/map.png"
					}
				}
			})
			message.react("✅")
		} catch (error) {
			console.error(error)
		}
	}
}
