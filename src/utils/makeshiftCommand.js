const Command = require("./../../../utils/novaCommand")
const makeshift = require("./../../../resources/makeshift.json")

module.exports = class extends Command {
	constructor(client, options) {
		super(client, options)
		this.guildOnly = true
	}

	guildCheck (message) {
		if(!message.guild) {
			decline(message)
			return false
		}
		if(message.guild.id != makeshift.guild) {
			decline(message)
			return false
		}
		//Makeshift guild check passed
		return true
	}

	onBlock(message, reason, data) {
		if(reason === "guildOnly") {
			decline(message)
		} else {
			super.onBlock(message, reason, data)
		}
	}
}

async function decline (message) {
	try {
		message.channel.send("This command is only available on the Makeshift clan Discord.")
		await message.react("❌")
	} catch (error) {
		console.error(error)
	}
}
