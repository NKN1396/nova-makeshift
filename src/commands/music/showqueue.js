var { Command } = require("discord.js-commando");

module.exports = class command extends Command {
	constructor(client) {
		super(client, {
			name: "showqueue",
			aliases: [
				"showqueue",
				"queue",
				"sq"
			],
			group: "music",
			memberName: "showqueue",
			description: "Show all queued songs",
			details : "This command shows a list of all songs that are currently queued."
		});
	}
	
	async run() {
		return;
	}
};
