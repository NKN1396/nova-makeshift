var { Command } = require("discord.js-commando");
var selectRandomly = require("./../../utils/selectRandomly");

module.exports = class command extends Command {
	constructor(client) {
		super(client, {
			name: "imgay",
			aliases: [
				"gay"
			],
			group: "memes-generic",
			memberName: "imgay",
			description: "I'm gay!"
		});
	}
	
	async run(msg, args) {
		var options = [
			"https://youtu.be/uwJSFYRtjHI"
		];
		msg.react("✅");
		return msg.channel.send(selectRandomly(options, args));
	}
};
