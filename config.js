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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_17_05_08_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDc3LFxuICAgICAgICA0OSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTMxLFxuICAgICAgICAxODIsXG4gICAgICAgIDE3LFxuICAgICAgICAxNixcbiAgICAgICAgNzQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTkyLFxuICAgICAgICAzMixcbiAgICAgICAgNDAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMzcsXG4gICAgICAgIDQwLFxuICAgICAgICAxNTksXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNjksXG4gICAgICAgIDkzLFxuICAgICAgICA5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDY5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDYyLFxuICAgICAgICAxMTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTczLFxuICAgICAgICA0MCxcbiAgICAgICAgMjUsXG4gICAgICAgIDAsXG4gICAgICAgIDI0MixcbiAgICAgICAgODQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTksXG4gICAgICAgIDEzNyxcbiAgICAgICAgOTYsXG4gICAgICAgIDc2LFxuICAgICAgICA1MyxcbiAgICAgICAgMjksXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjA5LFxuICAgICAgICA4NSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE4MixcbiAgICAgICAgNDAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTU0LFxuICAgICAgICA4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDM1LFxuICAgICAgICA1NyxcbiAgICAgICAgNTcsXG4gICAgICAgIDgyLFxuICAgICAgICA1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgNDYsXG4gICAgICAgIDkwLFxuICAgICAgICAyMTksXG4gICAgICAgIDE2NixcbiAgICAgICAgMTI5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTAwLFxuICAgICAgICA3OSxcbiAgICAgICAgNzgsXG4gICAgICAgIDM4LFxuICAgICAgICAyMTksXG4gICAgICAgIDE0MCxcbiAgICAgICAgNjUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxODMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDkzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDExMSxcbiAgICAgICAgNzgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgODEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjksXG4gICAgICAgIDY5LFxuICAgICAgICA2MSxcbiAgICAgICAgNzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI3LFxuICAgICAgICAxMyxcbiAgICAgICAgMTk2LFxuICAgICAgICA0OCxcbiAgICAgICAgMTc5LFxuICAgICAgICA2MixcbiAgICAgICAgMjM0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE0NixcbiAgICAgICAgNzcsXG4gICAgICAgIDMzLFxuICAgICAgICAxMSxcbiAgICAgICAgMTg3LFxuICAgICAgICA3MCxcbiAgICAgICAgNTQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjMyLFxuICAgICAgICA2NixcbiAgICAgICAgMzksXG4gICAgICAgIDk0LFxuICAgICAgICA5OSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDM0LFxuICAgICAgICAyMSxcbiAgICAgICAgMTE3LFxuICAgICAgICA1NyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDU0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDIzLFxuICAgICAgICAyMyxcbiAgICAgICAgMTAwLFxuICAgICAgICA2OSxcbiAgICAgICAgNzMsXG4gICAgICAgIDU0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNDEsXG4gICAgICAgIDk1LFxuICAgICAgICAxMCxcbiAgICAgICAgMjE1LFxuICAgICAgICA2MyxcbiAgICAgICAgMCxcbiAgICAgICAgMTcyLFxuICAgICAgICA4NSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDkzLFxuICAgICAgICA3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjAwLFxuICAgICAgICA4NyxcbiAgICAgICAgMzQsXG4gICAgICAgIDExOSxcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjEyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgODMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNTIsXG4gICAgICAgIDQxLFxuICAgICAgICA4NyxcbiAgICAgICAgNTAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMixcbiAgICAgICAgMjEwLFxuICAgICAgICAxOCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNjksXG4gICAgICAgIDIwMSxcbiAgICAgICAgNDMsXG4gICAgICAgIDU3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTM1LFxuICAgICAgICA2NCxcbiAgICAgICAgNjEsXG4gICAgICAgIDkzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgOTlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxMTZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2MSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDkzLFxuICAgICAgICAxNCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNDksXG4gICAgICAgIDMwLFxuICAgICAgICAxODcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyOSxcbiAgICAgICAgMTQ3LFxuICAgICAgICA3LFxuICAgICAgICA1MSxcbiAgICAgICAgMzQsXG4gICAgICAgIDEzMixcbiAgICAgICAgNjgsXG4gICAgICAgIDEzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDEyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTExLFxuICAgICAgICA0NyxcbiAgICAgICAgNTIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjEzLFxuICAgICAgICA5NCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNTksXG4gICAgICAgIDE0MSxcbiAgICAgICAgNzksXG4gICAgICAgIDIxOSxcbiAgICAgICAgOTMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgOTAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDc5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTUsXG4gICAgICAgIDU4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDQxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA1NyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJuci9ra2FPTWpEVkxycUNkdmdvMC9oZitjMCtkUkxkUnN1MU93OVRLelg4PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJYTU8wX2tLUVREbXBpTHJGRGhMTjFnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjMxNzhkNzkwLTg2YWItNDRkMy04YTk5LTU4NzNkNmNlYmM1MFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTcsXG4gICAgICAxMDYsXG4gICAgICAyMjcsXG4gICAgICAyMjAsXG4gICAgICA1NyxcbiAgICAgIDE5NyxcbiAgICAgIDE2OCxcbiAgICAgIDgwLFxuICAgICAgMjQ5LFxuICAgICAgMTgwLFxuICAgICAgMzUsXG4gICAgICA2OSxcbiAgICAgIDExMSxcbiAgICAgIDgsXG4gICAgICAxNTMsXG4gICAgICA4NCxcbiAgICAgIDE4NyxcbiAgICAgIDI0NSxcbiAgICAgIDI1MixcbiAgICAgIDE2OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTYsXG4gICAgICAxMzAsXG4gICAgICAxOTYsXG4gICAgICAxMzAsXG4gICAgICAxOTQsXG4gICAgICAxNDEsXG4gICAgICAxNDcsXG4gICAgICAyMzYsXG4gICAgICAxODUsXG4gICAgICA3NyxcbiAgICAgIDI0LFxuICAgICAgMTkyLFxuICAgICAgMjE5LFxuICAgICAgMTUyLFxuICAgICAgMjM0LFxuICAgICAgNzksXG4gICAgICAzNCxcbiAgICAgIDE3MixcbiAgICAgIDU0LFxuICAgICAgMTk0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTDZPNC9RQkVPaWpuY1VHR0FNZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJLaXRtZmZpOUlNQlI3TWpIMVAvR0FoZHlkR05NZFNhaDBOeG45cU84MTBvPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInMyellrcUQyaFZzRlVmaU5UR2tRVkNxbTYxdzV4WkZZRE5OSWpTT3BpMDNlek54QS9tcThJbjBSTWxtbzFTUkl1ZWQ1WGF5ZGIweHQ0aVhUVVFLT0JnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImhXSzJMQms3Uyt4bW9ZdHpGckp1Z0RKODNOK0RjZmFRU1ZTa2xMRGdXOW1BQXZqcGwwQ0w4a2hrcVBuZE5PcWJvMXdRdUJEWXl4V2dpblhrM1lIRkJRPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMjQwODA2MjEwOjQ1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiU2lsZW50IEtpbGxlclwiLFxuICAgIFwibGlkXCI6IFwiMTk3MjQyNTE0MzM3OTkxOjQ1QGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMjQwODA2MjEwOjQ1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgNzRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc1NTc5NTk0OCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUhxalwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSHFqLmpzb24iOiAie1wia2V5RGF0YVwiOlwiS2hMQmZORUJUTDRkdjdweFloRzU1bkJ0UHRkNEVXSmRiUW1abVlxUEwvMD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo1MTMzMjg5NTgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTc1NTM2MTA0NTgzOFwifSIKfQ=="  // PUT your SESSION_ID 


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
