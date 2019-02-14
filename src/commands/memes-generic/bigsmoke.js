var { Command } = require("discord.js-commando");
var selectRandomly = require("./../../utils/selectRandomly");

module.exports = class command extends Command {
	constructor(client) {
		super(client, {
			name: "bigsmoke",
			aliases: [
				"bigsmoke",
				"extradip"
			],
			group: "memes-generic",
			memberName: "bigsmoke",
			description: "Big smokes order"
		});
	}
	
	async run(msg, args) {
		var options = [
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439492759057989642/extradip1.png"}}},
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439492837248335893/extradip2.png"}}},
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439492900355702786/extradip3.jpg"}}},
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439492984510218253/extradip4.jpg"}}},
			"https://www.youtube.com/watch?v=nRTp2WGXfdk",
			"I'll have two number 9s, a number 9 large, a number 6 with extra dip, a number 7, two number 45s, one with cheese, and a large soda."
		];
		msg.react("✅");
		return msg.channel.send(selectRandomly(options, args));
	}
};
