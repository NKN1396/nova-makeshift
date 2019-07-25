const Command = require("./../../utils/novaCommand")

module.exports = class extends Command {
	constructor(client) {
		super(client, {
			name: "ohno",
			aliases: [ "retard", "retarded" ],
			group: "memes-generic",
			description: "OH NO (it's retarded)"
		})
	}

	async run(message) {
		try {
			await message.channel.send({embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439494709208154123/ohno.png"}}})
			message.react("✅")
		} catch (error) {
			console.error(error)
		}
	}
}
