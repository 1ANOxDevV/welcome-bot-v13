const client = require("../index.js")
client.on("ready", () => {
  console.log(`Im Online ${client.user.username}`)
  client.user.setActivity("POLAT BOT ♕︎",{ type:"WATCHING" })
  client.user.setStatus("idle")
  
})
