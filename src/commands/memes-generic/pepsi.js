var { Command } = require("discord.js-commando");
var selectRandomly = require("./../../utils/selectRandomly");

module.exports = class command extends Command {
	constructor(client) {
		super(client, {
			name: "pepsi",
			aliases: [
				"pepsi",
				"bepis"
			],
			group: "memes-generic",
			memberName: "pepsi",
			description: "Handy chart for comparing different kinds of Pepsi."
		});
	}
	
	async run(msg, args) {
		var options = [
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439495079124533248/pepsi.png"}}}
		];
		msg.react("✅");
		return msg.channel.send(selectRandomly(options, args));
	}
};
