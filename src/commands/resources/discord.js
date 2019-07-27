const Command = require("../../utils/novaCommand")

module.exports = class extends Command {
	constructor(client) {
		super(client, {
			name: "discord",
			alias: ["playwarframe"],
			group: "resources",
			description: "Official Warframe Discord"
		})
	}

	async run(message) {
		try {
			await message.channel.send("https://discord.gg/playwarframe")
			message.react("✅")
		} catch (error) {
			console.error(error)
		}
	}
}
