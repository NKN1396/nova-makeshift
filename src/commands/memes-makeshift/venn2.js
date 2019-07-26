const Command = require("./../../utils/novaCommand")

module.exports = class extends Command {
	constructor(client) {
		super(client, {
			name: "venn2",
			aliases: ["venn"],
			group: "memes-makeshift",
			description: "Venn2"
		})
	}
	
	async run(message) {
		try {
			message.channel.send({embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439497341938958357/venn2.png"}}})
			message.react("✅")
		} catch (error) {
			console.error(error)
		}
	}
}
