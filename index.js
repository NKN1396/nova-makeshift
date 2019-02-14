//External dependencies
var commando = require("discord.js-commando");
var path = require("path");
var moment = require("moment");
//Load information from package.json
var token = require("./../token.json").nova;//I'm an idiot - Thanks for the lesson
//Start
var makeshiftbot = new commando.Client({
	commandPrefix : "/",
	unknownCommandResponse : false,
	owner : "153595272465743872"
});

//Activate modules
require("./src/modules/greet")(makeshiftbot);
require("./src/modules/modbuilds")(makeshiftbot);
require("./src/modules/sassynova")(makeshiftbot);
require("./src/modules/soontm")(makeshiftbot);
require("./src/modules/voicemagic")(makeshiftbot);
require("./src/modules/prism2")(makeshiftbot);

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
	.registerCommandsIn(path.join(__dirname, "src/commands"));

console.log("nova-makeshift");
console.log(moment(Date.now()).utcOffset(1).format("LLLL"));
makeshiftbot.login(token)
	.then(function(){
		console.log("Login successful");
		console.log("Logged in as " + makeshiftbot.user.tag);
		makeshiftbot.user.setActivity(("@" + makeshiftbot.user.username + " help"), {type: "PLAYING"});
		makeshiftbot.users.get("153595272465743872").send("✅ **Debug**:\n`nova-makeshift` has been restarted.");
	});
