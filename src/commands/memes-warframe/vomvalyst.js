var { Command } = require("discord.js-commando");
var selectRandomly = require("./../../utils/selectRandomly");

module.exports = class command extends Command {
	constructor(client) {
		super(client, {
			name: "vomvalyst",
			aliases: [
				"vomvalysts",
				"vomvalyst",
				"voms",
				"vom",
				"fuckingvomvalysts"
			],
			group: "memes-warframe",
			memberName: "vomvalyst",
			description: "Vomvalyst"
		});
	}
	
	async run(msg, args) {
		var options = [
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439745080342085633/fishing.jpg"}}}
		];
		msg.react("✅");
		return msg.channel.send(selectRandomly(options, args));
	}
};
