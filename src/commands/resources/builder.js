var { Command } = require("discord.js-commando");

module.exports = class command extends Command {
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
				"observer"
			],
			group: "resources",
			memberName: "builder",
			description: "Warframe builds"
		});
	}

	async run(msg) {
		var out = 
		"**Builds:**\n" +
		"Warframe builder:\n" +
		"*<http://warframe-builder.com/>*\n" +
		"distant Observer YouTube channel:\n" +
		"*<https://www.youtube.com/channel/UC13043Ga8_N3kItV22oHazQ>*";
		msg.react("✅");
		return msg.channel.send(out);
	}
};
