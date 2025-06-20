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


global.devs = "923236017632" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "923236017632";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923236017632";




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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_00_28_06_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTM0LFxuICAgICAgICA1LFxuICAgICAgICAxODQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxOTksXG4gICAgICAgIDAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTE2LFxuICAgICAgICA5OCxcbiAgICAgICAgNTcsXG4gICAgICAgIDIxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgODMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNzhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTMyLFxuICAgICAgICA5NyxcbiAgICAgICAgNDEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgOTUsXG4gICAgICAgIDk5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjAzLFxuICAgICAgICA5MyxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNTksXG4gICAgICAgIDExMSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDQ2LFxuICAgICAgICA3NSxcbiAgICAgICAgODgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNTIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTAzLFxuICAgICAgICA4NSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDgzLFxuICAgICAgICAxMyxcbiAgICAgICAgMjIxLFxuICAgICAgICA2M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNTQsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMixcbiAgICAgICAgMTkyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNTksXG4gICAgICAgIDIzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDg1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTExLFxuICAgICAgICAxMDQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDI3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTkzLFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjA2LFxuICAgICAgICA1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjEsXG4gICAgICAgIDY0LFxuICAgICAgICA2OSxcbiAgICAgICAgMTAyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTksXG4gICAgICAgIDEzOSxcbiAgICAgICAgNjUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgOTEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxODcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgODBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgMjM2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDk0LFxuICAgICAgICAxMzksXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNDksXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAzNyxcbiAgICAgICAgMjM5LFxuICAgICAgICA2NSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxODQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMjksXG4gICAgICAgIDE1NixcbiAgICAgICAgMzEsXG4gICAgICAgIDgwLFxuICAgICAgICAxNDksXG4gICAgICAgIDI1NCxcbiAgICAgICAgNTYsXG4gICAgICAgIDcsXG4gICAgICAgIDM0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDExMSxcbiAgICAgICAgODlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg5LFxuICAgICAgICAxMixcbiAgICAgICAgMTUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTgzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDQyLFxuICAgICAgICA1NixcbiAgICAgICAgMTI4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDU5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTUxLFxuICAgICAgICAxOSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDU1LFxuICAgICAgICAzOSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDcyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNTIsXG4gICAgICAgIDQ0LFxuICAgICAgICA1NSxcbiAgICAgICAgMjAyLFxuICAgICAgICAzMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA2N1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDExNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjUsXG4gICAgICAgIDg4LFxuICAgICAgICAxODYsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTM2LFxuICAgICAgICAzNCxcbiAgICAgICAgMSxcbiAgICAgICAgMTYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjAyLFxuICAgICAgICAyOCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDMxLFxuICAgICAgICAxODIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMDksXG4gICAgICAgIDMzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTI4LFxuICAgICAgICAzLFxuICAgICAgICA2NixcbiAgICAgICAgODAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjIyLFxuICAgICAgICAyMSxcbiAgICAgICAgNyxcbiAgICAgICAgMTAwLFxuICAgICAgICA3MixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDUxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMSxcbiAgICAgICAgMjQ0LFxuICAgICAgICA3OSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDQ3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDExMyxcbiAgICAgICAgNzMsXG4gICAgICAgIDExLFxuICAgICAgICAyMDIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiNTZ5VmZrOTZueGd3THlaTUtHNDZRU01zT3R1Y1RnbHdZUjZidUl3N1JIWT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMyMzYwMTc2MzJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjVBMDQ0NjVFQzQzQkUxRjE2RDZCQ0REOUIzNzUwQzc0XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTc1MDM3OTMxM1xuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzIzNjAxNzYzMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNTNGRDQwNzE5NDNBQkU4M0EwNTk1Mjc3RDAzQTQ4NDhcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzUwMzc5MzEzXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjNwRUhsX1FQUWUtLTkteDhfLUt1cFFcIixcbiAgXCJwaG9uZUlkXCI6IFwiOTU5MWM2M2ItMTg0YS00OWNkLWFiN2QtMTI0MTRkMGQxNWY3XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyNixcbiAgICAgIDE2NCxcbiAgICAgIDEzOSxcbiAgICAgIDI2LFxuICAgICAgNjksXG4gICAgICAxOTAsXG4gICAgICAxMDQsXG4gICAgICAxNjMsXG4gICAgICA4LFxuICAgICAgMTg5LFxuICAgICAgMjA3LFxuICAgICAgMjE2LFxuICAgICAgMjQ0LFxuICAgICAgODIsXG4gICAgICAxODYsXG4gICAgICA0MSxcbiAgICAgIDc3LFxuICAgICAgMjE3LFxuICAgICAgNDMsXG4gICAgICAzMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTYyLFxuICAgICAgMjAsXG4gICAgICAxMjcsXG4gICAgICAxNDksXG4gICAgICA0NyxcbiAgICAgIDE4OSxcbiAgICAgIDY1LFxuICAgICAgMjEwLFxuICAgICAgNzcsXG4gICAgICA1MSxcbiAgICAgIDE2NSxcbiAgICAgIDIwMyxcbiAgICAgIDIyNyxcbiAgICAgIDEzMixcbiAgICAgIDE3OCxcbiAgICAgIDE2MSxcbiAgICAgIDE5MSxcbiAgICAgIDE5LFxuICAgICAgOCxcbiAgICAgIDE0M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ05UdXBPNEhFS3JXMHNJR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiOEVIempPQWZ5dWRuWEgwc1R4d2ZLMmQvTGNuRzV6amJUVVVZcS9wZUoxQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJhSVBqbW9uRXM5ZnVPR0RxWGg5cXphVUlicTJrc3FoYXN1YTFQQ1RUWTZlL09QSlFxRm1yT2N6ZkUvSi9XNnNheVBWU3FXcGw5dmpKVzBUTEJaMWZEdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJxSmxpVXluOEVWaHZDOTVLZWFucUt2M015L3dObzY0eW1qeWw0cThEejNnZERScWdIL2hhU3hwaTl2WXRQM1Vzdk41Sm02dVFrc09yUEQ1MDNxNWZqUT09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzIzNjAxNzYzMjo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMjAyMzc5ODczNDAzMDU6NkBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzIzNjAxNzYzMjo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDgwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NTAzNzkzMTAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFGL0NcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUZfX0MuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJNUm03QmorMFZLK0g4L2diZE1zSUllQnhJNlMzRjJKLzVqcXBYejZ5elZRPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIxMTAzMzg5MDAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTc1MDM3OTMxNjUyNlwifSIKfQ=="  // PUT your SESSION_ID 


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
