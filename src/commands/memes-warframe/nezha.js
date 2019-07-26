const Command = require("./../../utils/novaCommand")

module.exports = class extends Command {
	constructor(client) {
		super(client, {
			name: "nezha",
			group: "memes-warframe"
		})
	}
	
	async run(message, args) {
		var options = [
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439508433255792645/nezha.png"}}}
		]
		this.sendSelect(message, options, args)
	}
}
