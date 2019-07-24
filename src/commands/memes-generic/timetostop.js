var { Command } = require("discord.js-commando")
var selectRandomly = require("./../../utils/selectRandomly")

module.exports = class extends Command {
	constructor(client) {
		super(client, {
			name: "timetostop",
			aliases: [
				"frank",
				"timetostop",
				"itstimetostop",
				"filthyfrank"
			],
			group: "memes-generic",
			memberName: "timetostop",
			description: "It's time to stop!"
		})
	}
	
	async run(msg, args) {
		var options = [
			"https://youtu.be/2k0SmqbBIpQ"
		]
		var choice = selectRandomly(options, args)
		var out = (options.length > 1)?`${this.name} ${options.indexOf(choice) + 1}/${options.length}`:""
		try {
			if(out) {
				if(choice.embed){
					await msg.channel.send(out, choice)
				}
				else {
					await msg.channel.send(`${out}\n${choice}`)
				}
			}
			else {
				await msg.channel.send(choice)
			}
			msg.react("✅")
		} catch (e) {
			console.error(e)
		}
	}
}
