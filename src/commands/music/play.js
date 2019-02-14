var { Command } = require("discord.js-commando");
var { oneLine } = require("common-tags");

module.exports = class command extends Command {
	constructor(client) {
		super(client, {
			name: "play",
			aliases: [
				"play",
				"q"
			],
			group: "music",
			memberName: "play",
			description: "Play a song",
			details : oneLine`Use this command to play a song.
			It will perform a YouTube search and add the song to the queue.
			Nova will join your voice channel if there's no music playing currently.`
		});
	}
	
	async run() {
		return;
	}
};
