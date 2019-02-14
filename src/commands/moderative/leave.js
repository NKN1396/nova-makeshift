var { Command } = require("discord.js-commando");

module.exports = class command extends Command {
	constructor(client) {
		super(client, {
			name: "leave",
			aliases: [
				"leave",
				"left"
			],
			group: "moderative",
			memberName: "leave",
			description: "",
			guildOnly : true
		});
	}

	async run(msg) {
		msg.react("❌");
		return;
	}
};
