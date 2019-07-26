const Command = require("./../../utils/novaCommand")
var select = require("./../../utils/selectRandomly")

module.exports = class extends Command {
	constructor(client) {
		super(client, {
			name: "fashionframe",
			aliases: ["endgame", "contest", "fashion"],
			group: "memes-warframe"
		})
	}
	
	async run(message, args) {
		let options = [
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439506325685272643/fashionframe.png"}}},
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439932070563938305/fashionframe2.jpg"}}}
		]
		this.sendOne(message, options, args, "Fashionframe")
	}
}
