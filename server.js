//Enable debug logs with the "debug" argument at start
process.argv.forEach((value) => {
	if(value.match(/^(\/|--?)debug\b$/i)) process.env.DEBUG = true
})
if(process.env.DEBUG) console.debug("debug logs enabled")

//External dependencies
var commando = require("discord.js-commando")
var path = require("path")
var discordErrorHandler = require("discord.js-handles")

//Load info
const token = require("./token.json")	//I'm an idiot - Thanks for the lesson
const makeshift = require("./src/resources/makeshift.json")

//Create new Discord client
var makeshiftbot = new commando.Client({
	commandPrefix : "!",
	unknownCommandResponse : false,
	owner : "153595272465743872"
})

//Configure & load command registry
makeshiftbot.registry
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
	.registerDefaultGroups()
	.registerDefaultTypes()
	.registerDefaultCommands(
		{
			"help" : true,
			"prefix" : false,
			"eval_" : true,
			"ping" : false,
			"commandState" : false
		}
	)
	.registerCommandsIn(path.join(__dirname, "src/commands"))

const handlerOptions = {
	logAllGuilds: false,
	guilds: [
		makeshift.guild
	],
	name: "nova-public",
	notify: {
		users: [
			"153595272465743872"
		],
		channels: []
	}
}

discordErrorHandler(makeshiftbot, handlerOptions)

//Load custom modules
require("./src/modules/greet")(makeshiftbot)
require("./src/modules/modbuilds")(makeshiftbot)
require("./src/modules/sassynova")(makeshiftbot)
require("./src/modules/sarcasm")(makeshiftbot)
require("./src/modules/soontm")(makeshiftbot)
require("./src/modules/voicemagic")(makeshiftbot)
require("./src/modules/prism2")(makeshiftbot)

//Start bot
makeshiftbot.login(token)

makeshiftbot.on("ready", () => {
	atNovaHelp(makeshiftbot.user)
})
makeshiftbot.on("resume", ()=> {
	atNovaHelp(makeshiftbot.user)
})

function atNovaHelp(user){
	user.setPresence({
		game: {
			name: "@Nova help",
			type: "PLAYING"
		},
		status: "online"
	})
}
