var { Command } = require("discord.js-commando");
var selectRandomly = require("./../../utils/selectRandomly");

module.exports = class command extends Command {
	constructor(client) {
		super(client, {
			name: "ayatanstar",
			aliases: [
				"ayatanstar",
				"ayatanstars",
				"amberstar",
				"amber",
				"ayatanamberstar"
			],
			group: "memes-warframe",
			memberName: "ayatanstar",
			description: "Ayatan Amber Star"
		});
	}
	
	async run(msg, args) {
		var options = [
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439753991476346880/ayatanstars.png"}}}
		];
		msg.react("✅");
		return msg.channel.send(selectRandomly(options, args));
	}
};
