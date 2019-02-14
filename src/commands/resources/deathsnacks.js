var { Command } = require("discord.js-commando");

module.exports = class command extends Command {
	constructor(client) {
		super(client, {
			name: "deathsnacks",
			aliases: [
				"deathsnacks",
				"tracker",
				"tracking"
			],
			group: "resources",
			memberName: "deathsnacks",
			description: "An event tracker for Warframe"
		});
	}

	async run(msg) {
		msg.react("✅");
		return msg.channel.send("<http://deathsnacks.com/wf/index.html>");
	}
};
