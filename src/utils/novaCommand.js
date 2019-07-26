const Commando = require("discord.js-commando")
const select = require("./selectRandomly")

module.exports = class Command extends Commando.Command {
	constructor(client, info) {
		info.memberName = info.name
		if (info.description === undefined) info.description = ""
		super(client, info)
	}

	async sendSelect (message, options, args, name) {
		try {
			await message.channel.send(select(options, args, name))
			message.react("✅")
		} catch (error) {
			console.error(error)
		}
	}
}
