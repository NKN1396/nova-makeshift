var { Command } = require("discord.js-commando")
var selectRandomly = require("./../../utils/selectRandomly")

module.exports = class command extends Command {
	constructor(client) {
		super(client, {
			name: "angryjoe",
			aliases: [
				"joe",
				"angryjoe",
				"fuckeditup",
				"youdonefuckeditup",
				"youdunfuckeditup",
				"fucked"
			],
			group: "memes-generic",
			memberName: "angryjoe",
			description: "You done fucked it up!"
		})
	}
	
	async run(msg, args) {
		const options = [
			"https://youtu.be/6OxKDKJJoXI"
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
