const Command = require("./../../utils/novaCommand")

module.exports = class f extends Command {
	constructor(client) {
		super(client, {
			name: "argon",
			group: "memes-warframe",
			description: "My scopes argon 😉"
		})
	}
	
	async run(message, args) {
		let options = [
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439503010104868874/argon.png"}}},
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439743173657624576/argon2.png"}}}
		]
		this.sendSelect(message, options, args, "Argon")
	}
}
