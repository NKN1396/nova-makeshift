var { Command } = require("discord.js-commando");

module.exports = class extends Command {
	constructor(client) {
		super(client, {
			name: "builder",
			aliases: [
				"builder",
				"builds",
				"warframe-builder",
				"wf-builder",
				"distantobserver",
				"distant-observer",
				"observer",
				"calculator"
			],
			group: "resources",
			memberName: "builder",
			description: "Warframe builds"
		})
	}

	async run(msg) {
		
		var embed = {
			embed: {
				test: "https://tennoware.com/"
			}
		}
		const out = 
		"**Builds:**\n" +
		"Warframe builder:\n" +
		"*<http://warframe-builder.com/>*\n" +
		"Tennoware, an Alternative" +
		"https://tennoware.com/" +
		"distant Observer YouTube channel:\n" +
		"*<https://www.youtube.com/channel/UC13043Ga8_N3kItV22oHazQ>*"
		msg.react("✅")
		return msg.channel.send(out)
	}
}
