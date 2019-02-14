var { Command } = require("discord.js-commando");

module.exports = class command extends Command {
	constructor(client) {
		super(client, {
			name: "dice",
			aliases: ["r", "roll", "dice", "die"],
			group: "other",
			memberName: "dice",
			description: "Rolls one or more dice.",
			details: "First number is the amount of dice, second number is the amount of sides.",
			examples: ["roll", "roll 3d20"]
		});
	}

	async run(msg, args) {
		if(!args){
			msg.react("✅");
			return msg.channel.send(Math.floor((Math.random()*6)+1));
		}
		var diceCommands = args.split("d");
		if((!isNaN(diceCommands[0])) && (!isNaN(diceCommands[1]))){
			if((diceCommands[0] > 0) && (diceCommands[1] > 0) && (diceCommands[0] <= 100) && (diceCommands[1] <= 1000)){
				var out = "";
				var result = 0;
				for (var i = 0; i < diceCommands[0]; i++) {
					var singleRoll = Math.floor((Math.random()*diceCommands[1])+1);
					result += singleRoll;
					out += singleRoll + " ";
				}
				msg.react("✅");
				return msg.channel.send("🎲 Rolled " + diceCommands[0].trim() + " times with a " + diceCommands[1].trim() + "-sided die: **" + result + "**\n```" + out + "```\n");
			}
		}
		console.log("ERROR IN DICEROLL: " + msg.content);
		return;
	}
};
