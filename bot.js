const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("671460740191748138")
setInterval(function() {
channel.send(`اyousif112 yousif112 yousif112 yousif112`);
}, 30)
})

client.login(process.env.BOT_TOKEN);