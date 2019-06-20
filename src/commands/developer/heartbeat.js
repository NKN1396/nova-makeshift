const { Command } = require("discord.js-commando")

module.exports = class command extends Command {
	constructor(client) {
		let options = {
			name: "heartbeat",
			aliases: [
				"ping"
			],
			memberName: "heartbeat",
			group: "developer",
			description: "Checks which parts of Nova are running"
		}
		super(client, options)
	}

	async run(msg) {
		msg.react("💙")
			.catch(console.error)
	}
}
