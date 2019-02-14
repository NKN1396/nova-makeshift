var { Command } = require("discord.js-commando");
var selectRandomly = require("./../../utils/selectRandomly");

module.exports = class command extends Command {
	constructor(client) {
		super(client, {
			name: "nocomms",
			aliases: [
				"nocomms",
				"nocommraid",
				"chaosraid"
			],
			group: "memes-warframe",
			memberName: "nocomms",
			description: "Raids without voice chat"
		});
	}
	
	async run(msg, args) {
		var options = [
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439508552827273216/nocomms.jpg"}}}
		];
		msg.react("✅");
		return msg.channel.send(selectRandomly(options, args));
	}
};
