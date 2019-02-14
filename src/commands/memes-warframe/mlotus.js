var { Command } = require("discord.js-commando");
var selectRandomly = require("./../../utils/selectRandomly");

module.exports = class command extends Command {
	constructor(client) {
		super(client, {
			name: "mlotus",
			aliases: [
				"mlotus",
				"m'lotus"
			],
			group: "memes-warframe",
			memberName: "m'lotus",
			description: "M'Lotus \\*tips fedora\\*"
		});
	}
	
	async run(msg, args) {
		var options = [
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439753121284096000/limbo2.jpg"}}}
		];
		msg.react("✅");
		return msg.channel.send(selectRandomly(options, args));
	}
};
