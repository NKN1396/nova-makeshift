const Command = require("./../../utils/novaCommand")

module.exports = class extends Command {
	constructor(client) {
		super(client, {
			name: "rsb",
			aliases: ["wfrsb", "schoolbus", "raidschoolbus", "recruitmentschoolbus"],
			group: "resources",
			description: "Warframe recruitment schoolbus Discord"
		})
	}

	async run(message) {
		try {
			await message.channel.send("https://discord.gg/wfrsb")
			message.react("✅")
		} catch (error) {
			console.error(error)
		}
	}
}
