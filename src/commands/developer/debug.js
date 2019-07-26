const Command = require("./../../utils/novaCommand")

module.exports = class extends Command {

	constructor(client) {
		let options = {
			group: "developer",
			name: "debug",
			description: "A command used for testing various things.",
			ownerOnly : true,
			userPermissions: ["KICK_MEMBERS", "VIEW_CHANNEL", "ADMINISTRATOR"]
		}
		super(client, options)
	}

	async run(message) {
		try {
			await message.channel.send("Literally nothing")
			message.react("✅")
		} catch (error) {
			console.error(error)
		}
	}
	
}
