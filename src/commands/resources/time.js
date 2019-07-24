const Command = require("./../../utils/novaCommand")
const { DateTime, Interval } = require("luxon")

module.exports = class command extends Command {
	constructor(client) {
		super(client, {
			group: "resources",
			name: "time",
			aliases: [ "utc", "reset" ],
			description: "Shows Warframe server time and time left until Warframe daily reset."
		})
	}

	async run(msg) {
		//Figure out the right times
		let time_now = DateTime.utc()
		let time_reset = time_now.endOf("day")
		let time_digitalExtremes = DateTime.utc().setZone("America/Toronto")
		//Checks if sorties have already been updated today (12am in London, Ontario) and sets the desired day to tommorow.
		if (time_digitalExtremes.hour >= 12) {
			time_digitalExtremes = time_digitalExtremes.plus({days: 1})
		}
		//Set to sortie refresh time.
		time_digitalExtremes = time_digitalExtremes.set({ hour: 12, minute: 0, second: 0, millisecond: 0 })
		//Intervals
		let interval_reset = Interval.fromDateTimes(time_now, time_reset)
		let interval_sorties = Interval.fromDateTimes(time_now, time_digitalExtremes)
		let embed = {
			embed: {
				fields: [
					{
						name: "New sorties in",
						value: interval_sorties.toDuration().toFormat("h':'mm")
					},
					{
						name: "Daily reset in",
						value: interval_reset.toDuration().toFormat("h':'mm")
					}
				]
			}
		}
		return msg.channel.send(`Current time: **${time_now.toFormat("h':'mm")}** *(UTC+0)*.`, embed) //TIME_24_SIMPLE
	}
}
