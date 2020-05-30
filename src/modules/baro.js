const makeshift = require("./../resources/makeshift.json")
const baro = /wh(?:e|y|ich).*b(?:orko|aro|imjo|onko|ilbo|ermo|armo|runo|orso|orneo|osnia|eerr?ow)/ig

/**
 * Responds with Baro's current position.
 * @param {*} bot The bot client.
 */
module.exports = function(bot){
	bot.on("message", message => {

		//Check if message contains trigger words
		if(!message.content.match(baro)) return
		//Check if message was issued on a guild
		if(!message.member) return
		//Check if message of guild was Makeshift
		if(message.member.guild.id != makeshift.guild) return

		message.channel.send("HERE!")
			.catch(console.error)

	})
}
