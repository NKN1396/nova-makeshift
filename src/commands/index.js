const path = require("path")

/**
 * Handles registration and loading of Novas commands.
 * @param {Object} client The CommandoClient to register the commands in.
 */
module.exports = function(client) {
	client.registry
		.registerGroups([
			["developer", "Developer"],
			["makeshift", "Makeshift"],
			["resources", "Resources"],
			["music", "Music"],
			["memes-warframe", "Memes (Warframe)"],
			["memes-makeshift", "Memes (Makeshift)"],
			["memes-generic", "Memes (general)"],
			["other", "Other"],
			["moderative", "Moderative"]
		])
		.registerCommandsIn(path.join(__dirname))
		.registerDefaultTypes()
		.registerDefaultGroups()
		.registerDefaultCommands(
			{
				"help" : true,
				"prefix" : false,
				"eval_" : true,
				"ping" : false,
				"commandState" : false
			}
		)
}
