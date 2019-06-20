const { Command } = require("discord.js-commando")

module.exports = class command extends Command {
	constructor(client) {
		let options = {
			name: "shutdown",
			aliases: [
				"shutdown"
			],
			memberName: "shutdown",
			group: "developer",
			description: "Shuts a part of Nova down",
			ownerOnly : true
		}
		super(client, options)
	}

	async run(msg, args) {
		if(args.toLowerCase() != "nova-makeshift") return
		console.log(`Bot ended by user ${msg.author.tag}`)
		await msg.react("💙")
			.catch(console.error)
		msg.client.destroy()
	}
}
