const Command = require("./../../utils/novaCommand")
var select = require("./../../utils/selectRandomly")

module.exports = class extends Command {
	constructor(client) {
		super(client, {
			name: "nocomms",
			aliases: [
				"nocomms",
				"nocommraid",
				"chaosraid"
			],
			group: "memes-warframe",
			memberName: "nocomms",
			description: "Raids without voice chat"
		})
	}
	
	async run(msg, args) {
		var options = [
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439508552827273216/nocomms.jpg"}}}
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
