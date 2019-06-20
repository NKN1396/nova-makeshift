const { Command } = require("discord.js-commando")
const { oneLine, stripIndents } = require("common-tags")
const makeshift = require("./../../resources/makeshift.json")

module.exports = class command extends Command {
	constructor(client) {
		let options = {
			name: "rules",
			aliases: [
				"rules",
				"rule"
			],
			group: "makeshift",
			memberName: "rules",
			description: "Lists all or just a specific rule of the Makeshift clan"
		}
		super(client, options)
	}

	async run(message, args) {
		if(!message.guild) return
		if(message.guild.id != makeshift.guild) return
		try {
			let response = getResponse(args)
			await message.channel.send(response)
			message.react("✅")
		} catch (error) {
			console.error(error)
		}
	}
}

function getResponse(args){
	if(!args) return stripIndents`**General rules**:
	\`1.\` Use common sense
	\`2.\` Feel free to ask
	\`3.\` One warning
	
	**Clan (ingame) rules**:
	\`4.\` 14 days
	
	**Discord rules**:
	\`5.\` Use the right channels
	\`6.\` Include your ign
	\`7.\` You may stay
	
	*A more elaborate explanation of the rules can be acquired by issuing the \`/rules\` command with the number of the rule (e.g. \`/rule 1\`).*`

	switch(args){
		case "1":{
			return "__**Rule 1: Use common sense** *(general rule)*__\n"+
				oneLine`This is the most important rule of all.
				We believe that you should use common sense and not be too obnoxious.`
		}
		case "2":{
			return "__**Rule 2: Feel free to ask** *(general rule)*__\n" +
				oneLine`Need help with some hard mission or just need a buddy for survival and chill?
				We highly encourage you to ask!`
		}
		case "3":{
			return "__**Rule 3: One warning** *(general rule)*__\n" +
				oneLine`Every player should have a chance to better themselves.
				You will get at least one warning.
				Anything beyond that is up to us.`
		}
		case "4":{
			return "__**Rule 4: 14 days** *(clan/ingame)*__\n" +
				oneLine`*More than 14 days of inactivity will get you expelled from the clan.
				Send one of the mods a DM if you can\'t play for prolonged periods.`
		}
		case "5":{
			return "__**Rule 5: Use the right channels** *(Discord rule)*__\n" +
				"Different channels are there for a reason :wink:."
		}
		case "6":{
			return "__**Rule 6: Include your IGN** *(Discord rule)*__\n" +
				"Include your in-game name so other players can identify you as easily as you want to identify them."
		}
		case "7":{
			return "__**Rule 7: You may stay** *(Discord rule)*__\n" +
				oneLine`Non-clan members will get kicked from the Discord if we think they've lost touch with the community,
				but you're welcome to stay on this Discord if you wish to do so.`
		}
		case "34":{
			return "😏"
		}
		default:{
			return "What kind of rule is that supposed to be?"
		}
	}
}
