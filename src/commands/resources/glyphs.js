var { Command } = require("discord.js-commando")

module.exports = class command extends Command {
	constructor(client) {
		super(client, {
			name: "glyphs",
			aliases: [
				"glyph"
			],
			group: "resources",
			memberName: "glyphs",
			description: "List of all Warframe glyphs"
		})
	}

	async run(msg) {
		msg.react("✅")
		return msg.channel.send("<https://glyphs.wf/>")
	}
}
