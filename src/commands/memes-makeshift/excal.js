const Command = require("./../../utils/novaCommand")

module.exports = class extends Command {
	constructor(client) {
		super(client, {
			name: "excal",
			aliases: ["excalibur", "-exc4l1bur-", "exc4l1bur", "-excalibur-"],
			group: "memes-makeshift",
			description: "-EXC4L1BUR-"
		})
	}
	
	async run(message, args) {
		let options = [
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439495770127728640/excal1.png"}}},
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439495839556042753/excal2.png"}}}
		]
		this.sendOne(message, options, args, "-EXC4L1BUR-")
	}
}
