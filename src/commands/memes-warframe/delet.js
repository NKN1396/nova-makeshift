var { Command } = require("discord.js-commando");
var selectRandomly = require("./../../utils/selectRandomly");

module.exports = class command extends Command {
	constructor(client) {
		super(client, {
			name: "delet",
			aliases: [
				"delet"
			],
			group: "memes-warframe",
			memberName: "delet",
			description: "Delete"
		});
	}
	
	async run(msg, args) {
		var options = [
			//{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439510963331399680/delet.jpg"}}}, //Kanna
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439503723052662793/delet.jpg"}}}
		];
		msg.react("✅");
		return msg.channel.send(selectRandomly(options, args));
	}
};
