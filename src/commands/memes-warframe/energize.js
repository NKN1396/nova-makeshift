var { Command } = require("discord.js-commando");
var selectRandomly = require("./../../utils/selectRandomly");

module.exports = class command extends Command {
	constructor(client) {
		super(client, {
			name: "energize",
			aliases: [
				"energize"
			],
			group: "memes-warframe",
			memberName: "energize",
			description: "Arcane Energize"
		});
	}
	
	async run(msg, args) {
		var options = [
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439506108252422145/energize1.png"}}},
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439506168834949120/energize2.png"}}},
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439932996410408960/energize3.png"}}}
		];
		msg.react("✅");
		return msg.channel.send(selectRandomly(options, args));
	}
};
