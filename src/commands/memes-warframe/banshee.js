var { Command } = require("discord.js-commando");
var selectRandomly = require("./../../utils/selectRandomly");

module.exports = class command extends Command {
	constructor(client) {
		super(client, {
			name: "banshee",
			aliases: [
				"banshee",
				"bancheese",
				"afkfarm",
				"xini"
			],
			group: "memes-warframe",
			memberName: "banshee",
			description: "Banshee"
		});
	}
	
	async run(msg, args) {
		var options = [
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439503238585384961/banshee.jpg"}}}
		];
		msg.react("✅");
		return msg.channel.send(selectRandomly(options, args));
	}
};
