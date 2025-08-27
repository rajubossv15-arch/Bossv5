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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_17_43_08_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICA1MixcbiAgICAgICAgNDQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgODEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDMyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTY5LFxuICAgICAgICA5OSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgOTksXG4gICAgICAgIDExMSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxOTksXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNTAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjUsXG4gICAgICAgIDEyNixcbiAgICAgICAgNzQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDY1LFxuICAgICAgICAwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTIyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDUzLFxuICAgICAgICAxMzksXG4gICAgICAgIDcxLFxuICAgICAgICAzMyxcbiAgICAgICAgNDEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDExMixcbiAgICAgICAgMjQzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDgzLFxuICAgICAgICAyMDksXG4gICAgICAgIDg1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTksXG4gICAgICAgIDE2MixcbiAgICAgICAgMTI1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNTEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMzgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNzAsXG4gICAgICAgIDI4LFxuICAgICAgICA5NixcbiAgICAgICAgMTc5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjksXG4gICAgICAgIDYsXG4gICAgICAgIDcsXG4gICAgICAgIDgzLFxuICAgICAgICA3MixcbiAgICAgICAgMjEyLFxuICAgICAgICA1MixcbiAgICAgICAgMjA5LFxuICAgICAgICAxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDc3LFxuICAgICAgICAzNSxcbiAgICAgICAgNzYsXG4gICAgICAgIDgyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDU2LFxuICAgICAgICAxNTksXG4gICAgICAgIDczLFxuICAgICAgICAxMzcsXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTUyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTE2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTY4LFxuICAgICAgICA1MCxcbiAgICAgICAgMjQxLFxuICAgICAgICA4MyxcbiAgICAgICAgNzksXG4gICAgICAgIDQxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDI5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDY2LFxuICAgICAgICA4OCxcbiAgICAgICAgNDksXG4gICAgICAgIDExMSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxODMsXG4gICAgICAgIDIyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDg1LFxuICAgICAgICAxNDksXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDM4LFxuICAgICAgICA4OSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDYyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDI3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDczLFxuICAgICAgICA4NyxcbiAgICAgICAgNixcbiAgICAgICAgMTAxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDc0LFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMTksXG4gICAgICAgIDYzLFxuICAgICAgICAzNSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE2NixcbiAgICAgICAgNDUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjQsXG4gICAgICAgIDcxLFxuICAgICAgICA5MSxcbiAgICAgICAgMTIsXG4gICAgICAgIDkzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDcxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTY4LFxuICAgICAgICA2OCxcbiAgICAgICAgMzMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxODksXG4gICAgICAgIDExNCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMDlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDk4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDg2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDI3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxOTksXG4gICAgICAgIDI1LFxuICAgICAgICAyOCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNjksXG4gICAgICAgIDEyNixcbiAgICAgICAgMjAzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDI1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMjksXG4gICAgICAgIDExLFxuICAgICAgICAzNCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxODUsXG4gICAgICAgIDI3LFxuICAgICAgICAyNDksXG4gICAgICAgIDIyOSxcbiAgICAgICAgNDksXG4gICAgICAgIDEyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjE2LFxuICAgICAgICA0LFxuICAgICAgICA0NyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDMwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDY4LFxuICAgICAgICAyNCxcbiAgICAgICAgNzgsXG4gICAgICAgIDgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMzAsXG4gICAgICAgIDc2LFxuICAgICAgICA5NixcbiAgICAgICAgMTUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNzgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE4NixcbiAgICAgICAgNzUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgODksXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIxOCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJLUGVVbzRGLzd0dVhlMDBudlkyeWtVb2tlSXRpRWxFTjhuTjk3NjVKclBjPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzI0MDgwNjIxMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiOUREMkQ0Q0VDM0U2MUMzODY3QkEyMDY0ODAwNzU3RTlcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzU2MzE2NjMzXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMjQwODA2MjEwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJEQTMxQzkwQTdCMkZEMkI2NkZGQTBBMEYwMEI5MkU3QVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3NTYzMTY2MzNcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiYmNsM3I4QjFTWnV5SDNLWlNSN3ozQVwiLFxuICBcInBob25lSWRcIjogXCJjMGY1MjczMy0yNDljLTQ1ZGUtODRhOC0zNTA2ZDRjOGQyZDhcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTYzLFxuICAgICAgMyxcbiAgICAgIDE1NyxcbiAgICAgIDIyOSxcbiAgICAgIDIyMCxcbiAgICAgIDEyMyxcbiAgICAgIDIzMCxcbiAgICAgIDIxNCxcbiAgICAgIDIyOSxcbiAgICAgIDEwNixcbiAgICAgIDE4NCxcbiAgICAgIDE4NSxcbiAgICAgIDIsXG4gICAgICAyNTIsXG4gICAgICAxMzEsXG4gICAgICAxOTcsXG4gICAgICAxNjcsXG4gICAgICAxMjMsXG4gICAgICA4NyxcbiAgICAgIDIxN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQwLFxuICAgICAgMTEyLFxuICAgICAgMTMzLFxuICAgICAgMTU0LFxuICAgICAgMTQsXG4gICAgICAxMzEsXG4gICAgICAyMTUsXG4gICAgICAxMTUsXG4gICAgICA4OSxcbiAgICAgIDk3LFxuICAgICAgMTk0LFxuICAgICAgNzMsXG4gICAgICAxMzcsXG4gICAgICA5OCxcbiAgICAgIDkyLFxuICAgICAgMTkxLFxuICAgICAgMTIwLFxuICAgICAgODIsXG4gICAgICA5MSxcbiAgICAgIDEwM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ04vUzVvUURFTkdIdmNVR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiZjgwbnNzZXd3Mno4Q0x2eUxLR1hFVmRTbFd3OUtvUndYQ3lQNVlqNHkwMD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJIdXlES2VqVWpaN1lDZlJVV2J6Sm1zSWp5d3FZZG93a3pLR29pcllZQWEzOWl4eDZtWW02TFJnbFRzeFVlZU5OT3J4WFVuaEZPZmRiVytGQ1hISk9EQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJNS3NIOExHZGI4RHBYMGZhcDBCT2toUWRNZHpXWUJiOXowMzFDOGIrblpaNGxJSU5yUDc4bk9XVU5CWjlrdUEvT0tERzhiTzFuRE9Va0FCMkNRazJEdz09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzI0MDgwNjIxMDo0OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTk3MjQyNTE0MzM3OTkxOjQ4QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIlNpbGVudCBLaWxsZXJcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzI0MDgwNjIxMDo0OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgNzdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc1NjMxNjYzMCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUlyWlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSXJaLmpzb24iOiAie1wia2V5RGF0YVwiOlwibDIwRUJMTURWQWZiLzRjRUZGUFNsSU0yRjBzVFE3eC9sR0k0aldCUWs2VT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo4MTUzNzY3MzUsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTc1NjMxNjA3NjY2N1wifSIKfQ=="  // PUT your SESSION_ID 


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
