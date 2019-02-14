var { Command } = require("discord.js-commando");
var moment = require("moment");	//TODO: Rewrite to Luxon
var pad = require("pad-left");

module.exports = class command extends Command {
	constructor(client) {
		super(client, {
			name: "time",
			aliases: [
				"time",
				"utc",
				"reset"
			],
			group: "resources",
			memberName: "time",
			description: "Shows Warframe server time and time left until Warframe daily reset."
		});
	}

	async run(msg) {
		var timeNow = moment().utc();
		var minutesUntilReset = Math.floor(moment.duration(moment(timeNow).endOf("day").diff(timeNow)) / 60000);
		var minutesWithoutHours = minutesUntilReset % 60;
		minutesWithoutHours = 0;
		return msg.channel.send(
			`Current time: **${timeNow.format("HH:mm")}** *(UTC+0)*.`, {
				embed:{
					fields:[
						{
							name:"New sorties in",
							value:"DE tied this to their regional time instead of a timezone. This is literally a pain to program."
						},
						{
							name:"Daily reset in",
							value:`${Math.floor(minutesUntilReset/60)}:${pad(minutesWithoutHours,2,"0")}`
						}
					]
				}
			});
	}
};
