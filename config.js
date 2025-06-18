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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_01_34_06_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAzNSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDQxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNDEsXG4gICAgICAgIDgzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDExOCxcbiAgICAgICAgNTksXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDgsXG4gICAgICAgIDEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE5MixcbiAgICAgICAgNjgsXG4gICAgICAgIDExOCxcbiAgICAgICAgODMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjMxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTU0LFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1OCxcbiAgICAgICAgMCxcbiAgICAgICAgNzAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjQxLFxuICAgICAgICA5MCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNjAsXG4gICAgICAgIDI2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjEsXG4gICAgICAgIDYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNjUsXG4gICAgICAgIDcxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMyxcbiAgICAgICAgMTQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjMwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDY3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjMsXG4gICAgICAgIDE4LFxuICAgICAgICAzOSxcbiAgICAgICAgMjYsXG4gICAgICAgIDc5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDQyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTc5LFxuICAgICAgICA4NSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDczLFxuICAgICAgICA5MixcbiAgICAgICAgMTMwLFxuICAgICAgICAyMzksXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTA1LFxuICAgICAgICA4OCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2NixcbiAgICAgICAgMTcxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDExMixcbiAgICAgICAgMTcsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTUxLFxuICAgICAgICAzNSxcbiAgICAgICAgOTUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTU4LFxuICAgICAgICA0NixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxODUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDUwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNTAsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDY0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDUyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTk2LFxuICAgICAgICA0OCxcbiAgICAgICAgMTMyLFxuICAgICAgICAyNyxcbiAgICAgICAgMTU4LFxuICAgICAgICA4MCxcbiAgICAgICAgMjM1LFxuICAgICAgICA0MCxcbiAgICAgICAgODQsXG4gICAgICAgIDU1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjA0LFxuICAgICAgICA4MSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDExLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDcxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNDUsXG4gICAgICAgIDk1LFxuICAgICAgICA2OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA2MixcbiAgICAgICAgMTU4LFxuICAgICAgICA0LFxuICAgICAgICAxMyxcbiAgICAgICAgMTIxLFxuICAgICAgICAxODgsXG4gICAgICAgIDgwLFxuICAgICAgICAxODgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNjcsXG4gICAgICAgIDYyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTY5LFxuICAgICAgICA2OSxcbiAgICAgICAgMTIwLFxuICAgICAgICAzMCxcbiAgICAgICAgMTQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDEyMixcbiAgICAgICAgNTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxMTBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDc2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMTksXG4gICAgICAgIDM1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTE2LFxuICAgICAgICA3NyxcbiAgICAgICAgODUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDEyLFxuICAgICAgICAzNixcbiAgICAgICAgMTUwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjE4LFxuICAgICAgICA3NSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMzEsXG4gICAgICAgIDI5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDY1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgOTksXG4gICAgICAgIDE4NixcbiAgICAgICAgMixcbiAgICAgICAgMTQsXG4gICAgICAgIDUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgODIsXG4gICAgICAgIDYyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMixcbiAgICAgICAgNjMsXG4gICAgICAgIDE2LFxuICAgICAgICA4NixcbiAgICAgICAgMTI3LFxuICAgICAgICAxMzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiMTdvaUFQMUd0T0tRMyticTNyTEhIUXVVVnJpaVRsWk5EMitGY1FuVkxLaz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwieGFUaDFmd0pUTmVRcXhlMVNyZ3NpZ1wiLFxuICBcInBob25lSWRcIjogXCI0MmMwMTRiMS04OWZjLTQ0YjgtODkwOC00MGEwN2YxZWVhMDZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjI2LFxuICAgICAgMzcsXG4gICAgICA1NyxcbiAgICAgIDU0LFxuICAgICAgMSxcbiAgICAgIDcsXG4gICAgICA0NSxcbiAgICAgIDIwLFxuICAgICAgMjQxLFxuICAgICAgMTcsXG4gICAgICA4NCxcbiAgICAgIDQ5LFxuICAgICAgNDIsXG4gICAgICAxMzMsXG4gICAgICAyMzQsXG4gICAgICA0MSxcbiAgICAgIDQyLFxuICAgICAgMTU1LFxuICAgICAgMTk4LFxuICAgICAgMjE5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTAsXG4gICAgICAyNDcsXG4gICAgICAxOTAsXG4gICAgICAxMDUsXG4gICAgICAxNDQsXG4gICAgICA2NCxcbiAgICAgIDc1LFxuICAgICAgNzUsXG4gICAgICAyMzUsXG4gICAgICAyMjgsXG4gICAgICA2OCxcbiAgICAgIDMyLFxuICAgICAgMTA4LFxuICAgICAgOTksXG4gICAgICAxNzcsXG4gICAgICAyMDUsXG4gICAgICAxMzgsXG4gICAgICA5NixcbiAgICAgIDQ2LFxuICAgICAgODNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMR1hodTBDRUlhdnlNSUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInRTZXhBdzFVYjRJODBvTEdYSFQ1bFhxckFCMDVWTXZGeC9kQ1dEVmpDUW89XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwidEJoUW40bUNoT3dUejRJZ3FyNGdJQWhrdlh5ZVVGK2F1S2lpcGkwYnZzbTdMVGVqS3Q1RS9lSUxSOUtTV1FOY2RjNE9TZVdZZVRYN1prbzRjZ3VERFE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwicnFiSTIrUW1aMHZ4RU9QajE0aTI5c2YyL3VjcVpFSmh0d1JIZWVkK3U0NTBjalJSR3h1RlhBTFVuRmdROENpMGJOS1BTZWgrSEdnbEY5Rk1aZDdramc9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMyMzYwMTc2MzI6NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjIwMjM3OTg3MzQwMzA1OjVAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMyMzYwMTc2MzI6NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzUwMjEwNDQxLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRXFDXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFFcUEuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJpNk0rcTl6cnNWTGlmakI2U2FPNi9qZ0tPOHg2VXJCZm5CeFJnTWRRWkZjPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjc2NTU2MTc3NyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzUwMTIyODA0OTcwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRXFDLmpzb24iOiAie1wia2V5RGF0YVwiOlwibE1oY1Z2bFJrdjdzUit0NURIRFBVSjhlWGcwcGNFcytLWlE1S2psdncvQT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3NjU1NjE3NzcsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTc1MDEyNDUyNDI0NVwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUVxRS5qc29uIjogIntcImtleURhdGFcIjpcIjVLaWtJNEplTGs4RFNFZE5hQXdHYnhjWUUxeEJRVEt6YWx4TUV5MWNsZ3M9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzY1NTYxNzc3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3NTAxNjI3NDY5MjFcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFFcUcuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJNdHFqOWhhdFdMd3NlbVVmQmU3Q2dNTC9Zdm9jbVhMNkRKZkpvS0gxUS9vPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjc2NTU2MTc3NyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzUwMjA3OTMzMzU1XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBUUFBRXFCLmpzb24iOiAie1wia2V5RGF0YVwiOlwiQlh3dHFpWjBxL0VzY0JzWEdsbHU5WFhDQnFBSXJQaGhVSDAwUnZoUUtZcz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3NjU1NjE3NzcsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDRdfSxcInRpbWVzdGFtcFwiOlwiMTc1MDEyMjgzNTYzOFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQVFBQUVxRC5qc29uIjogIntcImtleURhdGFcIjpcIk96bXdyRlRhM0J2L3ZUemVsWXQ5T3ljMEJrUFNvVllmVXR2MVdZWlFSYXc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzY1NTYxNzc3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCw0XX0sXCJ0aW1lc3RhbXBcIjpcIjE3NTAxNjI3MTQ5NzRcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFRQUFFcUYuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIvTHJ4bFdOcGoyR2NZYjIwL1ZiaHRqUUJITi9la2hPMnFuRVFiZTgyL0trPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjc2NTU2MTc3NyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsNF19LFwidGltZXN0YW1wXCI6XCIxNzUwMTg1NDEzMjQ1XCJ9Igp9"  // PUT your SESSION_ID 


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
