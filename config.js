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


global.devs = "923071782626" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "923071782626";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923071782626";




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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_06_41_10_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDQwLFxuICAgICAgICAxNDksXG4gICAgICAgIDgzLFxuICAgICAgICA3MixcbiAgICAgICAgMjA3LFxuICAgICAgICA1MyxcbiAgICAgICAgNjIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgODIsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTYwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDMxLFxuICAgICAgICA4MSxcbiAgICAgICAgMTAsXG4gICAgICAgIDc4LFxuICAgICAgICAxODMsXG4gICAgICAgIDg5LFxuICAgICAgICAxNSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDQ2LFxuICAgICAgICA2OSxcbiAgICAgICAgMTYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDExOCxcbiAgICAgICAgNTcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgOTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICA2NCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMTksXG4gICAgICAgIDIzNixcbiAgICAgICAgMTI2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjIxLFxuICAgICAgICA2NyxcbiAgICAgICAgMTg2LFxuICAgICAgICAzMSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNixcbiAgICAgICAgMTc4LFxuICAgICAgICAyMyxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNDgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgOSxcbiAgICAgICAgMjQ4LFxuICAgICAgICA0MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxOCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNzgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTM3LFxuICAgICAgICAzMSxcbiAgICAgICAgMjgsXG4gICAgICAgIDIyMixcbiAgICAgICAgNjQsXG4gICAgICAgIDE4MixcbiAgICAgICAgOTAsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNjIsXG4gICAgICAgIDExMSxcbiAgICAgICAgNzksXG4gICAgICAgIDAsXG4gICAgICAgIDg1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDQwLFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNSxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEzLFxuICAgICAgICAxMTksXG4gICAgICAgIDE3OCxcbiAgICAgICAgNjcsXG4gICAgICAgIDUyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNTYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMSxcbiAgICAgICAgMTg2LFxuICAgICAgICA4NCxcbiAgICAgICAgMTU0LFxuICAgICAgICA4MCxcbiAgICAgICAgOTQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjYsXG4gICAgICAgIDE4MixcbiAgICAgICAgNThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgMCxcbiAgICAgICAgMTA5LFxuICAgICAgICA4NixcbiAgICAgICAgMTc3LFxuICAgICAgICA5LFxuICAgICAgICA0MixcbiAgICAgICAgMTY0LFxuICAgICAgICAzNyxcbiAgICAgICAgODUsXG4gICAgICAgIDE3LFxuICAgICAgICAyNSxcbiAgICAgICAgMTA3LFxuICAgICAgICA5NSxcbiAgICAgICAgMjQ0LFxuICAgICAgICA0NixcbiAgICAgICAgODQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTE1LFxuICAgICAgICA2NSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTAsXG4gICAgICAgIDE2LFxuICAgICAgICA2MCxcbiAgICAgICAgNDUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgOTYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjM0LFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODEsXG4gICAgICAgIDE5MixcbiAgICAgICAgMzQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTg1LFxuICAgICAgICAzOCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDMzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDgzLFxuICAgICAgICAzNSxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDU2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDk1LFxuICAgICAgICA4MCxcbiAgICAgICAgNzYsXG4gICAgICAgIDE0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDkyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTcsXG4gICAgICAgIDUsXG4gICAgICAgIDg0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDg1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDU4LFxuICAgICAgICA5MSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMixcbiAgICAgICAgNTQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNzksXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyNCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDYxLFxuICAgICAgICA3NCxcbiAgICAgICAgMjExLFxuICAgICAgICA2NixcbiAgICAgICAgMTAxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDI4LFxuICAgICAgICAxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTEwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjM2LFxuICAgICAgICA3NCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgODcsXG4gICAgICAgIDM1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNzUsXG4gICAgICAgIDc2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNDksXG4gICAgICAgIDc4LFxuICAgICAgICA1OCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDg4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgOTAsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDMwLFxuICAgICAgICAxNDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE4MixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJhNHYyUTAwSFU5WlFaMENjcExGOFhpWnRmcll0dG54ZzBQTzNUVnNncTRNPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJxSFEyS3h5ZVI2bTZ1VjQ0OEd2WEN3XCIsXG4gIFwicGhvbmVJZFwiOiBcImUzNDdkYTZlLWU0ODItNGFhZS1hODBkLTE1ZWRlZmRjMDU3MFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2NCxcbiAgICAgIDIzMixcbiAgICAgIDYzLFxuICAgICAgMTQ0LFxuICAgICAgMTY2LFxuICAgICAgMzgsXG4gICAgICAyNDgsXG4gICAgICAxOTIsXG4gICAgICA1NCxcbiAgICAgIDE3NixcbiAgICAgIDE2OSxcbiAgICAgIDE2LFxuICAgICAgMjEzLFxuICAgICAgNDUsXG4gICAgICAyMixcbiAgICAgIDEwNCxcbiAgICAgIDIwLFxuICAgICAgMjE1LFxuICAgICAgMjQ2LFxuICAgICAgMTk1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzMsXG4gICAgICAyOCxcbiAgICAgIDE0MSxcbiAgICAgIDQzLFxuICAgICAgMTMzLFxuICAgICAgMTU4LFxuICAgICAgMTI1LFxuICAgICAgMTc0LFxuICAgICAgNDgsXG4gICAgICAxMDAsXG4gICAgICAyMTYsXG4gICAgICAyMjUsXG4gICAgICAxNzUsXG4gICAgICA3MSxcbiAgICAgIDI0MyxcbiAgICAgIDMzLFxuICAgICAgMyxcbiAgICAgIDE0OSxcbiAgICAgIDIwNyxcbiAgICAgIDE4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS2VBMks0Q0VQR1FqTWdHR0FNZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI4YUc2MGNhTzhCYVdPUG9hS1lmMDUrRUV4cEdBcTZibXpLaGEvNEFUd3djPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInlzajFRS3k4ck1iU0hIc1lNb05kZG5LYXJrWGtacll3aFQyWW1BdmtxeUJXbkljUzlCQjJTUlV2U1I5TXBtNk5XVVhzay9yQm1zUEE5blA1T1YyckJRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInJOck1yQkhRRDV2Q0l6UHhLYzUzMk1YeWlDL04yM05EWVU3K056d3ZpeEcydXBMK200T2s4dFNUOEk1SVdXbWFsUTVlakFwSyt0cEQ5dTE2UFhwdWdBPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMDcxNzgyNjI2OjU1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi8J2TofCdk6rwnZOz8J2TviA1OTExXCIsXG4gICAgXCJsaWRcIjogXCIyNjIyNjQxOTIwMjA3MjQ6NTVAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMwNzE3ODI2MjY6NTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc2MTgwNjQ1MyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUVnL1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRWcrLmpzb24iOiAie1wia2V5RGF0YVwiOlwiUEE5Ui9ieGtvbU9Hc05zMDVWZUs3Vk04R0RBdUpyS3lnZmlReUZHMlJqND1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo2MzQ3ODE3MzUsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUVnX18uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJUVjZaN1drVHA0RzB6VGhaZ3YvMHBLT1JWQTVGSEJlQk1qazEwOFBxYkwwPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjYzNDc4MTczNSxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMl19LFwidGltZXN0YW1wXCI6XCIxNzYxODA2MzI3OTQ3XCJ9Igp9"  // PUT your SESSION_ID 


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
