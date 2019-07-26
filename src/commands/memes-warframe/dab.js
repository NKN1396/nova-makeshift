const Command = require("./../../utils/novaCommand")

module.exports = class extends Command {
	constructor(client) {
		super(client, {
			name: "dab",
			aliases: ["saryndab"],
			group: "memes-warframe"
		})
	}
	
	async run(message, args) {
		let options = [
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439503411457556481/dab.jpg"}}}
		]
		this.sendSelect(message, options, args, "Dab")
	}
}
