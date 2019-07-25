const Command = require("./../../utils/novaCommand")

module.exports = class extends Command {
	constructor(client) {
		super(client, {
			name: "imgay",
			aliases: ["gay"],
			group: "memes-generic",
			description: "I'm gay!"
		})
	}
	
	async run(message) {
		try {
			await message.channel.send("https://youtu.be/uwJSFYRtjHI")
			message.react("✅")
		} catch (error) {
			console.error(error)
		}
	}
}
