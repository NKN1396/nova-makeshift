const Command = require("./../../utils/novaCommand")

module.exports = class extends Command {
	constructor(client) {
		super(client, {
			name: "semlar",
			aliases: ["rivencalc"],
			group: "resources",
			description: "Semlar, a website with Riven-, Amp- and Zaw-calculators"
		})
	}

	async run(msg) {
		try {
			await msg.channel.send("<https://semlar.com/>")
			msg.react("✅")
		} catch (error) {
			console.error(error)
		}
	}
}
