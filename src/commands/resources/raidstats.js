const Command = require("./../../utils/novaCommand")

module.exports = class extends Command {
	constructor(client) {
		super(client, {
			name: "raidstats",
			aliases: ["christx", "trials.wf", "wf.christx.tw", "raidtrack", "raidtracker", "raidtrackers", "trials", "trials.wf"],
			group: "resources",
			description: "Raiding history trackers"
		})
	}

	async run(message) {
		try {
			await message.channel.send("https://trials.wf/")
			message.react("✅")
		} catch (error) {
			console.error(error)
		}
	}
}
