const Command = require("./../../utils/novaCommand")

module.exports = class extends Command {
	constructor(client) {
		super(client, {
			name: "forma",
			group: "memes-warframe"
		})
	}
	
	async run(message, args) {
		let options = [
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439506437761138688/forma.gif"}}}
		]
		this.sendOne(message, options, args)
	}
}
