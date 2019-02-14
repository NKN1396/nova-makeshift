var { Command } = require("discord.js-commando");
var selectRandomly = require("./../../utils/selectRandomly");

module.exports = class command extends Command {
	constructor(client) {
		super(client, {
			name: "whew",
			aliases: [
				"whew",
				"sweat",
				"sweating"
			],
			group: "memes-warframe",
			memberName: "whew",
			description: "whew"
		});
	}
	
	async run(msg, args) {
		var options = [
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439509957742690315/whew.png"}}},
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439931121271177256/whew2.png"}}}
		];
		msg.react("✅");
		return msg.channel.send(selectRandomly(options, args));
	}
};
