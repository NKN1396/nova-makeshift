var { Command } = require("discord.js-commando");
var selectRandomly = require("./../../utils/selectRandomly");

module.exports = class command extends Command {
	constructor(client) {
		super(client, {
			name: "noanime",
			aliases: [
				"japan",
				"animu",
				"anime",
				"weeaboos",
				"weeaboo",
				"weebs",
				"otaku",
				"otakus",
				"weeb",
				"noanime",
				"no_anime"
			],
			group: "memes-generic",
			memberName: "noanime",
			description: ""
		});
	}
	
	async run(msg, args) {
		var options = [
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439494529863778304/noanime1.jpg"}}},
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439494615654072320/noanime2.jpg"}}}
		];
		msg.react("✅");
		return msg.channel.send(selectRandomly(options, args));
	}
};
