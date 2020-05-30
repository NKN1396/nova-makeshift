var axios = require("axios").default

var imageEnding = /^.*\.(jpg|jpeg|gif|webp|png)$/i


module.exports = function(client){
	client.on("message", async message => {
		if(!message.guild) return
		if((!message.attachments) && (!message.embeds)) return
		message.attachments.forEach(MessageAttachment => {
			MessageAttachment.attachment
			
		})
		message.embeds.forEach(embed => {
			if(embed.type != "image") return

		})

		//Content-Type
		
	})
}

function handleMessage(){

}
