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


global.devs = "923295112243" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "923295112243";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923295112243";




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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_01_43_05_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjU0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDIwNixcbiAgICAgICAgNDMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNDcsXG4gICAgICAgIDYzLFxuICAgICAgICA4NCxcbiAgICAgICAgMTYwLFxuICAgICAgICA0OCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTIxLFxuICAgICAgICA1OCxcbiAgICAgICAgNDcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyOSxcbiAgICAgICAgMTA5LFxuICAgICAgICA4NixcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjEwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjMsXG4gICAgICAgIDExLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTg1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMDksXG4gICAgICAgIDIwMixcbiAgICAgICAgMjE0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDc0LFxuICAgICAgICAxMzksXG4gICAgICAgIDczLFxuICAgICAgICA5NSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEwNixcbiAgICAgICAgODYsXG4gICAgICAgIDM0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDM5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDM2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTE2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNjcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDgyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDIzLFxuICAgICAgICAxNDksXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTk4LFxuICAgICAgICA2NSxcbiAgICAgICAgODcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNjUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTA5LFxuICAgICAgICAyMDksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDEwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjExLFxuICAgICAgICAxMzMsXG4gICAgICAgIDgyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMzJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgMzEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNTAsXG4gICAgICAgIDk1LFxuICAgICAgICAyMyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxLFxuICAgICAgICA2MixcbiAgICAgICAgMTg5LFxuICAgICAgICA5NCxcbiAgICAgICAgMjE1LFxuICAgICAgICA5NSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTU1LFxuICAgICAgICA5MSxcbiAgICAgICAgMjMxLFxuICAgICAgICA2NixcbiAgICAgICAgNDAsXG4gICAgICAgIDE3NixcbiAgICAgICAgODgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgOTAsXG4gICAgICAgIDEzLFxuICAgICAgICA2OSxcbiAgICAgICAgMTgwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDgwLFxuICAgICAgICAxMDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjYsXG4gICAgICAgIDUsXG4gICAgICAgIDc5LFxuICAgICAgICAxMzksXG4gICAgICAgIDEyOCxcbiAgICAgICAgNSxcbiAgICAgICAgNjEsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEyMixcbiAgICAgICAgNzMsXG4gICAgICAgIDI5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjQwLFxuICAgICAgICAyNSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxODksXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTQxLFxuICAgICAgICA4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDkyLFxuICAgICAgICAzOCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDg4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDI4LFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxMTNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA2NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTcwLFxuICAgICAgICA2LFxuICAgICAgICA0OSxcbiAgICAgICAgMjEsXG4gICAgICAgIDkzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNixcbiAgICAgICAgMTE5LFxuICAgICAgICA0OCxcbiAgICAgICAgNTksXG4gICAgICAgIDEzMixcbiAgICAgICAgMjE2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDY5LFxuICAgICAgICAxODMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjUsXG4gICAgICAgIDAsXG4gICAgICAgIDY1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjUzLFxuICAgICAgICA4MSxcbiAgICAgICAgMTg4LFxuICAgICAgICA2OSxcbiAgICAgICAgMjcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNDksXG4gICAgICAgIDEyMSxcbiAgICAgICAgNDMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjM5LFxuICAgICAgICA2NixcbiAgICAgICAgMTQwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNjIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTI3LFxuICAgICAgICA1NyxcbiAgICAgICAgMTE5LFxuICAgICAgICA4NCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDk4LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjdpVWJjVUY3akdvVW9WZHd3MjB3NkRoakFaT0h5Qjh1QjNqeHdXVHN0TUU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMjk1MTEyMjQzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJCRTM3RkZCMDZEQTNGOTYzMUU2MThDNTQ1NzRGOEQ0NFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3NDYzMjMwMzRcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMyOTUxMTIyNDNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkIzNzk3MTZBQUZGMzMwODVBRkJGRDdGRkI4RkY0MjlCXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTc0NjMyMzAzNVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ5eFZiTi04QVRNS0xBY3l6UXBRdWVRXCIsXG4gIFwicGhvbmVJZFwiOiBcImYyOGZhYTk1LThmMTEtNDIzYS04ZDMxLTMwNjYwMjQyODJhYVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2MCxcbiAgICAgIDE3OCxcbiAgICAgIDk2LFxuICAgICAgNixcbiAgICAgIDIyOSxcbiAgICAgIDIxMixcbiAgICAgIDc1LFxuICAgICAgMjM2LFxuICAgICAgNTQsXG4gICAgICAxODQsXG4gICAgICAxNjYsXG4gICAgICA3MixcbiAgICAgIDE0MSxcbiAgICAgIDI1NCxcbiAgICAgIDEzNSxcbiAgICAgIDI0MSxcbiAgICAgIDE3NCxcbiAgICAgIDY5LFxuICAgICAgNjIsXG4gICAgICAxNjJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzQsXG4gICAgICAxMTcsXG4gICAgICAxNjAsXG4gICAgICAxMjEsXG4gICAgICA4OSxcbiAgICAgIDIzNixcbiAgICAgIDUyLFxuICAgICAgMTk3LFxuICAgICAgMTYwLFxuICAgICAgOTMsXG4gICAgICA4NCxcbiAgICAgIDIwNyxcbiAgICAgIDQyLFxuICAgICAgMTkwLFxuICAgICAgMjQyLFxuICAgICAgNzEsXG4gICAgICA2NSxcbiAgICAgIDY0LFxuICAgICAgMTcxLFxuICAgICAgMjM2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkVETDlYWTlSXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMyOTUxMTIyNDM6NDFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLwnZOh8J2TqvCdk7PwnZO+IDU5MTFcIixcbiAgICBcImxpZFwiOiBcIjE4NTgwNTgyMTc4OTE1OjQxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ05ta3dvNEhFTktNMjhBR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwicVY3bjhGUGFIVkRIUFZkUmVieUJuWkQzMVlyZlc1SVBXNldYRmRRYlpnRT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJhTERQWjZIcnNXdndYOWZRV1FCK3M0ZEN3UW5YdkI3V3ZOMVdmdzdUUDhNeFowOGtPd2dTeHhaNWE2c3N1V1MvcmpwbDFmUHQwUTVTeUhMNE5qeEZBQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJrR3lZMXVBNnpxZC8vRGExak9vZk1vamJ6UFlWMmJlaThFL0k4cjJWS2c2ZndHRDE5UWtIOFRFcncrUW80ZXV2V1NxZ09ZZjY5dmI4bDcvOVorZWdnQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMyOTUxMTIyNDM6NDFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzQ2MzIzMDI5LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSUhaXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJSFouanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ5RitBRk9TODNaNHdWbGJlWVFHQUxMeEZ1NmovRzc4LzlHR2tvcVUzNTJjPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE5MDk0OTQzNjEsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTc0NjMyMzAzNTU0NVwifSIKfQ=="  // PUT your SESSION_ID 


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
