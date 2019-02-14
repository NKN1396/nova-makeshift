var { Command } = require("discord.js-commando");
var selectRandomly = require("./../../utils/selectRandomly");
var { oneLine } = require("common-tags");

module.exports = class command extends Command {
	constructor(client) {
		super(client, {
			name: "pos",
			aliases: [
				"pos",
				"plains",
				"poe"
			],
			group: "memes-warframe",
			memberName: "pos",
			description: "I love plains of Eidolon..."
		});
	}
	
	async run(msg, args) {
		var options = [
			oneLine`I love plains of Eidolon,
			let's remove every mission in the game and put their rewards in the plains so we can play max range Nova every game.
			Killing enemies isn't even fun,
			Warframe was made to fish and mine and I can even use this fish oil to presumably power my level 25 Odonata.
			I can even do more incredibly interesting defence missions bounties for 5 Nistlepods and if I'm lucky, a host migration.
			Finally, once the sun goes down and I'm making my way to the final bounty I can take sweet comfort in the bounty failed text in the middle of my screen.`
		];
		msg.react("✅");
		return msg.channel.send(selectRandomly(options, args));
	}
};
