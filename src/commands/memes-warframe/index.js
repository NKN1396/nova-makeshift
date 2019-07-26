const Command = require("./../../utils/novaCommand")

module.exports = class extends Command {
	constructor(client) {
		super(client, {
			name: "index",
			aliases: ["neffy", "nefanyo", "anyo", "talkingshit"],
			group: "memes-warframe"
		})
	}
	
	async run(message, args) {
		let options = [
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439506874300235777/index.jpg"}}}
		]
		this.sendOne(message, options, args)
	}
}
