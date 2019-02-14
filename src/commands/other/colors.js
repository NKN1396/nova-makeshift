var { Command } = require("discord.js-commando");
var colors = require("./../../resources/colors.json");
var { stripIndents } = require("common-tags");

const guild_makeshift_id = "272036959348588555";

module.exports = class command extends Command {
	constructor(client) {
		super(client, {
			name: "colors",
			aliases:
			[
				"colors",
				"color",
				"colours",
				"colour"
			],
			group: "other",
			memberName: "colors",
			description: "Changes your color.",
			details: "Change your color or list all available colors.",
			examples:
			[
				"colors",
				"color red"
			]
		});
	}

	async run(msg, args) {
		msg.react("✅");
		var ID_colorToAssign = returnColor(args);
		if(!ID_colorToAssign){
			var allColorNames = "";
			for(var color in colors) allColorNames += color + " ";
			allColorNames.trim();
			msg.channel.send(
				stripIndents`The following colors are available to be assigned:
				${allColorNames}
				
				*Use \`/color name\` to assign yourself a color.*`
			);
			return;
		}
		if(msg.guild.id != guild_makeshift_id) return;
		msg.member.changeColorSoon = false; //For compatibility with Prism2
		msg.member.addRole(ID_colorToAssign)
			.then(function(){
				var collection_ID_colorToRemove = [];
				for(var color in colors){
					var ID_color = colors[color];
					if(ID_color == ID_colorToAssign) continue;
					if(msg.member.roles.get(ID_color)){
						collection_ID_colorToRemove.push(ID_color);
					}
				}
				msg.member.removeRoles(collection_ID_colorToRemove);
			});
	}
};

function returnColor(args){
	switch(args.toLowerCase()){
		case "turquoise":
			return colors.turquoise;
		case "green":
			return colors.green;
		case "blue":
			return colors.blue;
		case "purple":
			return colors.purple;
		case "pink":
			return colors.pink;
		case "yellow":
			return colors.yellow;
		case "orange":
			return colors.orange;
		case "red":
			return colors.red;
		case "grey":
			return colors.grey;
		case "lime":
		case "badass":
		case "bada55":
			return colors.lime;
	}
}
