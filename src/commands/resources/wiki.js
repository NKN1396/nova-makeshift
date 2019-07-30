const Command = require("./../../utils/novaCommand")
const {stripIndents} = require("common-tags")

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
			await message.channel.send(stripIndents`The Warframe wiki:
			<http://warframe.wikia.com/wiki/WARFRAME_Wiki>
			*Pretty much all information is available here.*`)
			message.react("✅")	
		} catch (error) {
			console.error(error)
		}
	}
}
