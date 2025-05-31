const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "923314926711" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "923314926711";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923314926711";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '5'  // put '5' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "false" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_16_49_05_31_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTI2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTQsXG4gICAgICAgIDgyLFxuICAgICAgICAxODAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNCxcbiAgICAgICAgNDIsXG4gICAgICAgIDYxLFxuICAgICAgICA2NCxcbiAgICAgICAgOTAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTYxLFxuICAgICAgICA1MSxcbiAgICAgICAgMjI0LFxuICAgICAgICA4OCxcbiAgICAgICAgNzYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjIyLFxuICAgICAgICA5MCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTgsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTk1LFxuICAgICAgICA1LFxuICAgICAgICA0MCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDMsXG4gICAgICAgIDMwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDMzLFxuICAgICAgICA2NixcbiAgICAgICAgMTY0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDcwLFxuICAgICAgICAxMyxcbiAgICAgICAgMTMyLFxuICAgICAgICA3MixcbiAgICAgICAgNDYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjM4LFxuICAgICAgICA5MSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDIxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE4NixcbiAgICAgICAgODZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgOTgsXG4gICAgICAgIDgyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDY0LFxuICAgICAgICA5OCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMyxcbiAgICAgICAgNDgsXG4gICAgICAgIDQwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTE1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgODUsXG4gICAgICAgIDExOCxcbiAgICAgICAgOTQsXG4gICAgICAgIDQxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNDEsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjA1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDQyLFxuICAgICAgICA0NixcbiAgICAgICAgOTIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNjMsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MyxcbiAgICAgICAgOTQsXG4gICAgICAgIDUsXG4gICAgICAgIDkyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjA1LFxuICAgICAgICA0MCxcbiAgICAgICAgODAsXG4gICAgICAgIDI2LFxuICAgICAgICA2NixcbiAgICAgICAgNjYsXG4gICAgICAgIDg4LFxuICAgICAgICA2MCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjU0LFxuICAgICAgICA2MCxcbiAgICAgICAgNTMsXG4gICAgICAgIDU0LFxuICAgICAgICAxNDksXG4gICAgICAgIDE1MixcbiAgICAgICAgODAsXG4gICAgICAgIDMsXG4gICAgICAgIDgyLFxuICAgICAgICA2LFxuICAgICAgICAxODEsXG4gICAgICAgIDU4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDI2LFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICA1MCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxODAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTk3LFxuICAgICAgICAxNTksXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTUwLFxuICAgICAgICA3NixcbiAgICAgICAgMjM3LFxuICAgICAgICAyMjksXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDMxLFxuICAgICAgICA1MyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDU5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjgsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjI3LFxuICAgICAgICA1OSxcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIxLFxuICAgICAgICA4OSxcbiAgICAgICAgNTQsXG4gICAgICAgIDU3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDI0LFxuICAgICAgICAxODUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjksXG4gICAgICAgIDM0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjA1LFxuICAgICAgICA0MCxcbiAgICAgICAgNDQsXG4gICAgICAgIDg1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjE5LFxuICAgICAgICA2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDgyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDIyLFxuICAgICAgICAxOTksXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxMixcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgODRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMDksXG4gICAgICAgIDEwNixcbiAgICAgICAgMjE2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjE1LFxuICAgICAgICA5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNTAsXG4gICAgICAgIDYwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTI3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTE4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTQsXG4gICAgICAgIDIzMixcbiAgICAgICAgNDAsXG4gICAgICAgIDM2LFxuICAgICAgICA2LFxuICAgICAgICAxODksXG4gICAgICAgIDg0LFxuICAgICAgICA3MyxcbiAgICAgICAgMjI4LFxuICAgICAgICA2OSxcbiAgICAgICAgMTA4LFxuICAgICAgICA2OSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTcxLFxuICAgICAgICA5NCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDY3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMyxcbiAgICAgICAgMzYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTg1LFxuICAgICAgICA1NyxcbiAgICAgICAgMjUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwieEo0dHRCVTdxVlZjS255N0NiZldjZzFhbVNQNlpZR21PaTVJOHhIcm5PMD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMzMTQ5MjY3MTFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjcyRkJBRDYzREU2NUExNEQ2MjAzRTVERjI5MTRFQzFBXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTc0ODcxMDE0OFxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzMxNDkyNjcxMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQjczNzEyQUJDMjQwMTFBMTI5NDcyQTk5OTJFQzZGNzZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzQ4NzEwMTQ4XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImcwNFZDVGVFUVZXQjhLTUhTYnhyWHdcIixcbiAgXCJwaG9uZUlkXCI6IFwiYTIwMTBiYjctODA4Yi00Y2RlLWIyNzctMWU4ZDY2OWMyYjRhXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzNSxcbiAgICAgIDQsXG4gICAgICAxMjEsXG4gICAgICAxMzYsXG4gICAgICAyMjYsXG4gICAgICA4NixcbiAgICAgIDM4LFxuICAgICAgOTcsXG4gICAgICAxNTAsXG4gICAgICAxNDgsXG4gICAgICA0NCxcbiAgICAgIDEzMyxcbiAgICAgIDEyMixcbiAgICAgIDI1NCxcbiAgICAgIDE2NyxcbiAgICAgIDcxLFxuICAgICAgMjA1LFxuICAgICAgMTA0LFxuICAgICAgMTg1LFxuICAgICAgMjUyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4MixcbiAgICAgIDM4LFxuICAgICAgMTEzLFxuICAgICAgMTcwLFxuICAgICAgODEsXG4gICAgICAxMDEsXG4gICAgICAxMDMsXG4gICAgICAxNjYsXG4gICAgICAxMDQsXG4gICAgICAyNTUsXG4gICAgICAxNTAsXG4gICAgICAxMDEsXG4gICAgICAyMjAsXG4gICAgICAyNDIsXG4gICAgICA1LFxuICAgICAgMTUzLFxuICAgICAgNzcsXG4gICAgICAxODMsXG4gICAgICAxNjMsXG4gICAgICAxNzVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOdWV2YjBFRVA3bDdNRUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImQxMTFNM1poclkzK2Y1TCtxR0ZxSTFNS1NEQStVVXhPblFPUHkySFFpVFE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwib0xjOVV5eElHZlB4am5EQndiUGUweDZzdUtBY3ZNTzJjZUF5TFEzMjFOSWNGQmh0aDhUZW9PRVBrMzRwdjV5Z29Rb2M2QjM2dTNiY3oyb0x0eldMREE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwib2QzRmNiNTN3Z09FMHozdFh0RU56bWVWSzNrVWhaWm5TMnVZK0ZYVXR3eWxZcnYvbW50WWU1M0hBbzU0QWl5TmdHVTFQMHNEdTdSZ3VyUE1TSWg3QlE9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMzMTQ5MjY3MTE6OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjY2ODA5NTc2NTMyMzA6OUBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzMxNDkyNjcxMTo5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgNTJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc0ODcxMDE0NCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU1DRVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTUNFLmpzb24iOiAie1wia2V5RGF0YVwiOlwieFJKQWFIT2ZGcDlwOENRcmZjaFZnYzh2eTVpbDlOWFdPUjBjSUQ2anRxST1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMjAyNjcxNDUxLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3NDg3MTAxNDkxMDhcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "Raju Boss",
  packname: process.env.PACK_NAME || "Raju Boss",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Raju Boss",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "sk_e17fe171b8d395b9df440e504aa8aeaacb08ead66db9692e";
global.aitts_Voice_Id = process.env.AITTS_ID|| "wHI7GVgoHNG9c8H7zXAt";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
