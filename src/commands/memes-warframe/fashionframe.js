var { Command } = require("discord.js-commando");
var selectRandomly = require("./../../utils/selectRandomly");

module.exports = class command extends Command {
	constructor(client) {
		super(client, {
			name: "fashionframe",
			aliases: [
				"fashionframe",
				"endgame",
				"contest"
			],
			group: "memes-warframe",
			memberName: "fashionframe",
			description: "Fashion frame"
		});
	}
	
	async run(msg, args) {
		var options = [
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439506325685272643/fashionframe.png"}}},
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439932070563938305/fashionframe2.jpg"}}}
		];
		msg.react("✅");
		return msg.channel.send(selectRandomly(options, args));
	}
};
