var { Command } = require("discord.js-commando");
var info = require("./../../../package.json");
var { stripIndents } = require("common-tags");

module.exports = class command extends Command {
	constructor(client) {
		super(client, {
			name: "info",
			aliases: [
				"info",
				"about"
			],
			memberName: "info",
			group: "developer",
			description: "Displays information about this bot."
		});
	}

	async run(msg) {
		var textInfo =
		stripIndents`__**Nova version ${info.version}**__
		${info.description}
		Programmed by ${info.author}.
		*Please issue the \`/help\` command if you wish to view a list of commands.*`;
		msg.react("✅");
		return msg.channel.send(textInfo);
	}
};
