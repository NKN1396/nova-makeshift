var { Command } = require("discord.js-commando");

module.exports = class command extends Command {
	constructor(client) {
		super(client, {
			name: "mute",
			aliases: [
				"mute"
			],
			group: "moderative",
			memberName: "mute",
			description: "Mutes a member for a specified period",
			guildOnly : true
		});
	}

	async run(msg) {
		msg.react("❌");
		return;
	}
};
