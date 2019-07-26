const Command = require("./../../utils/novaCommand")

module.exports = class extends Command {
	constructor(client) {
		super(client, {
			name: "erh",
			aliases: ["eidolon", "eidolonrecruitmenthub", "eidolonrecruit", "recruitmenthub", "hub"],
			group: "resources",
			description: "Eidolon Recruitment Hub Discord"
		})
	}

	async run(message) {
		try {
			await message.channel.send("http://discord.gg/ytRaRq4")
			message.react("✅")
		} catch (error) {
			console.error(error)
		}
	}
}
