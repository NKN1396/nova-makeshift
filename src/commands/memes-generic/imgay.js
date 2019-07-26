const Command = require("./../../utils/novaCommand")

module.exports = class extends Command {
	constructor(client) {
		super(client, {
			name: "imgay",
			aliases: ["gay"],
			group: "memes-generic",
			description: "I'm gay!"
		})
	}
	
	async run(message, args) {
		let options = [
			{content: "https://youtu.be/uwJSFYRtjHI"}
		]
		this.sendOne(message, options, args, "gay")
	}
}
