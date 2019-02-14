var { Command } = require("discord.js-commando");

module.exports = class command extends Command {
	constructor(client) {
		super(client, {
			name: "note",
			aliases: [
				"note"
			],
			group: "moderative",
			memberName: "note",
			description: "",
			guildOnly : true
		});
	}

	async run(msg) {
		msg.react("❌");
		return;
	}
};
