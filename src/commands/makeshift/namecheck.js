var { Command } = require("discord.js-commando")
var makeshift = require("./../../resources/makeshift.json")

module.exports = class command extends Command {
	constructor(client) {
		super(client, {
			name: "namecheck",
			aliases: [
				"c",
				"check",
				"name",
				"namecheck"
			],
			group: "makeshift",
			memberName: "namecheck",
			description: "Check your name according to (old) rule 6",
			guildOnly : true
		})
	}

	async run(msg) {
		if(!msg.guild) return
		if(msg.guild.id != makeshift.guild) return
		//TODO: return wether or not name is valid (e.g. double brackets or illegal character)
		var displayName = msg.member.displayName.split("(").pop().split(")").shift().replace(/[^A-Za-z0-9.\-_]/g, "")
		if(!displayName) return
		try {
			await msg.channel.send("Your name is **" + displayName + "**.")
			msg.react("✅")
		} catch (e) {
			console.error(e)
		}
		
	}
}
