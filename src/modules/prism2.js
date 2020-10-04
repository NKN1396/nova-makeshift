import { size } from "lodash"


const makeshift = require("./../resources/makeshift.json")
const colorRoles = makeshift.roles?.colors

/**
 * Assigns a random color after joining the Makeshift guild.
 * @param {*} client The bot client.
 */
module.exports = function(client){
	client.on("guildMemberGreeted", guildMember => {

		//Check if member joined Makeshift guild
		if(guildMember.guild.id !== makeshift.guild) return

		let color = colorRoles[BigInt(guildMember.user.id) % size(colorRoles)]

		guildMember.roles.add(sample(makeshift.roles.colors))
			.catch(console.error)

	})
}
