var { Command } = require("discord.js-commando");
var selectRandomly = require("./../../utils/selectRandomly");

module.exports = class command extends Command {
	constructor(client) {
		super(client, {
			name: "jv",
			aliases: [
				"jv",
				"jordas",
				"jordasverdict",
				"shittyraid"
			],
			group: "memes-warframe",
			memberName: "jv",
			description: "Jordas Verdict"
		});
	}
	
	async run(msg, args) {
		var options = [
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439507254300114945/jv1.png"}}},
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439507306292445184/jv2.png"}}},
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439753672491008010/jv3.png"}}},
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439931426683617291/jv4.png"}}},
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439932458385932292/jv5.png"}}}
		];
		msg.react("✅");
		return msg.channel.send(selectRandomly(options, args));
	}
};
