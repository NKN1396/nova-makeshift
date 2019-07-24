const Command = require("./../../utils/novaCommand")

module.exports = class command extends Command {
	constructor(client) {
		let options = {
			name: "developer:heartbeat",
			aliases: [ "ping" ],
			description: "Checks which parts of Nova are running"
		}
		super(client, options)
	}

	async run(msg) {
		msg.react("💙")
			.catch(console.error)
	}
}
