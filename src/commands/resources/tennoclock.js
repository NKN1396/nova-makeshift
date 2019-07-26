const Command = require("./../../utils/novaCommand")

module.exports = class extends Command {
	constructor(client) {
		super(client, {
			name: "tennoclock",
			aliases: ["tennoclocknews", "tcn", "tgdm"],
			group: "resources",
			description: "TennoClockNews, a news site run by a veteran"
		})
	}

	async run(message) {
		try {
			await message.channel.send("<https://tennoclocknews.com/>")
			message.react("✅")
		} catch (error) {
			console.error(error)
		}
	}
}
