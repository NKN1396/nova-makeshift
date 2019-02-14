var { Command } = require("discord.js-commando");
var selectRandomly = require("./../../utils/selectRandomly");

module.exports = class command extends Command {
	constructor(client) {
		super(client, {
			name: "fishing",
			aliases: [
				"fishing",
				"norg",
				"murkray"
			],
			group: "memes-warframe",
			memberName: "fishing",
			description: "Fishing"
		});
	}
	
	async run(msg, args) {
		var options = [
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439746051810000896/norg.jpg"}}}
			//Image of REEEE Tenno do this shit
		];
		msg.react("✅");
		return msg.channel.send(selectRandomly(options, args));
	}
};
