const Command = require("./../../utils/novaCommand")

module.exports = class extends Command {
	constructor(client) {
		super(client, {
			name: "thicc",
			group: "memes-generic",
			description: "T H I C C"
		})
	}
	
	async run(message) {
		try {
			await message.channel.send("https://youtu.be/NEgwxGWgiIg")
			message.react("✅")
		} catch (error) {
			console.error(error)
		}
	}
}
