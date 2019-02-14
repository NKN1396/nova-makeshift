/**
 * Reacts with "™" to a message ending with "soon" in order to keep up the soon™ meme.
 * @param {*} bot The bot client.
 */
module.exports = function(bot){
	bot.on("message", (message)=>{
		if(message.author.id == bot.user.id) return;
		if(!message.content.toLowerCase().endsWith("soon")) return;
		message.react("™")
			.then(function(){
				console.log("SOONTM 01: PASS");
			})
			.catch(function(){
				console.error("SOONTM 01: FAIL");
			});
	});
};
