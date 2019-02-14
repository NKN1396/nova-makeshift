var { Command } = require("discord.js-commando");

module.exports = class command extends Command {
	constructor(client) {
		super(client, {
			name: "semlar",
			aliases: [
				"semlar",
				"rivencalc"
			],
			group: "resources",
			memberName: "semlar",
			description: "semlar, a website with Riven-, Amp- and Zaw-calculators"
		});
	}

	async run(msg) {
		msg.react("✅");
		return msg.channel.send("<https://semlar.com/>");
	}
};
