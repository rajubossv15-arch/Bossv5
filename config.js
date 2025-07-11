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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_01_26_07_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE5LFxuICAgICAgICAyNSxcbiAgICAgICAgMjU1LFxuICAgICAgICA4LFxuICAgICAgICAyNDksXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTIxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE0NixcbiAgICAgICAgOTcsXG4gICAgICAgIDIyMixcbiAgICAgICAgMzAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNjksXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDI0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDI2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDc3LFxuICAgICAgICAxMjksXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDMzLFxuICAgICAgICA5OCxcbiAgICAgICAgNTksXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTk1LFxuICAgICAgICA5NixcbiAgICAgICAgMjIyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNyxcbiAgICAgICAgMTM1LFxuICAgICAgICA2OCxcbiAgICAgICAgODUsXG4gICAgICAgIDUyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTI5LFxuICAgICAgICA1OCxcbiAgICAgICAgMTcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDM0LFxuICAgICAgICA0MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICA5NSxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMDksXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjA5LFxuICAgICAgICA2MyxcbiAgICAgICAgMjEyLFxuICAgICAgICA2NyxcbiAgICAgICAgMjA5LFxuICAgICAgICAwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTQzLFxuICAgICAgICAzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDg2LFxuICAgICAgICAzNixcbiAgICAgICAgMTgsXG4gICAgICAgIDE0MixcbiAgICAgICAgNjgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDM1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDkzLFxuICAgICAgICAxOSxcbiAgICAgICAgNTgsXG4gICAgICAgIDc3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDYsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTMwLFxuICAgICAgICA5MixcbiAgICAgICAgOTAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTEsXG4gICAgICAgIDU4LFxuICAgICAgICA3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDI4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTM0LFxuICAgICAgICA5MixcbiAgICAgICAgMjUxLFxuICAgICAgICAzNCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNCxcbiAgICAgICAgNzMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgOTcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgNTEsXG4gICAgICAgIDIzMixcbiAgICAgICAgODYsXG4gICAgICAgIDcyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE5MixcbiAgICAgICAgODcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDUwLFxuICAgICAgICAyMixcbiAgICAgICAgMTc4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjU1LFxuICAgICAgICA1NyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDgxLFxuICAgICAgICA3OSxcbiAgICAgICAgMTU0LFxuICAgICAgICAwLFxuICAgICAgICA5NyxcbiAgICAgICAgMjA2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTksXG4gICAgICAgIDIzNixcbiAgICAgICAgNTUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMyxcbiAgICAgICAgNjIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNCxcbiAgICAgICAgMSxcbiAgICAgICAgNzEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNDMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNzMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIwLFxuICAgICAgICAyNSxcbiAgICAgICAgMyxcbiAgICAgICAgNDUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMDksXG4gICAgICAgIDMyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDk2LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDk3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxMDRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTI5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjQyLFxuICAgICAgICA0MixcbiAgICAgICAgMTUzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDg0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMCxcbiAgICAgICAgMTQsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjE5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTA4LFxuICAgICAgICA2NSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTg2LFxuICAgICAgICA2MCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDQyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgODYsXG4gICAgICAgIDk1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDQ1LFxuICAgICAgICA1OCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyNDksXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTQyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDEzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgOTEsXG4gICAgICAgIDYsXG4gICAgICAgIDU5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTczLFxuICAgICAgICAyMTMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNzgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiYVJJMEVnTkZZUEFXRXRVQU1GUlVpa2hneGJMZTdNZ2RJTGZ2Ym9lc3k1OD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMyOTUxMTIyNDNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkZEMzg4RDY2REMzRkQ3QjQyQkI4NjZCNzYyQURCRTNBXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTc1MjE5NzIxM1xuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCIxWVRTeUgtZVRmbVZMZHlvekZkc1RRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjQzMzQ0YTYyLWM2ZTUtNGUyZS05NWZmLTUyNmVjMWUxMDM5NFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNyxcbiAgICAgIDY4LFxuICAgICAgMjU1LFxuICAgICAgODksXG4gICAgICAxMzEsXG4gICAgICAyOCxcbiAgICAgIDM0LFxuICAgICAgMTIyLFxuICAgICAgMjMsXG4gICAgICAyMTQsXG4gICAgICAyMDIsXG4gICAgICAwLFxuICAgICAgMjE2LFxuICAgICAgNCxcbiAgICAgIDk0LFxuICAgICAgMjM2LFxuICAgICAgMTM1LFxuICAgICAgNzgsXG4gICAgICAxNixcbiAgICAgIDFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQ1LFxuICAgICAgMTgsXG4gICAgICA4NSxcbiAgICAgIDU5LFxuICAgICAgMTg0LFxuICAgICAgMjMxLFxuICAgICAgOTIsXG4gICAgICAxMjcsXG4gICAgICA4NCxcbiAgICAgIDM5LFxuICAgICAgMzgsXG4gICAgICAzNSxcbiAgICAgIDExNSxcbiAgICAgIDkxLFxuICAgICAgMjUwLFxuICAgICAgMzQsXG4gICAgICAxNTAsXG4gICAgICA5MixcbiAgICAgIDMzLFxuICAgICAgMTgwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT0tzN1pBSEVOUFF3Y01HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJKRzlwcHhSUEZpYlZiYTZDWWJWdERVQW9GbzUwRE1QbmFhUzZCWVMwTDE0PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIm41U0Vuam9mZ2x0Y0NMbWoySWUyYmNpemxHdE9ERS9Halp2eWJoQVNKNSs0QWJXbEJDYkNsZDVJMWZBZWI1SXZpZmR6SGM3azBjQ3NCYmkxNndvb0R3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImZzejBkb3BBaDB0UGFpZ0FXNzVJY2xqY1MxLzBlUHNlQVhNcXhaKy9tdnczajhSaEZIUkVsZWRhZEVOWGF1TGRlL09WZVNxWDRuMmFjbFZUb0JLYUN3PT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMjk1MTEyMjQzOjEwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxODU4MDU4MjE3ODkxNToxMEBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzI5NTExMjI0MzoxMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgOTRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc1MjE5NzIwNlxufSIKfQ=="  // PUT your SESSION_ID 


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
