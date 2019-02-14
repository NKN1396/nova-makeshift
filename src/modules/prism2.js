var colors = require("./../resources/colors.json");
var { sample } = require("lodash");

/**
 * Assigns a random color 5 minutes after joining the Makeshift guild.
 * @param {*} bot The bot client.
 */
module.exports = function(bot){
	bot.on("guildMemberAdd", (guildMember)=>{
		guildMember.changeColorSoon = true;
		setTimeout(function(){
			if(guildMember.changeColorSoon){
				guildMember.changeColorSoon = false;
				guildMember.addRole(sample(colors));
			}
		}, 300000);
	});
};
