var { Command } = require("discord.js-commando");
var selectRandomly = require("./../../utils/selectRandomly");

module.exports = class command extends Command {
	constructor(client) {
		super(client, {
			name: "vaubanthink",
			aliases: [
				"vaubanthink",
				"think",
				"thinking",
				"vauban"
			],
			group: "memes-warframe",
			memberName: "vaubanthink",
			description: "Vauban thinking"
		});
	}
	
	async run(msg, args) {
		var options = [
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439509798342623232/vaubanthink.png"}}}
		];
		msg.react("✅");
		return msg.channel.send(selectRandomly(options, args));
	}
};
