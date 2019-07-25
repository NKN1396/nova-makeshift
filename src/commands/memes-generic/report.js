const Command = require("./../../utils/novaCommand")

module.exports = class extends Command {
	constructor(client) {
		super(client, {
			name: "report",
			group: "memes-generic",
			description: "NKs favorite button"
		})
	}
	
	async run(message) {
		try {
			await message.channel.send({embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439495126167846912/report.jpg"}}})
			message.react("✅")
		} catch (error) {
			console.error(error)
		}
	}
}
