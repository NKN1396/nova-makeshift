var { Command } = require("discord.js-commando");

module.exports = class command extends Command {
	constructor(client) {
		super(client, {
			name: "alliance",
			aliases: [
				"alliance"
			],
			memberName: "alliance",
			group: "makeshift",
			description: "Link to the alliance Discord"
		});
	}

	async run(msg) {
		msg.react("✅");
		return msg.channel.send("We're not in an alliance right now.");
	}
};
