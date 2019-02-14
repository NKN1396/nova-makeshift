var { Command } = require("discord.js-commando");
var { oneLine } = require("common-tags");

module.exports = class command extends Command {
	constructor(client) {
		super(client, {
			name: "stop",
			aliases: [
				"stop"
			],
			group: "music",
			memberName: "stop",
			description: "Stop playback",
			details: oneLine`Stops all music playback immediately and clears the entire queue.
			Nova will leave the voice channel.`
		});
	}
	
	async run() {
		return;
	}
};
