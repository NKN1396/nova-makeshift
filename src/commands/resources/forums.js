var { Command } = require("discord.js-commando");

module.exports = class command extends Command {
	constructor(client) {
		super(client, {
			name: "forums",
			aliases: [
				"forum",
				"forums",
				"warframe-forums",
				"wf-forums",
				"warframeforums"
			],
			group: "resources",
			memberName: "forums",
			description: "Official Warframe forums"
		});
	}

	async run(msg) {
		msg.react("✅");
		return msg.channel.send("<https://forums.warframe.com/>");
	}
};
