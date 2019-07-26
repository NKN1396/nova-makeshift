var Command = require("./../../utils/novaCommand")

module.exports = class extends Command {
	constructor(client) {
		super(client, {
			group: "moderative",
			name: "join",
			aliases: [ "joined" ],
			guildOnly : true
		})
	}

	async run(message) {
		message.react("❌")
			.catch(console.error)
	}
}
