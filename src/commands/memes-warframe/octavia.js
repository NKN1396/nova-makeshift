var { Command } = require("discord.js-commando");
var selectRandomly = require("./../../utils/selectRandomly");

module.exports = class command extends Command {
	constructor(client) {
		super(client, {
			name: "octavia",
			aliases: [
				"octavia"
			],
			group: "memes-warframe",
			memberName: "octavia",
			description: "Octavia"
		});
	}
	
	async run(msg, args) {
		var options = [
			{embed: {description: "Artwork by [rinkhet](http://rinkhet.tumblr.com/)", image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439508630522298388/octavia.png"}}},
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439931915534073875/octavia2.jpg"}}}
		];
		msg.react("✅");
		return msg.channel.send(selectRandomly(options, args));
	}
};
