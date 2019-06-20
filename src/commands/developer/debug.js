const { Command } = require("discord.js-commando")

module.exports = class command_debug extends Command {

	constructor(client) {
		let options = {
			name: "debug",
			memberName: "debug",
			group: "developer",
			description: "A command used for testing various things. ",
			ownerOnly : true
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
