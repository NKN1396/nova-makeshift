var { Command } = require("discord.js-commando");
var { stripIndents } = require("common-tags");

module.exports = class command extends Command {
	constructor(client) {
		super(client, {
			name: "reddit",
			aliases: [
				"subreddit",
				"reddit",
				"r/warframe",
				"r/wf",
				"subreddits",
				"reddits"
			],
			group: "resources",
			memberName: "reddit",
			description: "Warframe subreddits"
		});
	}

	async run(msg) {
		var out =
		stripIndents`**Warframe subreddits: **
		
		__r/Warframe__, the big one:
		<https://www.reddit.com/r/Warframe/>
		
		__r/MemeFrame__, has some good stuff:
		<https://www.reddit.com/r/MemeFrame/>
		
		__r/WarframeRunway__, some dank fashionframe:
		<https://www.reddit.com/r/WarframeRunway/>`;
		msg.react("✅");
		return msg.channel.send(out);
	}
};
