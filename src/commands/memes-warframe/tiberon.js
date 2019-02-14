var { Command } = require("discord.js-commando");
var selectRandomly = require("./../../utils/selectRandomly");

module.exports = class command extends Command {
	constructor(client) {
		super(client, {
			name: "tiberon",
			aliases: [
				"tiberon",
				"toblerone",
				"tiberonprime",
				"tobleroneprime"
			],
			group: "memes-warframe",
			memberName: "tiberon",
			description: "Tiberon"
		});
	}
	
	async run(msg, args) {
		var options = [
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439740797907107840/tiberon.jpg"}}}
		];
		msg.react("✅");
		return msg.channel.send(selectRandomly(options, args));
	}
};
