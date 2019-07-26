const Command = require("./../../utils/novaCommand")
var select = require("./../../utils/selectRandomly")

module.exports = class extends Command {
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
		})
	}
	
	async run(msg, args) {
		var options = [
			{embed: {description: "Artwork by [u/ButItsOppositeDay](https://www.reddit.com/user/ButItsOppositeDay)", image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439509183289884707/sadnova.gif"}}}
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
