var { Command } = require("discord.js-commando");

module.exports = class command extends Command {
	constructor(client) {
		super(client, {
			name: "map",
			aliases: [
				"map",
				"dojo",
				"dojomap"
			],
			group: "makeshift",
			memberName: "map",
			description: "Map of the Makeshift dojo"
		});
	}

	async run(msg) {
		msg.react("✅");
		return msg.channel.send(
			{
				embed: {
					description: "Makeshift clan dojo map",
					image: {
						url: "https://cdn.discordapp.com/attachments/437703489347649539/437708566787260426/map.png"
					}
				}
			}
		);
	}
};
