var { Command } = require("discord.js-commando");

module.exports = class command extends Command {
	constructor(client) {
		super(client, {
			name: "join",
			aliases: [
				"join",
				"joined"
			],
			group: "moderative",
			memberName: "join",
			description: "",
			guildOnly : true
		});
	}

	async run(msg) {
		msg.react("❌");
		return;
	}
};
