const Command = require("./../../utils/novaCommand")

module.exports = class extends Command {
	constructor(client) {
		super(client, {
			name: "lock",
			aliases: ["lockdown"],
			group: "moderative",
			description: "Locks a channel for a specified period",
			guildOnly : true
		})
	}

	async run(message) {
		message.react("❌")
			.catch(console.error)
	}
}
