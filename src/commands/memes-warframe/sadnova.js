var { Command } = require("discord.js-commando");
var selectRandomly = require("./../../utils/selectRandomly");

module.exports = class command extends Command {
	constructor(client) {
		super(client, {
			name: "sadnova",
			aliases: [
				"sadnova",
				"violin",
				"sadviolin",
				"sad",
				"nova"
			],
			group: "memes-warframe",
			memberName: "sadnova",
			description: "Nova playing a violin"
		});
	}
	
	async run(msg, args) {
		var options = [
			{embed: {description: "Artwork by [u/ButItsOppositeDay](https://www.reddit.com/user/ButItsOppositeDay)", image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439509183289884707/sadnova.gif"}}}
		];
		msg.react("✅");
		return msg.channel.send(selectRandomly(options, args));
	}
};
