const Command = require("./../../utils/novaCommand")

module.exports = class extends Command {
	constructor(client) {
		super(client, {
			name: "note",
			group: "moderative",
			guildOnly : true
		})
	}

	async run(message) {
		message.react("❌")
			.catch(console.error)
	}
}
