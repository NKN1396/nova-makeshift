const Command = require("./../../utils/novaCommand")

module.exports = class extends Command {
	constructor(client) {
		super(client, {
			name: "founder",
			aliases: ["founders", "elitism"],
			group: "memes-warframe"
		})
	}
	
	async run(message, args) {
		let options = [
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439506505365061632/founder.jpg"}}}
		]
		this.sendOne(message, options, args)
	}
}
