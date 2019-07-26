const Command = require("./../../utils/novaCommand")

module.exports = class extends Command {
	constructor(client) {
		super(client, {
			name: "ohno",
			aliases: [ "retard", "retarded" ],
			group: "memes-generic",
			description: "OH NO (it's retarded)"
		})
	}

	async run(message, args) {
		let options = [
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439494709208154123/ohno.png"}}}
		]
		this.sendOne(message, options, args, "Oh no")
	}
}
