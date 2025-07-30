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


global.devs = "923240806210" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "923240806210";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923240806210";




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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_02_02_07_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMzcsXG4gICAgICAgIDksXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDY0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDk1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDU5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDU2LFxuICAgICAgICAzOSxcbiAgICAgICAgMjE0LFxuICAgICAgICA1OCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDk4LFxuICAgICAgICA1MSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNTksXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMCxcbiAgICAgICAgMjksXG4gICAgICAgIDEwMixcbiAgICAgICAgNTAsXG4gICAgICAgIDc0LFxuICAgICAgICAzMSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMzksXG4gICAgICAgIDUzLFxuICAgICAgICAxNTksXG4gICAgICAgIDE0LFxuICAgICAgICAxMjksXG4gICAgICAgIDI0NixcbiAgICAgICAgNTQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjA0LFxuICAgICAgICA4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNzcsXG4gICAgICAgIDIyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDU4LFxuICAgICAgICAxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjcsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTExXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjQ2LFxuICAgICAgICA2MixcbiAgICAgICAgMjUyLFxuICAgICAgICA1MCxcbiAgICAgICAgMTcyLFxuICAgICAgICA1NixcbiAgICAgICAgMjQzLFxuICAgICAgICAxODcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgODQsXG4gICAgICAgIDg4LFxuICAgICAgICA4NyxcbiAgICAgICAgMTksXG4gICAgICAgIDExOCxcbiAgICAgICAgMjQ4LFxuICAgICAgICA3NixcbiAgICAgICAgMTIxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyOCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3OSxcbiAgICAgICAgNjYsXG4gICAgICAgIDMzLFxuICAgICAgICAxODQsXG4gICAgICAgIDM2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDExNixcbiAgICAgICAgNCxcbiAgICAgICAgNjMsXG4gICAgICAgIDY4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDg4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDg0LFxuICAgICAgICAxMDksXG4gICAgICAgIDk5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDQwLFxuICAgICAgICAxMyxcbiAgICAgICAgMTk4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjE5LFxuICAgICAgICA5NixcbiAgICAgICAgOTYsXG4gICAgICAgIDE0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgMjMwLFxuICAgICAgICAxMCxcbiAgICAgICAgMjEzLFxuICAgICAgICA3MCxcbiAgICAgICAgOTUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMzUsXG4gICAgICAgIDExNCxcbiAgICAgICAgNDYsXG4gICAgICAgIDU2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNzcsXG4gICAgICAgIDkwLFxuICAgICAgICAzMSxcbiAgICAgICAgMTI5LFxuICAgICAgICA1MSxcbiAgICAgICAgODMsXG4gICAgICAgIDk2LFxuICAgICAgICAzOCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMCxcbiAgICAgICAgMTI5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUzLFxuICAgICAgICAxODgsXG4gICAgICAgIDEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTQyLFxuICAgICAgICA2MyxcbiAgICAgICAgMTgwLFxuICAgICAgICA5MSxcbiAgICAgICAgMjA1LFxuICAgICAgICA3NSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDk0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTY1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDQ3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTU2LFxuICAgICAgICA5LFxuICAgICAgICAzNixcbiAgICAgICAgMTQyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTU3LFxuICAgICAgICAyNyxcbiAgICAgICAgNTcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTAwLFxuICAgICAgICAzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExMixcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA4MlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDUsXG4gICAgICAgIDExNSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjExLFxuICAgICAgICA5MixcbiAgICAgICAgMTMxLFxuICAgICAgICAxMjksXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDk4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxODEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjU1LFxuICAgICAgICA3MixcbiAgICAgICAgMTUxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDk3LFxuICAgICAgICAxMDksXG4gICAgICAgIDQ0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDM2LFxuICAgICAgICAyMDksXG4gICAgICAgIDMxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyNyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMSxcbiAgICAgICAgOCxcbiAgICAgICAgNTYsXG4gICAgICAgIDgyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDM5LFxuICAgICAgICA5NixcbiAgICAgICAgMTkxLFxuICAgICAgICA2NCxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDExXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNDksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiVDFRYUxSSUVpVHJCNFZlS2pTdVFBN045dzlmVlpTbmxQdk95bUdxdWRtQT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiS1VtcndtWkNRSGV3eGg3QllzREdTZ1wiLFxuICBcInBob25lSWRcIjogXCI1MjVkOTcyYi1lMGVlLTQwZTAtODcxNi1mYTk4YzQ5ODc4ZWFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTA4LFxuICAgICAgMjM5LFxuICAgICAgMjMzLFxuICAgICAgMTIzLFxuICAgICAgMTQxLFxuICAgICAgNjMsXG4gICAgICAyNDQsXG4gICAgICAyNDAsXG4gICAgICA0NixcbiAgICAgIDEwOSxcbiAgICAgIDEzNixcbiAgICAgIDc0LFxuICAgICAgMTA1LFxuICAgICAgNTksXG4gICAgICA2MSxcbiAgICAgIDk0LFxuICAgICAgMjE0LFxuICAgICAgMjQsXG4gICAgICA0MixcbiAgICAgIDMyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzNyxcbiAgICAgIDEyOSxcbiAgICAgIDgxLFxuICAgICAgNDYsXG4gICAgICAxNjUsXG4gICAgICAxMjcsXG4gICAgICA0OSxcbiAgICAgIDEsXG4gICAgICAxNTQsXG4gICAgICA3NCxcbiAgICAgIDIsXG4gICAgICAxMixcbiAgICAgIDE5OSxcbiAgICAgIDg0LFxuICAgICAgMjAzLFxuICAgICAgNDgsXG4gICAgICAxNTUsXG4gICAgICAyMyxcbiAgICAgIDE0MCxcbiAgICAgIDU3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTHF4cTk4QkVJLzZwY1FHR0FZZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJOcUdmbVkweFkwWGJSNzZlSjlSUXBLa2xqeXpYYzdaR0RlVXVMYUJQQWlZPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInlvUVVVK1BCeTR1bDNmdlZoYk1zL2VHOFZ2dWNNcW8rb20vemFFN0ZkWkZSR3prQzYwZ1ZWT0RLWVhzLzRGSEFjbnhYb1dRanlWQzdXR1UwMUpoTEFnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIm8rSWRlL25HNHEvYzdGSjcxb1lzVSs0Z1kva1JORjRIRmNTY2VSWktjcnZwVEYwRDZ3VWhJNVRwRHJZRXNnVTA1emdUTXZZV09USHNOUk84S0tpa0NnPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMjQwODA2MjEwOjQwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwic2lsZW50IGtpbGxlclwiLFxuICAgIFwibGlkXCI6IFwiMTk3MjQyNTE0MzM3OTkxOjQwQGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMjQwODA2MjEwOjQwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMzhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc1Mzg0MDkxNCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU1rVlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTWtVLmpzb24iOiAie1wia2V5RGF0YVwiOlwiN0ZGNHFYV0hWRThTaFVmUURaQVBYQXhFYXBLVS9HSktHbGg5TGNhblRFVT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo0NjgzNzU3MzgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU1rVi5qc29uIjogIntcImtleURhdGFcIjpcIjRjVEc3eDgranJ3aEc5T3BXb1FxQmpxT1VQakFQNUZOVjhibHkvczdoWk09XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NDY4Mzc1NzM4LFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwyXX0sXCJ0aW1lc3RhbXBcIjpcIjE3NTM4MDcwNzk5OTdcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFNa1cuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJZZS9NdmxScTR1MkUrOVJWaWgxMGlybE5FcGpCRGk3K0ZSNXZuQW1PZGFJPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjQ2ODM3NTczOCxcImN1cnJlbnRJbmRleFwiOjUsXCJkZXZpY2VJbmRleGVzXCI6WzAsMl19LFwidGltZXN0YW1wXCI6XCIxNzUzODE2MDYyNzc4XCJ9Igp9"  // PUT your SESSION_ID 


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
