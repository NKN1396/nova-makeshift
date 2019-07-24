const Commando = require("discord.js-commando")

class Command extends Commando.Command {
	constructor(client, info) {
		const name = info.name.split(":")
		info.group = name[0]
		info.name = info.memberName = name[1]
		if (info.description === undefined) info.description = ""
		super(client, info)
	}
}

module.exports = Command
