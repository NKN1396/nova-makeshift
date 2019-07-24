const Command = require("./../../utils/novaCommand")
const info = require("./../../../package.json")
const { stripIndents } = require("common-tags")

module.exports = class extends Command {
	constructor(client) {
		let options = {
			group: "developer",
			name: "info",
			aliases: [ "about" ],
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
