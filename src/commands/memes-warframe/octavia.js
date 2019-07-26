const Command = require("./../../utils/novaCommand")

module.exports = class extends Command {
	constructor(client) {
		super(client, {
			name: "octavia",
			aliases: ["doot", "octaviadoot", "dootavia"],
			group: "memes-warframe"
		})
	}
	
	async run(message, args) {
		let options = [
			{embed: {title: "Artwork by rinkhet", url:"http://rinkhet.tumblr.com/", image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439508630522298388/octavia.png"}}},
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439931915534073875/octavia2.jpg"}}}
			//TODO: image of kid with trumpet following girl
		]
		this.sendOne(message, options, args)
	}
}
