var { Command } = require("discord.js-commando");
var selectRandomly = require("./../../utils/selectRandomly");

module.exports = class command extends Command {
	constructor(client) {
		super(client, {
			name: "argon",
			aliases: [
				"argon"
			],
			group: "memes-warframe",
			memberName: "argon",
			description: "Argon"
		});
	}
	
	async run(msg, args) {
		var options = [
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439503010104868874/argon.png"}}},
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439743173657624576/argon2.png"}}}
		];
		msg.react("✅");
		return msg.channel.send(selectRandomly(options, args));
	}
};
