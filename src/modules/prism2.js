var { sample } = require("lodash")

const makeshift = require("./../resources/makeshift.json")

/**
 * Assigns a random color after joining the Makeshift guild.
 * @param {*} client The bot client.
 */
module.exports = function(client){
	client.on("guildMemberGreeted", async guildMember => {

		//Check if member joined Makeshift guild
		if(guildMember.guild.id != makeshift.guild) return

		guildMember.addRole(sample(makeshift.roles.colors))
			.catch(console.error)

	})
}
