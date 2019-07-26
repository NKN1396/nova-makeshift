const Command = require("./../../utils/novaCommand")

module.exports = class extends Command {
	constructor(client) {
		super(client, {
			name: "angryjoe",
			aliases: [ "joe", "fuckeditup", "youdonefuckeditup", "youdunfuckeditup", "fucked" ],
			group: "memes-generic",
			description: "You done fucked it up!"
		})
	}
	
	async run(message, args) {
		let options = [
			{content: "https://youtu.be/6OxKDKJJoXI"}
		]
		this.sendOne(message, options, args)
	}
}
