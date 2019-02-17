var { sample } = require("lodash")

const makeshift = require("./../resources/makeshift.json")

/**
 * Assigns a random color 5 minutes after joining the Makeshift guild.
 * @param {*} client The bot client.
 */
module.exports = function(client){
	client.on("guildMemberGreeted", guildMember => {

		//Check if member joined Makeshift guild
		if(guildMember.guild.id != makeshift.guild) return

		(async () => {
			try {
				if(process.env.DEBUG) console.debug("PRISM 00")
				await guildMember.addRole(sample(makeshift.roles.colors))
				if(process.env.DEBUG) console.debug("PRISM 01")
			} catch (e) {
				console.error(e)
			}
		})()

	})
}
