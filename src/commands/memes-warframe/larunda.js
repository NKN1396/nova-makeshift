const Command = require("./../../utils/novaCommand")

module.exports = class extends Command {
	constructor(client) {
		super(client, {
			name: "larunda",
			aliases: ["relay"],
			group: "memes-warframe",
			description: "Larunda relay"
		})
	}
	
	async run(message, args) {
		let options = [
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439507342946467851/larunda.jpg"}}}
		]
		this.sendSelect(message, options, args)
	}
}
