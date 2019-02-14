var { Command } = require("discord.js-commando");
var selectRandomly = require("./../../utils/selectRandomly");

module.exports = class command extends Command {
	constructor(client) {
		super(client, {
			name: "twinrogga",
			aliases: [
				"twinrogga",
				"rogga"
			],
			group: "memes-warframe",
			memberName: "twinrogga",
			description: "Twin Rogga"
		});
	}
	
	async run(msg, args) {
		var options = [
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439740738474082314/twinrogga.png"}}}
		];
		msg.react("✅");
		return msg.channel.send(selectRandomly(options, args));
	}
};
