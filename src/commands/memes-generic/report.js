const Command = require("./../../utils/novaCommand")

module.exports = class extends Command {
	constructor(client) {
		super(client, {
			name: "report",
			group: "memes-generic",
			description: "NKs favorite button"
		})
	}
	
	async run(message, args) {
		let options = [
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439495126167846912/report.jpg"}}}
		]
		this.sendOne(message, options, args, "Report")
	}
}
