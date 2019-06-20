const { Command } = require("discord.js-commando")

module.exports = class command extends Command {
	constructor(client) {
		let options = {
			name: "restart",
			aliases: [
				"restart"
			],
			memberName: "restart",
			group: "developer",
			description: "Restarts a part of Nova",
			ownerOnly : true
		}
		super(client, options)
	}

	async run(message, args) {
		if(args.toLowerCase() != "nova-makeshift") return
		await message.react("💙")
			.catch(console.error)
		console.log(`Bot restarted by user ${message.author.tag}`)
		process.exit(1)
	}
}
