var { Command } = require("discord.js-commando");
var selectRandomly = require("./../../utils/selectRandomly");

module.exports = class command extends Command {
	constructor(client) {
		super(client, {
			name: "maimingstrike",
			aliases: [
				"maimingstrike",
				"maiming",
				"ms",
				"memeingstrike",
				"memestrike"
			],
			group: "memes-warframe",
			memberName: "maimingstrike",
			description: "Maiming Strike"
		});
	}
	
	async run(msg, args) {
		var options = [
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439743493758386188/maimingstrike1.png"}}},
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439931239621984277/maimingstrike2.png"}}}
		];
		msg.react("✅");
		return msg.channel.send(selectRandomly(options, args));
	}
};
