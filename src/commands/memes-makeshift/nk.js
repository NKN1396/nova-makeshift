const Command = require("./../../utils/novaCommand")
var select = require("./../../utils/selectRandomly")

module.exports = class extends Command {
	constructor(client) {
		super(client, {
			name: "nk",
			aliases: ["nkn1396", "enkay", "nkn"],
			group: "memes-makeshift",
			description: "NKN1396"
		})
	}
	
	async run(message, args) {
		let options = [
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439496512012025858/nk1.jpg"}}},
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439496587027152917/nk2.png"}}},
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439496765255974942/nk3.jpg"}}}
		]
		try {
			await message.channel.send(select(options, args, "NKN1396"))
			message.react("✅")
		} catch (error) {
			console.error(error)
		}
	}
}
