var { Command } = require("discord.js-commando");

module.exports = class command extends Command {
	constructor(client) {
		super(client, {
			name: "tennoclock",
			aliases: [
				"tennoclock",
				"tennoclocknews",
				"tcn",
				"tgdm"
			],
			group: "resources",
			memberName: "tennoclock",
			description: "TennoClockNews, a news site run by a veteran"
		});
	}

	async run(msg) {
		msg.react("✅");
		return msg.channel.send("<https://tennoclocknews.com/>");
	}
};
