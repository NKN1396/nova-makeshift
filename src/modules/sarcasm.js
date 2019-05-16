module.exports = function(bot){
	bot.on("message", (message)=>{

		if(!message.content.toLowerCase().endsWith("/s")) return

		(async () => {
			try {
				if(process.env.DEBUG) console.debug("SARCASM 00")
				await message.channel.send("*(That was sarcasm)*")
				if(process.env.DEBUG) console.debug("SARCASM 01")
			} catch (e) {
				console.error(e)
			}
		})()

	})
}
