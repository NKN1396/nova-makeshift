var { Command } = require("discord.js-commando");
var selectRandomly = require("./../../utils/selectRandomly");

module.exports = class command extends Command {
	constructor(client) {
		super(client, {
			name: "amesha",
			aliases: [
				"amesha"
			],
			group: "memes-warframe",
			memberName: "amesha",
			description: "Amesha"
		});
	}
	
	async run(msg, args) {
		var options = [
			"https://youtu.be/sPXBqiMHzi4"
		];
		msg.react("✅");
		return msg.channel.send(selectRandomly(options, args));
	}
};
