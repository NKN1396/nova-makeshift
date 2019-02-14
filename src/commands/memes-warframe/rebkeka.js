var { Command } = require("discord.js-commando");
var selectRandomly = require("./../../utils/selectRandomly");

module.exports = class command extends Command {
	constructor(client) {
		super(client, {
			name: "rebkeka",
			aliases: [
				"rebkeka",
				"kek",
				"rebecca",
				"derebecca",
				"[de]rebecca"
			],
			group: "memes-warframe",
			memberName: "rebkeka",
			description: "[DE]Rebecca"
		});
	}
	
	async run(msg, args) {
		var options = [
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439508819794460672/rebkeka.png"}}}
		];
		msg.react("✅");
		return msg.channel.send(selectRandomly(options, args));
	}
};
