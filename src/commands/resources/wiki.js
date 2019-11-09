const Command = require("./../../utils/novaCommand")
const {stripIndents} = require("common-tags")
const wikiSearch = require("./../../utils/searchWiki")
const striptags = require("striptags")

module.exports = class extends Command {
	constructor(client) {
		super(client, {
			name: "wiki",
			aliases: ["warframewiki", "wfwiki", "wikia", "wikilink", "fandom"],
			group: "resources",
			description: "Link to the Warframe wiki"
		})
	}

	async run(message, args) {
		//Check if message was sent without prompt and redirect to wiki.
		if(!args){
			try {
				await message.channel.send(stripIndents`The Warframe wiki:
				<http://warframe.wikia.com/wiki/WARFRAME_Wiki>
				*Pretty much all information is available here.*`)
				message.react("✅")	
			} catch (error) {
				console.error(error)
			}
			return
		}
		
		//Prompt entered. Doing search.
		wikiSearch(args)
			.then(async function(result) {
				let embed = {
					embed: {
						title: result.items[0].title,
						url: result.items[0].url,
						description: striptags(result.items[0].snippet)
					}
				}
				try {
					await message.channel.send(embed)
					message.react("✅")
				} catch (error) {
					console.error(error)
				}
			})
			.catch(async function(error) {
				console.error(error)
				try {
					await message.channel.send("Failed to retrieve search result. The wiki might be offline.")
					message.react("❌")
				} catch (error) {
					console.error(error)
				}
			})

	}
}
