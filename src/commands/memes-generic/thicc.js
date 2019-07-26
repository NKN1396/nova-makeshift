const Command = require("./../../utils/novaCommand")

module.exports = class extends Command {
	constructor(client) {
		super(client, {
			name: "thicc",
			group: "memes-generic",
			description: "T H I C C"
		})
	}
	
	async run(message, args) {
		let options = [
			{content: "https://youtu.be/NEgwxGWgiIg"}
		]
		this.sendOne(message, options, args, "thicc")
	}
}
