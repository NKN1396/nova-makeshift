var { Command } = require("discord.js-commando");

module.exports = class command extends Command {
	constructor(client) {
		super(client, {
			name: "market",
			aliases: [
				"market",
				"warframe.market",
				"warframemarket",
				"wf.market",
				"nexus",
				"nexusstats",
				"price",
				"prices",
				"rivens",
				"warframetrader",
				"wftrader.com",
				"rivenmods",
				"warframe.trader",
				"rivens.market",
				"trade",
				"trades",
				"trading"
			],
			group: "resources",
			memberName: "market",
			description: "Popular Warframe trading sites"
		});
	}

	async run(msg) {
		var out =
		"**Websites for trading in Warframe**\n" + 
		"\n" +
		"__Warframe Market__, the biggest trading site:\n" +
		"*<http://warframe.market/>*\n" +
		"\n" +
		"__Warframe Nexus__, prices ripped from trade chat:\n" +
		"*<https://nexus-stats.com/>*\n" + 
		"\n" +
		"__Warframe Trader__, a website for Riven trading:\n" +
		"*<https://www.wftrader.com/>*";
		msg.react("✅");
		return msg.channel.send(out);
	}
};
