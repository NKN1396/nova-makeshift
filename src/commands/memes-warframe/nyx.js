var { Command } = require("discord.js-commando");
var selectRandomly = require("./../../utils/selectRandomly");

module.exports = class command extends Command {
	constructor(client) {
		super(client, {
			name: "nyx",
			aliases: [
				"nyx",
				"kys",
				"kyss",
				"killyourself",
				"killyourselves"
			],
			group: "memes-warframe",
			memberName: "nyx",
			description: "Nyx"
		});
	}
	
	async run(msg, args) {
		var options = [
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439752546761048070/nyx.jpg"}}}
		];
		msg.react("✅");
		return msg.channel.send(selectRandomly(options, args));
	}
};
