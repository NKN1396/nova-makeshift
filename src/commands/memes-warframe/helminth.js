const Command = require("./../../utils/novaCommand")

module.exports = class extends Command {
	constructor(client) {
		super(client, {
			name: "helminth",
			aliases: ["helminthcharger"],
			group: "memes-warframe",
			description: "Helminth charger"
		})
	}
	
	async run(message, args) {
		let options = [
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439751976990015492/helminth.png"}}}
		]
		this.sendSelect(message, options, args)
	}
}
