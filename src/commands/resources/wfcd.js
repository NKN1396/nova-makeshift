const Command = require("./../../utils/novaCommand")

module.exports = class extends Command {
	constructor(client) {
		super(client, {
			name: "wfcd",
			group: "resources",
			description: "Warframe community Discord"
		})
	}

	async run(message) {
		try {
			await message.channel.send("https://discord.gg/warframe")
			message.react("✅")
		} catch (error) {
			console.error(error)
		}
	}
}
