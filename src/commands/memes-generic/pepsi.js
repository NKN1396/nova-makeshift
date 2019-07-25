const Command = require("./../../utils/novaCommand")

module.exports = class extends Command {
	constructor(client) {
		super(client, {
			name: "pepsi",
			aliases: ["bepis"],
			group: "memes-generic",
			description: "Handy chart for comparing different kinds of Pepsi."
		})
	}
	
	async run(message) {
		try {
			await message.channel.send({embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439495079124533248/pepsi.png"}}})
			message.react("✅")
		} catch (error) {
			console.error(error)
		}
	}
}
