const makeshift = require("./../resources/makeshift.json")

/**
 * Sends a welcome message in #general.
 * @param {*} client The bot client.
 */
module.exports = function(client){
	client.on("guildMemberAdd", guildMember => {

		//Check if member joined Makeshift guild
		if(guildMember.guild.id != makeshift.guild) return

		(async () => {
			try {
				if(process.env.DEBUG) console.debug("GREET 00")
				await client.channels.get(makeshift.channels.text.general).send(`Welcome to the Makeshift clan Discord, ${guildMember.user}!`)
				if(process.env.DEBUG) console.debug("GREET 01")
				client.emit("guildMemberGreeted", guildMember)
				if(process.env.DEBUG) console.debug("GREET 02")
			} catch (e) {
				console.error(e)
			}
		})()

	})
}
