var { Command } = require("discord.js-commando");
var { oneLine } = require("common-tags");
var { stripIndents } = require("common-tags");

module.exports = class command extends Command {
	constructor(client) {
		super(client, {
			name: "rules",
			aliases: [
				"rules",
				"rule"
			],
			group: "makeshift",
			memberName: "rules",
			description: "Lists all or just a specific rule of the Makeshift clan"
		});
	}

	async run(msg, args) {
		var resp;
		if(args){
			switch(args){
				case "1":{
					resp = "__**Rule 1: Use common sense** *(general rule)*__\n"+
						oneLine`This is the most important rule of all.
						We believe that you should use common sense and not be too obnoxious.`;
					break;
				}
				case "2":{
					resp = "__**Rule 2: Feel free to ask** *(general rule)*__\n" +
						oneLine`Need help with some hard mission or just need a buddy for survival and chill?
						We highly encourage you to ask!`;
					break;
				}
				case "3":{
					resp = "__**Rule 3: One warning** *(general rule)*__\n" +
						oneLine`Every player should have a chance to better themselves.
						You will get at least one warning.
						Anything beyond that is up to us.`;
					break;
				}
				case "4":{
					resp = "__**Rule 4: 14 days** *(clan/ingame)*__\n" +
						oneLine`*More than 14 days of inactivity will get you expelled from the clan.
						Send one of the mods a DM if you can\'t play for prolonged periods.`;
					break;
				}
				case "5":{
					resp = "__**Rule 5: Use the right channels** *(Discord rule)*__\n" +
						"Different channels are there for a reason :wink:.";
					break;
				}
				case "6":{
					resp = "__**Rule 6: Include your IGN** *(Discord rule)*__\n" +
						"Include your in-game name so other players can identify you as easily as you want to identify them.";
					break;
				}
				case "7":{
					resp = "__**Rule 7: You may stay** *(Discord rule)*__\n" +
						oneLine`Non-clan members will get kicked from the Discord if we think they've lost touch with the community,
						but you're welcome to stay on this Discord if you wish to do so.`;
					break;
				}
				case "34":{
					resp = "😏";
					break;
				}
				default:{
					resp = "What kind of rule is that supposed to be?";
					break;
				}
			}
		}
		else{
			resp = stripIndents`**General rules**:
			\`1.\` Use common sense
			\`2.\` Feel free to ask
			\`3.\` One warning
			
			**Clan (ingame) rules**:
			\`4.\` 14 days
			
			**Discord rules**:
			\`5.\` Use the right channels
			\`6.\` Include your ign
			\`7.\` You may stay
			
			*A more elaborate explanation of the rules can be acquired by issuing the \`/rules\` command with the number of the rule (e.g. \`/rule 1\`).*`;
		}
		msg.react("✅");
		return msg.channel.send(resp);
	}
};
