const Command = require("./../../utils/novaCommand")
const makeshift = require("./../../resources/makeshift.json")

module.exports = class command extends Command {
	constructor(client) {
		let options = {
			group: "makeshift",
			name: "namecheck",
			aliases: [ "c", "check", "name" ],
			description: "Check your name according to *(old)* rule 6",
			guildOnly : true
		}
		super(client, options)
	}

	async run(message) {
		if(!message.guild) return
		if(message.guild.id != makeshift.guild) return
		//TODO: return wether or not name is valid (e.g. double brackets or illegal character)
		let displayName = message.member.displayName.split("(").pop().split(")").shift().replace(/[^A-Za-z0-9.\-_]/g, "")
		if(!displayName) return
		try {
			await message.channel.send(`Your name is **${displayName}**.`)
			message.react("✅")
		} catch (error) {
			console.error(error)
		}
	}
}
