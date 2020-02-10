//made by Nap Was Taken, ©Nap Was Taken 2020
const Discord = require('discord.js')
const client = new Discord.Client()
const weather = require('weather-js')
const ytdl = require("ytdl-core")
const PREFIX = '>'
client.on('guildMemberAdd', member => {

})

client.once('ready', () => {
	console.log("Connected as " + client.user.tag)

	client.user.setActivity("command.com", {type: "PLAYING"})

	client.guilds.forEach((guild) => {
		console.log(guild.name)
        guild.channels.forEach((channel) => {
            console.log(` -- ${channel.name} (${channel.type}) - ${channel.id}`)
        })
        // General channel id: 673640331719213116
	})	

	//let generalChannel = client.channels.getElementsBy("673640331719213116")
	//generalChannel.send("MS-DOS 7.11, say C:/> for setup")
})
client.on('message', (recievedMessage) => {
	if (recievedMessage.author == client.user) {
		return
	}

	if (recievedMessage.content.startsWith(">")) {
		processCommand(recievedMessage)
	}
})

function processCommand(recievedMessage) {
	let fullCommand =recievedMessage.content.substr(1)
	let splitCommand = fullCommand.split(" ")
	let primaryCommand = splitCommand[0]
	let arguments = splitCommand.slice(1)

	if (primaryCommand == "help") {
		helpCommand(arguments, recievedMessage)
	} else if (primaryCommand == "about") {
		aboutCommand(arguments, recievedMessage)
	} else if (primaryCommand == "msdos") {
		msdosCommand(arguments, recievedMessage)
	} else if (primaryCommand == "rmdir") {
		rmdirCommand(arguments, recievedMessage)
	} else if (primaryCommand == "play") {
		playCommand(arguments, recievedMessage)
	} else if (primaryCommand == "shutdown") {
		kickCommand(arguments, recievedMessage)
	} else if (primaryCommand == "about-Honey🍯🐝#2301") {
		honeyCommand(arguments, recievedMessage)
	} else if (primaryCommand == "about-Noob#0112") {
		noobCommand(arguments, recievedMessage)
	} else if (primaryCommand == "fact") {
		factCommand(arguments, recievedMessage)
	} else if (primaryCommand == "cursed-video") {
		cursedvideoCommand(arguments, recievedMessage)
	} else if (primaryCommand == "about-Father-Stalin#0752") {
		stalinCommand(arguments, recievedMessage)
		} else {
		recievedMessage.channel.send("this command its not recognized as an internal or external command, program or bat file.")	
	}
}

function aboutCommand(arguments, recievedMessage) {
	if (arguments.length == 0) {
		recievedMessage.channel.send("About:MS-DOS")
		recievedMessage.channel.send("Bot Made By:Nap Was Taken#6996")
		recievedMessage.channel.send("Version:1.0")
	}
}
function msdosCommand(arguments, recievedMessage) {
	if (arguments.length == 0) {
		recievedMessage.channel.send("About:MS-DOS")
		recievedMessage.channel.send("Bot Made By:Nap Was Taken#6996")
		recievedMessage.channel.send("Version:1.0")
		return
	}
}
function helpCommand(arguments, recievedMessage) {
	if (arguments.length == 0) {
		recievedMessage.channel.send("commands:")
		recievedMessage.channel.send("help:displays commands")
		recievedMessage.channel.send("about/msdos:displays information about the bot")
		recievedMessage.channel.send("shutdown:kicks a player")
		recievedMessage.channel.send("fact:says a daily fact")
		recievedMessage.channel.send("cursed-video:sends a link of the cursed video of the day")
		recievedMessage.channel.send("any unexisting command will display an error message")
		return
	}
}
function kickCommand(arguments, recievedMessage) {
	client.on('message', message => {
		let arguments = message.content.substring(PREFIX.lenght).split(" ")
		switch (arguments[0]) {
			case 'kick':
				if(!arguments[1]) message.channel.send('Use: >shutdown <user>')
				const user = message.mentions.users.first()
				if(user){
					const member = message.guild.member(user)

					if(member){
						member.kick('Your Computer Ran Into A Problem And Needs To Restart').then(() =>{
							message.reply(`It Is Now Safe To Turn Off The System`)
						}).catch(err =>{
							message.reply('CMOS checksum bad')
							console.log(err)
						})
					} else{
						message.reply("Your Computer Ran Into A Problem And Needs To Restart")
					}
				} else {
					message.reply('CMOS checksum bad')
				}

			break
		}

	})
}
function honeyCommand(arguments, recievedMessage) {
	if (arguments.length == 0) {
		recievedMessage.channel.send("nices't girl i know")
		recievedMessage.channel.send("very good person")
		recievedMessage.channel.send("10/10 in my personal rating")
		return
	}
}
function noobCommand(arguments, recievedMessage) {
	if (arguments.length == 0) {
		recievedMessage.channel.send("coolest person i know")
		recievedMessage.channel.send("10/10 in my rate")
		recievedMessage.channel.send("he always groovin'")
		return
	}
}
function stalinCommand(arguments, recievedMessage) {
	if (arguments.length == 0) {
		recievedMessage.channel.send("this dude")
		recievedMessage.channel.send("Likes to terrorize people")
		recievedMessage.channel.send("with his Anime Waifus")
		return
	}
}
function cursedvideoCommand(arguments, recievedMessage) {
	if (arguments.length == 0) {
		recievedMessage.channel.send("https://www.youtube.com/watch?v=a234rWN1m5M")
		return
	}
}
function factCommand(arguments, recievedMessage) {
	if (arguments.length == 0) {
		recievedMessage.channel.send("Fact of the day:")
		recievedMessage.channel.send("Typing Skepticism is like playing pingpong with your keyboard")
		return
	}
}
client.login("Njc1NTczMzE3NzEyODcxNDI0.Xj91GA._L7UdTDT10rmEn4WSR0zIY_Yi60")