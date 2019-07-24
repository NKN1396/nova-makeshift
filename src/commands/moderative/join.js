var Command = require("./../../utils/novaCommand")

module.exports = class command extends Command {
	constructor(client) {
		super(client, {
			group: "moderative",
			name: "join",
			aliases: [ "joined" ],
			guildOnly : true
		})
	}

	async run(msg) {
		msg.react("❌")
		return
	}
}
