const Command = require("./../../utils/novaCommand")

module.exports = class extends Command {
	constructor(client) {
		super(client, {
			name: "warn",
			group: "moderative",
			guildOnly : true
		})
	}

	async run(message) {
		message.react("❌")
			.catch(console.error)
	}
}
