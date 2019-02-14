var { Command } = require("discord.js-commando");
var selectRandomly = require("./../../utils/selectRandomly");

module.exports = class command extends Command {
	constructor(client) {
		super(client, {
			name: "thicc",
			aliases: [
				"thicc"
			],
			group: "memes-generic",
			memberName: "thicc",
			description: "T H I C C"
		});
	}
	
	async run(msg, args) {
		var options = [
			"https://youtu.be/NEgwxGWgiIg"
		];
		msg.react("✅");
		return msg.channel.send(selectRandomly(options, args));
	}
};
