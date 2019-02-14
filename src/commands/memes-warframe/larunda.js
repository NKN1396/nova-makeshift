var { Command } = require("discord.js-commando");
var selectRandomly = require("./../../utils/selectRandomly");

module.exports = class command extends Command {
	constructor(client) {
		super(client, {
			name: "larunda",
			aliases: [
				"larunda",
				"relay"
			],
			group: "memes-warframe",
			memberName: "larunda",
			description: "Larunda relay"
		});
	}
	
	async run(msg, args) {
		var options = [
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439507342946467851/larunda.jpg"}}}
		];
		msg.react("✅");
		return msg.channel.send(selectRandomly(options, args));
	}
};
