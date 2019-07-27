const makeshift = require("./../../../resources/makeshift.json")

module.exports = function(message) {
	//TODO: if(!message.guild) return
	if(message.guild.id === makeshift.guild) {return true} //Makeshift guild check passed, continue
	//Makeshift guild check failed
	(async () => {
		try {
			message.channel.send("This command is only available on the Makeshift clan Discord.")
			await message.react("❌")
		} catch (error) {
			console.error(error)
		}
	})()
	return false
	
}
