var { Command } = require("discord.js-commando");
var selectRandomly = require("./../../utils/selectRandomly");

module.exports = class command extends Command {
	constructor(client) {
		super(client, {
			name: "lambsauce",
			aliases: [
				"lambsauce",
				"lamb",
				"lambb",
				"located",
				"gordon",
				"ramsay",
				"sauce",
			],
			group: "memes-generic",
			memberName: "lambsauce",
			description: "Lamb Sauce L O C A T E D"
		});
	}
	
	async run(msg, args) {
		var options = [
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439494334149296128/lambsauce.jpg"}}},
			"https://youtu.be/NiESb9M1HmY"
		];
		msg.react("✅");
		return msg.channel.send(selectRandomly(options, args));
	}
};
