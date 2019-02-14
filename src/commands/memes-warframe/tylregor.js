var { Command } = require("discord.js-commando");
var selectRandomly = require("./../../utils/selectRandomly");

module.exports = class command extends Command {
	constructor(client) {
		super(client, {
			name: "tylregor",
			aliases: [
				"tylregor",
				"hammertime",
				"itshammertime",
				"it'shammertime"
			],
			group: "memes-warframe",
			memberName: "tylregor",
			description: "It's hammer time!"
		});
	}
	
	async run(msg, args) {
		var options = [
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439933105252466708/tylregor.jpg"}}}
		];
		msg.react("✅");
		return msg.channel.send(selectRandomly(options, args));
	}
};
