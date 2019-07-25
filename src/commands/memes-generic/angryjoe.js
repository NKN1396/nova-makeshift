const Command = require("./../../utils/novaCommand")

module.exports = class extends Command {
	constructor(client) {
		super(client, {
			name: "angryjoe",
			aliases: [ "joe", "fuckeditup", "youdonefuckeditup", "youdunfuckeditup", "fucked" ],
			group: "memes-generic",
			description: "You done fucked it up!"
		})
	}
	
	async run(message) {
		try {
			await message.channel.send("https://youtu.be/6OxKDKJJoXI")
			message.react("✅")
		} catch (error) {
			console.error(error)
		}
	}
}
