const Commando = require("discord.js-commando")

module.exports = class Command extends Commando.Command {
	constructor(client, info) {
		info.memberName = info.name
		if (info.description === undefined) info.description = ""
		super(client, info)
	}
}
