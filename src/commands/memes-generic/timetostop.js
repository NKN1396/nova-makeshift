const Command = require("./../../utils/novaCommand")

module.exports = class extends Command {
	constructor(client) {
		super(client, {
			name: "timetostop",
			aliases: [
				"frank",
				"itstimetostop",
				"filthyfrank"
			],
			group: "memes-generic",
			description: "It's time to stop!"
		})
	}
	
	async run(message) {
		try {
			await message.channel.send("https://youtu.be/2k0SmqbBIpQ")
			message.react("✅")
		} catch (error) {
			console.error(error)
		}
	}
}
