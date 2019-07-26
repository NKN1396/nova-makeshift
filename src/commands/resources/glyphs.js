const Command = require("./../../utils/novaCommand")

module.exports = class extends Command {
	constructor(client) {
		super(client, {
			name: "glyphs",
			aliases: ["glyph"],
			group: "resources",
			description: "List of all Warframe glyphs"
		})
	}

	async run(message) {
		try {
			await message.channel.send("<https://glyphs.wf/>")
			message.react("✅")
		} catch (error) {
			console.error(error)
		}
	}
}
