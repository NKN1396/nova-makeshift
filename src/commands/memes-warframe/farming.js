const Command = require("./../../utils/novaCommand")

module.exports = class extends Command {
	constructor(client) {
		super(client, {
			name: "farming",
			aliases: ["farmingsimulator"],
			group: "memes-warframe"
		})
	}
	
	async run(message, args) {
		let options = [
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439506265442615296/farming.jpg"}}}
		]
		this.sendSelect(message, options, args)
	}
}
