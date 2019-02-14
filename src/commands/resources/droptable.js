var { Command } = require("discord.js-commando");

module.exports = class command extends Command {
	constructor(client) {
		super(client, {
			name: "droptable",
			aliases: [
				"drops",
				"droptable",
				"droptables",
				"repo",
				"repository"
			],
			group: "resources",
			memberName: "droptable",
			description: "Warframe droptables"
		});
	}

	async run(msg) {
		var out = 
		"**Drop tables:**\n" +
		"Official Warframe droprates:\n" +
		"<http://tinyurl.com/wfdropsource>\n" +
		//"<http://www.warframe.com/repos/hnfvc0o3jnfvc873njb03enrf56.html>\n" +
		"Relic drop tables:\n" +
		"*<https://www.war.farm/>*";
		msg.react("✅");
		return msg.channel.send(out);
	}
};
