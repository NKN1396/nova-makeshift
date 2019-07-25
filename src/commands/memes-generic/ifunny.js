const Command = require("./../../utils/novaCommand")

module.exports = class extends Command {
	constructor(client) {
		super(client, {
			name: "ifunny",
			aliases: ["watermark"],
			group: "memes-generic",
			description: "Response to something with an ifunny watermark"
		})
	}
	
	async run(message) {
		try {
			await message.channel.send({embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439493996243320845/ifunny.jpg"}}})
			message.react("✅")
		} catch (error) {
			console.error(error)
		}
	}
}
