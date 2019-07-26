const Command = require("./../../utils/novaCommand")
var select = require("./../../utils/selectRandomly")

module.exports = class extends Command {
	constructor(client) {
		super(client, {
			name: "lambsauce",
			aliases: ["lamb", "lambb", "located", "gordon", "ramsay", "sauce"],
			group: "memes-generic",
			description: "Lamb Sauce L O C A T E D"
		})
	}
	
	async run(message, args) {
		let options = [
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439494334149296128/lambsauce.jpg"}}},
			{content: "https://youtu.be/NiESb9M1HmY"}
		]
		try {
			await message.channel.send(select(options, args, "Lamb sauce"))
			message.react("✅")
		} catch (error) {
			console.error(error)
		}
	}
}
