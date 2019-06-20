const { Command } = require("discord.js-commando")
const info = require("./../../../package.json")
const { stripIndents } = require("common-tags")

module.exports = class command extends Command {
	constructor(client) {
		let options = {
			name: "info",
			aliases: [
				"info",
				"about"
			],
			memberName: "info",
			group: "developer",
			description: "Displays information about this bot."
		}
		super(client, options)
	}

	async run(message) {
		let textInfo =
		stripIndents`__**Nova version ${info.version}**__
		${info.description}
		Programmed by ${info.author}.
		*Please issue the \`/help\` command if you wish to view a list of commands.*`
		try {
			await message.channel.send(textInfo)
			message.react("✅")
		} catch (error) {
			console.error(error)
		}
	}
}
