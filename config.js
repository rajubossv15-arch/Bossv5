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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_14_16_10_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxODksXG4gICAgICAgIDY0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDgwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDUyLFxuICAgICAgICAxMjksXG4gICAgICAgIDQ1LFxuICAgICAgICA4MixcbiAgICAgICAgMTIyLFxuICAgICAgICA0MSxcbiAgICAgICAgNzYsXG4gICAgICAgIDk1LFxuICAgICAgICAyNyxcbiAgICAgICAgMTcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgODcsXG4gICAgICAgIDE1NixcbiAgICAgICAgNzgsXG4gICAgICAgIDg0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIxLFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNzUsXG4gICAgICAgIDcyLFxuICAgICAgICA5NSxcbiAgICAgICAgMjYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDk4LFxuICAgICAgICAxMSxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDc2LFxuICAgICAgICA3OSxcbiAgICAgICAgODgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTMxLFxuICAgICAgICA4MixcbiAgICAgICAgNjYsXG4gICAgICAgIDk0LFxuICAgICAgICAyMyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDU2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgODAsXG4gICAgICAgIDg1LFxuICAgICAgICAyMyxcbiAgICAgICAgODksXG4gICAgICAgIDEyNCxcbiAgICAgICAgNjQsXG4gICAgICAgIDIzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTI5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDM3LFxuICAgICAgICA3OCxcbiAgICAgICAgMTk2LFxuICAgICAgICA4LFxuICAgICAgICA2MCxcbiAgICAgICAgMjEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNjcsXG4gICAgICAgIDYwLFxuICAgICAgICA3MCxcbiAgICAgICAgMjE0LFxuICAgICAgICA5MixcbiAgICAgICAgMTQwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNTEsXG4gICAgICAgIDI5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDk3LFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY2LFxuICAgICAgICAxNyxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNDIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjA0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDI4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNSxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDUwLFxuICAgICAgICAxODEsXG4gICAgICAgIDIwLFxuICAgICAgICAxNDksXG4gICAgICAgIDE3MixcbiAgICAgICAgMzcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTI1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICA4MCxcbiAgICAgICAgNzAsXG4gICAgICAgIDY4LFxuICAgICAgICAzNCxcbiAgICAgICAgNDIsXG4gICAgICAgIDU5LFxuICAgICAgICA0OSxcbiAgICAgICAgMjUsXG4gICAgICAgIDU1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTczLFxuICAgICAgICAxNzYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjEwLFxuICAgICAgICA2MCxcbiAgICAgICAgMTk0LFxuICAgICAgICA2MyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDcwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDIxLFxuICAgICAgICA1MixcbiAgICAgICAgMjQzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDY5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0NixcbiAgICAgICAgMTU4LFxuICAgICAgICA0MSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMCxcbiAgICAgICAgMTA4LFxuICAgICAgICA5NCxcbiAgICAgICAgMTEyLFxuICAgICAgICA4MCxcbiAgICAgICAgMTI3LFxuICAgICAgICAzNyxcbiAgICAgICAgMTI3LFxuICAgICAgICA1LFxuICAgICAgICA4LFxuICAgICAgICA0NixcbiAgICAgICAgMjQwLFxuICAgICAgICA4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTM4LFxuICAgICAgICAzOSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDEyMFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDExMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTUwLFxuICAgICAgICA0NyxcbiAgICAgICAgMTA2LFxuICAgICAgICA0MCxcbiAgICAgICAgMjEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTYsXG4gICAgICAgIDIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjMsXG4gICAgICAgIDg1LFxuICAgICAgICAyNSxcbiAgICAgICAgMSxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDY3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDMwLFxuICAgICAgICA3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDI0NixcbiAgICAgICAgODEsXG4gICAgICAgIDEyLFxuICAgICAgICAzNSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDQ0LFxuICAgICAgICAxODQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNzMsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjI2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjEsXG4gICAgICAgIDg5LFxuICAgICAgICAxMTksXG4gICAgICAgIDIwNixcbiAgICAgICAgMCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDExLFxuICAgICAgICAyMTUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNTksXG4gICAgICAgIDIyNixcbiAgICAgICAgMjE1LFxuICAgICAgICA0LFxuICAgICAgICA5NSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMixcbiAgICAgICAgNTIsXG4gICAgICAgIDEyMixcbiAgICAgICAgNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjI0LFxuICBcImFkdlNlY3JldEtleVwiOiBcInpJaHdlb2I3Nnd4RVcvWXVGdGwzdU1sR2x5NGR2TDlCOTEyYTUwT3Fucjg9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIk9ZZGlRNlFqUzNHbWhrVGczRlU2YXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNjMzMzljY2QtMzM3Yi00NjQ3LTgwZjItZTRiNzZmMWU0ZGM5XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0OCxcbiAgICAgIDE0OCxcbiAgICAgIDEwNyxcbiAgICAgIDEwMixcbiAgICAgIDM4LFxuICAgICAgMTA5LFxuICAgICAgMTA4LFxuICAgICAgODksXG4gICAgICAyMTIsXG4gICAgICAxNzMsXG4gICAgICA0MixcbiAgICAgIDE5OSxcbiAgICAgIDE1NyxcbiAgICAgIDIwNCxcbiAgICAgIDIzOCxcbiAgICAgIDM0LFxuICAgICAgODYsXG4gICAgICAxMCxcbiAgICAgIDQsXG4gICAgICAxMzRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4NyxcbiAgICAgIDE1OSxcbiAgICAgIDIzNyxcbiAgICAgIDExMixcbiAgICAgIDg0LFxuICAgICAgNjYsXG4gICAgICA5NixcbiAgICAgIDE3NixcbiAgICAgIDI3LFxuICAgICAgMTA2LFxuICAgICAgMTQyLFxuICAgICAgMjI4LFxuICAgICAgNDksXG4gICAgICAyNixcbiAgICAgIDY4LFxuICAgICAgMjIyLFxuICAgICAgOCxcbiAgICAgIDEwNCxcbiAgICAgIDEyMyxcbiAgICAgIDIyNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09Demxwb0NFTHFyM3NjR0dBUWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiaVdwWHM5WHMyZXdrVXZuTVltbWxyMlJ2WWZXSlhWKzFoS0tUNGNEZE1DYz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJmM3o5cFMydHJuRnpNeFRhS0hLbEZ3SXF6RVhkcGNpZFN1ZE9sNDBMaDJVU0tDbWJWcnY2dnBBWlJHUDhmS3FRV0pRTzg4aklNRnVTNmN6THBpRGVCZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIrdTBDYVBEbkpaa0lRNTBGYnR1SXBnTjV0SzlKVlgxMUU1TnhQVVlWTHRrQys5RUlyN2J3anVqUnRGd3BiUytMck4wRkxGejAzZzVwdlExV3h5allBdz09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzMxNDkyNjc0Njo0NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjY1MDQ3MzY0Mzc4Njg2OjQ1QGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMzE0OTI2NzQ2OjQ1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAzOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzYxMDU2MTg4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBR1pPXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFHWk8uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ5UzdnUlV5eUZJelovRnU0NkN1TG9NMzBIOFVLL0tIN254TzBMMS9mbTdRPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjU5MTc2MzkzNixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzU5OTg0NTYzMTY4XCJ9Igp9"  // PUT your SESSION_ID 


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
