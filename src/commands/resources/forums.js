const Command = require("./../../utils/novaCommand")

module.exports = class extends Command {
	constructor(client) {
		super(client, {
			name: "forums",
			aliases: ["forum", "warframe-forums", "wf-forums", "warframeforums"],
			group: "resources",
			description: "Official Warframe forums"
		})
	}

	async run(message) {
		try {
			await message.channel.send("<https://forums.warframe.com/>")
			message.react("✅")
		} catch (error) {
			console.error(error)
		}
	}
}
