const Command = require("../../utils/novaCommand")
var colors = require("./../../resources/makeshift.json").roles.colors
var { stripIndents } = require("common-tags")
const guildCheck = require("./util/guildCheck")

module.exports = class extends Command {
	constructor(client) {
		super(client, {
			name: "colors",
			aliases: ["color", "colours", "colour"],
			group: "other",
			description: "Changes your color.",
			details: "Change your color or list all available colors.",
			examples:
			["colors", "color red"]
		})
	}

	async run(message, args) {
		if(!message.guild) return
		if(!guildCheck(message)) return

		let color = pickColor(args)
		if(!color){
			message.channel.send(
				stripIndents`The following colors are available to be assigned:
				\`${Object.keys(colors).toString().replace(/,/g, "`, `")}\`
				
				*Use \`${message.client.commandPrefix}color name\` to assign yourself a color.*`
			)
				.catch(console.error)
			return
		} else {
			try {
				//Add new color
				if(!message.member.roles.has(color)){
					await message.member.roles.add(color)
				}
				//Remove old colors
				var rolesToRemove = message.member.roles
					.filter(role =>
						Object.values(colors).some(color =>
							color === role.id
						)
					)
				//Remove @everyone from the list of roles to remove
				rolesToRemove.sweep(role =>
					role == message.guild.defaultRole
				)
				//Remove freshly applied role from the list of roles to remove
				rolesToRemove.sweep(role =>
					role.id === color
				)
				message.member.roles.remove(rolesToRemove)
			} catch (error) {
				console.error(error)
			}
		}
		message.react("✅")
			.catch(console.error)
	}
}

function pickColor(args){
	switch(args.toLowerCase()){
		case "turquoise":
			return colors.turquoise
		case "green":
			return colors.green
		case "blue":
			return colors.blue
		case "purple":
			return colors.purple
		case "pink":
			return colors.pink
		case "yellow":
			return colors.yellow
		case "orange":
			return colors.orange
		case "red":
			return colors.red
		case "grey":
			return colors.grey
		case "lime":
		case "badass":
		case "bada55":
			return colors.lime
	}
}
