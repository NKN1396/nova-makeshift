var { Command } = require("discord.js-commando")
var selectRandomly = require("./../../utils/selectRandomly")

module.exports = class extends Command {
	constructor(client) {
		super(client, {
			name: "delet",
			aliases: [
				"delet"
			],
			group: "memes-warframe",
			memberName: "delet",
			description: "Delete"
		})
	}
	
	async run(msg, args) {
		var options = [
			//{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439510963331399680/delet.jpg"}}}, //Kanna
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439503723052662793/delet.jpg"}}}
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
