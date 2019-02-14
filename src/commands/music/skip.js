var { Command } = require("discord.js-commando");
var { oneLine } = require("common-tags");

module.exports = class command extends Command {
	constructor(client) {
		super(client, {
			name: "skip",
			aliases: [
				"skip"
			],
			group: "music",
			memberName: "skip",
			description: "Skip the current song",
			details: oneLine`Skips the current song and plays the next one.
			The song will be removed from the queue.`
		});
	}
	
	async run() {
		return;
	}
};
