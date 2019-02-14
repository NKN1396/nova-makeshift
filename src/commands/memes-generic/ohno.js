var { Command } = require("discord.js-commando");
var selectRandomly = require("./../../utils/selectRandomly");

module.exports = class command extends Command {
	constructor(client) {
		super(client, {
			name: "ohno",
			aliases: [
				"ohno",
				"retard",
				"retarded"
			],
			group: "memes-generic",
			memberName: "ohno",
			description: "OH NO (it's retarded)"
		});
	}

	async run(msg, args) {
		var options = [
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439494709208154123/ohno.png"}}}
		];
		msg.react("✅");
		return msg.channel.send(selectRandomly(options, args));
	}
};
