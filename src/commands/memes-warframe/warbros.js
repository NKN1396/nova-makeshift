var { Command } = require("discord.js-commando");
var selectRandomly = require("./../../utils/selectRandomly");

module.exports = class command extends Command {
	constructor(client) {
		super(client, {
			name: "warbros",
			aliases: [
				"warbros"
			],
			group: "memes-warframe",
			memberName: "warbros",
			description: "-"
		});
	}
	
	async run(msg, args) {
		var options = [
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439509861567561728/warbros1.jpg"}}},
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439509915581808640/warbros2.jpg"}}}
		];
		msg.react("✅");
		return msg.channel.send(selectRandomly(options, args));
	}
};
