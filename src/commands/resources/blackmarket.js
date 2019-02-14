var { Command } = require("discord.js-commando");

module.exports = class command extends Command {
	constructor(client) {
		super(client, {
			name: "blackmarket",
			aliases: [
				"bm",
				"blackmarket"
			],
			group: "resources",
			memberName: "blackmarket",
			description: "Warframe Black Market Discord"
		});
	}

	async run(msg) {
		msg.react("✅");
		return msg.channel.send("https://discord.gg/EwD6J37");
	}
};
