const channel_text_general_id = "272036959348588555";

/**
 * Sends a welcome message in #general.
 * @param {*} client The bot client.
 */
module.exports = function(client){
	client.on("guildMemberAdd", (guildMember)=>{
		client.channels.get(channel_text_general_id).send(`Welcome to the Makeshift clan Discord, ${guildMember.user}!`)
			.then(function(){
				console.log("GREET 01: PASS");
			})
			.catch(function(){
				console.error("GREET 01: FAIL");
			});
	});
};
