var { Command } = require("discord.js-commando");

module.exports = class command extends Command {
	constructor(client) {
		super(client, {
			name: "warn",
			aliases: [
				"warn"
			],
			group: "moderative",
			memberName: "warn",
			description: "",
			guildOnly : true
		});
	}

	async run(msg) {
		msg.react("❌");
		return;
	}
};
