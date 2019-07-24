const Command = require("./../../utils/novaCommand")
const makeshift = require("./../../resources/makeshift.json")

module.exports = class command extends Command {
	constructor(client) {
		let options = {
			name: "makeshift:alliance",
			group: "makeshift",
			description: "Link to the alliance Discord"
		}
		super(client, options)
	}

	async run(message) {
		if(!message.guild) return
		if(message.guild.id != makeshift.guild) return
		try {
			await message.channel.send("We're not in an alliance right now.")
			message.react("✅")
		} catch (error) {
			console.error(error)
		}
	}
}
