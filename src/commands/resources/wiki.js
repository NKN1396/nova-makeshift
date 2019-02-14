var { Command } = require("discord.js-commando");

module.exports = class command extends Command {
	constructor(client) {
		super(client, {
			name: "wiki",
			aliases: [
				"wiki",
				"warframewiki",
				"wfwiki",
				"wikia",
				"wikilink"
			],
			group: "resources",
			memberName: "wiki",
			description: "Link to the Warframe wiki"
		});
	}

	async run(msg, args) {
		if(!args){
			msg.react("✅");
			return msg.channel.send("*<http://warframe.wikia.com/wiki/WARFRAME_Wiki>*");
		}
		return;
	}
};
