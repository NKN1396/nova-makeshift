const Command = require("./../../utils/novaCommand")

module.exports = class extends Command {
	constructor(client) {
		super(client, {
			name: "leave",
			aliases: ["left"],
			group: "moderative",
			guildOnly : true
			//TODO: order to group - name - alias - settings in ALL commands
		})
	}

	async run(message) {
		message.react("❌")
			.catch(console.error)
	}
}
