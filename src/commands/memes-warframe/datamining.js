var { Command } = require("discord.js-commando");
var selectRandomly = require("./../../utils/selectRandomly");

module.exports = class command extends Command {
	constructor(client) {
		super(client, {
			name: "datamining",
			aliases: [
				"datamining",
				"datamine",
				"dataminer",
				"void_glitch",
				"voidglitch"
			],
			group: "memes-warframe",
			memberName: "datamining",
			description: "Datamining"
		});
	}
	
	async run(msg, args) {
		var options = [
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439503532484329472/datamining1.jpg"}}},
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439503627330256926/datamining2.png"}}},
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439752967030046722/datamining3.jpg"}}}
		];
		msg.react("✅");
		return msg.channel.send(selectRandomly(options, args));
	}
};
