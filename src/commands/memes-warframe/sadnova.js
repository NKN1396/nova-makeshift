const Command = require("./../../utils/novaCommand")

module.exports = class extends Command {
	constructor(client) {
		super(client, {
			name: "sadnova",
			aliases: ["violin", "sadviolin", "sad", "nova"],
			group: "memes-warframe",
			description: "Nova playing a violin"
		})
	}
	
	async run(message, args) {
		let options = [
			{embed: {description: "Artwork by [u/ButItsOppositeDay](https://www.reddit.com/user/ButItsOppositeDay)", image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439509183289884707/sadnova.gif"}}}
			//TODO: credits into footer
		]
		this.sendOne(message, options, args)
	}
}
