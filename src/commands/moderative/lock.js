var { Command } = require("discord.js-commando");

module.exports = class command extends Command {
	constructor(client) {
		super(client, {
			name: "lock",
			aliases: [
				"lock",
				"lockdown"
			],
			group: "moderative",
			memberName: "lock",
			description: "Locks a channel for a specified period",
			guildOnly : true
		});
	}

	async run(msg) {
		msg.react("❌");
		return;
	}
};
