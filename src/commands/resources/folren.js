const Command = require("./../../utils/novaCommand")

module.exports = class extends Command {
	constructor(client) {
		super(client, {
			name: "folren",
			aliases: ["folrunhow"],
			group: "resources",
			description: "Folren's Riven Epicness Server"
		})
	}

	async run(message) {
		try {
			await message.channel.send("https://discord.gg/rnzSW6k")
			message.react("✅")
		} catch (error) {
			console.error(error)
		}
	}
}
