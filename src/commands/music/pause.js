var { Command } = require("discord.js-commando");

module.exports = class command extends Command {
	constructor(client) {
		super(client, {
			name: "pause",
			aliases: [
				"pause",
				"p"
			],
			group: "music",
			memberName: "pause",
			description: "Pauses the current song",
			details : "The current song will be paused indefinitely until unpaused."
		});
	}
	
	async run() {
		return;
	}
};
