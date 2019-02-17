//Config
const channel_text_builds_id = "410741742489567233"
const channel_text_warframe_id = "303662276013981697"

//Dependencies
var { stripIndents } = require("common-tags")
var fs = require("fs")
var path = require("path")
var util = require("util")

/**
 * Moderates the #builds channel. This includes deleting messages without a build, giving the user feedback and sending the user their original message.
 * @param {*} client The bot client.
 */
module.exports = function(client){
	client.on("message", (message)=>{
		//Check if messages was sent in #builds
		if(message.channel.id != channel_text_builds_id) return
		//Check if message not written by Nova
		if(message.author.id == client.user.id) return
		//Check message for criteria match. Message must have an image attached and contain the name of a Warframe or weapon.
		if(message.attachments.size == 1){
			//Check for Warframes and weapons specified.
			var items = require("./resources/allitems.json")
			for (var item of items){
				if(message.content.toLowerCase().match(item)) return
			}
			//Check for the three letter words.
			const specials = ["mag","war","bo"]
			for (var special of specials){
				if(message.content.toLowerCase().match(special)) return
			}
		}
		
		//*
		//Do not actually use this module.
		console.error("Module \"modbuilds\" has not been tested after I re-wrote it. It could be VERY buggy.")
		return
		//*/

		//Message did not meet criteria. The following section serves to delete the message.
		(async () => {
			try {
				await message.delete()
				var response = await message.channel.send(`This channel is only for final builds with a proper description, ${message.author}.\nCheck the pins for additional information.`)
				const embed = {
					embed: {
						title: "Message:",
						description: message.content,
						fields: [
							{
								name: "Disclaimer",
								value: stripIndents`${client.channels.get(channel_text_builds_id)} is for final builds only!
								It is meant as a place for you to search proven, high-quality builds with the use of Discords search function (\`CTRL + F\`).
								If you wish to discuss about a build or have questions please use ${client.channels.get(channel_text_warframe_id)} for that.`
							}
						]
					}
				}
				await message.author.send(
					`I've recovered the following message you wrote in ${message.channel}:`, embed
				).catch(function(){
					fs.writeFile(`${path.join(__dirname, "logs")}/${message.id}.log`, util.inspect(message))
				})
				response.delete(20000)
				console.log(`Tagged message ${response.id} as 'missing description'`)
			} catch (e) {
				console.error(e)
			}
		})()
	})
}
