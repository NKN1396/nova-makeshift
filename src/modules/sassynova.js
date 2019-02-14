//Config
const trigger = "Nova,";

//Dependencies
var { sample } = require("lodash");

/**
 * Makes Nova respond with sassy comments after asked a question.
 * @param {*} bot The bot client.
 */
module.exports = function(bot){
	bot.on("message", (message)=>{
		if(!message.content.toLowerCase().startsWith(trigger.toLowerCase())) return;
		message.channel.send(answer(message))
			.then(function(){
				console.log("SASSYNOVA 01: PASS");
			})
			.catch(function(){
				console.error("SASSYNOVA 01: FAIL");
			});
	});
};

function answer(message){
	if(message.content.toLowerCase().match("zephyr")){
		return "Zephyr is a useless piece of shit, stop asking.";
	}
	var numberRandom = Math.random();
	//LEGENDARY
	if((numberRandom*10000)<1){
		return (`Love you, ${message.author} 😘`);
	}
	//RARE
	if((numberRandom*15)<1){
		let responses = [
			"My answer-module broke. Could you ask me again?",
			"Oh my gosh.. 🙄",
			"¯\\\\_(ツ)\\_/¯",
			"Are you okay?",
			"Ask me later",
			"Try again",
			"Don't annoy me",
			"Alright 🙄",
			"You sound like a Limbo-main.",
			"Fuck off"
		];
		return sample(responses);
	}
	//UNCOMMON
	if((numberRandom*5)<1){
		let responses = [
			"Not sure",
			"Dunno",
			"WTF?",
			"ಠ_ಠ",
			"Uuuuhhhh~",
			"K",
			"Forget it",
			"._.",
			"Okay",
			"N-No!",
		];
		return sample(responses);
	}
	//COMMON
	let responses = [
		"Certainly",
		"Yeah",
		"Most likely",
		"Yes",
		"NO!",
		"(☞ﾟヮﾟ)☞           No",
		"Nah",
		"Nope",
		"Doubt it",
		"Nuh-uh~",
		"No.",
		"Never ever",
		"No",
		"How about no?",
		"Absolutely",
		"Why not?",
		"Not really",
		"Negative.",
		"No way!",
		"Absolutely... **NOT!**",
		"👎",
		"👍",
		"Definitely",
		"No?",
		"No Thanks!",
		"Not on my watch",
		"**NEIN!**"
	];
	return sample(responses);
}
