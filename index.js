// by Const#1337 ;-------;

const Discord = require("discord.js")
const client = new Discord.Client()
const config = require("./config.json")

client.on("ready", async () => {
	console.log(`[+] Estou Online, By Const#1337`)
})

client.on('userUpdate', (oldUser, newUser) => {
  if (oldUser.avatar !== newUser.avatar)           
  console.log(`${newUser.username}'s avatar changed!`)
    const embedgif = new MessageEmbed()
     .setAuthor(config.nomeservidor)
     .setImage(newUser.avatarURL({ dynamic:true }))
     .setColor(config.embedcolor);
client.channels.fetch(config.randomgifs).then(channel => {
channel.send(embedgif);
});
})

client.on('userUpdate', (oldUser, newUser) => {
  if (oldUser.avatar !== newUser.avatar)           
  console.log(`${newUser.username}'s avatar changed!`)
    const embedicon = new MessageEmbed()
     .setAuthor(config.nomeservidor)
     .setImage(newUser.avatarURL({ dynamic:false }))
     .setColor(config.embedcolor);
client.channels.fetch(config.randomicons).then(channel => {
channel.send(embedicon);
});
})
 
client.login(config.token)
  