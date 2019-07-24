const Command = require("./../../utils/novaCommand")
const guildCheck = require("./util/guildCheck")

module.exports = class extends Command {
	constructor(client) {
		let options = {
			group: "makeshift",
			name: "alliance",
			description: "Link to the alliance Discord"
		}
		super(client, options)
	}

	async run(message) {
		if(!message.guild) return
		if(!guildCheck(message)) return
		try {
			await message.channel.send("We're not in an alliance right now.")
			message.react("✅")
		} catch (error) {
			console.error(error)
		}
	}
}
