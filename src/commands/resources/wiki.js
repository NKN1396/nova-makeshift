const Command = require("./../../utils/novaCommand")

module.exports = class extends Command {
	constructor(client) {
		super(client, {
			name: "wiki",
			aliases: ["warframewiki", "wfwiki", "wikia", "wikilink", "fandom"],
			group: "resources",
			description: "Link to the Warframe wiki"
		})
	}

	async run(message) {
		try {
			await message.channel.send("*<http://warframe.wikia.com/wiki/WARFRAME_Wiki>*")
			message.react("✅")	
		} catch (error) {
			console.error(error)
		}
	}
}
