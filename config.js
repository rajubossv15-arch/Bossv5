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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_16_56_08_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDExNixcbiAgICAgICAgMjIzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDUwLFxuICAgICAgICAxODIsXG4gICAgICAgIDE2LFxuICAgICAgICA0MyxcbiAgICAgICAgMTksXG4gICAgICAgIDkzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTgsXG4gICAgICAgIDc1LFxuICAgICAgICA2NixcbiAgICAgICAgMTI4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMjksXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxODUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMDksXG4gICAgICAgIDMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDgzLFxuICAgICAgICAxNjksXG4gICAgICAgIDM4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDg3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTI4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTY5LFxuICAgICAgICA1MixcbiAgICAgICAgNzUsXG4gICAgICAgIDIxMixcbiAgICAgICAgNjEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMzUsXG4gICAgICAgIDUyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMDksXG4gICAgICAgIDIwMyxcbiAgICAgICAgNDksXG4gICAgICAgIDc3LFxuICAgICAgICA2NixcbiAgICAgICAgMTE1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgMTE1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDUyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNzIsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTQxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNixcbiAgICAgICAgMjE2LFxuICAgICAgICAxMTksXG4gICAgICAgIDExNyxcbiAgICAgICAgMTEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgOTUsXG4gICAgICAgIDkzLFxuICAgICAgICAxODksXG4gICAgICAgIDIzMyxcbiAgICAgICAgOTksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjcsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTE1LFxuICAgICAgICA5MSxcbiAgICAgICAgNzIsXG4gICAgICAgIDY4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDg0LFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDk3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDkxLFxuICAgICAgICAzLFxuICAgICAgICA5LFxuICAgICAgICAyNyxcbiAgICAgICAgNzQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNjksXG4gICAgICAgIDY2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDYzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgOTgsXG4gICAgICAgIDUxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMzQsXG4gICAgICAgIDkwLFxuICAgICAgICA0MyxcbiAgICAgICAgNDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgNjUsXG4gICAgICAgIDEzLFxuICAgICAgICA1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDExNCxcbiAgICAgICAgOTQsXG4gICAgICAgIDc0LFxuICAgICAgICAxNzksXG4gICAgICAgIDE2NyxcbiAgICAgICAgNTQsXG4gICAgICAgIDY1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDc3LFxuICAgICAgICA4NCxcbiAgICAgICAgMTM3LFxuICAgICAgICA0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjE2LFxuICAgICAgICA1MixcbiAgICAgICAgMjM2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE5LFxuICAgICAgICAwLFxuICAgICAgICA2MixcbiAgICAgICAgMjM4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxMSxcbiAgICAgICAgOTgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNjksXG4gICAgICAgIDc0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDkzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgOCxcbiAgICAgICAgMjMsXG4gICAgICAgIDc1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDkxLFxuICAgICAgICAxMyxcbiAgICAgICAgMTI4LFxuICAgICAgICAyNCxcbiAgICAgICAgMjgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTc1LFxuICAgICAgICAxMSxcbiAgICAgICAgNTIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDQzLFxuICAgICAgICA4MyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNjdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODIsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgOTJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTEsXG4gICAgICAgIDgxLFxuICAgICAgICAzNyxcbiAgICAgICAgMTQ0LFxuICAgICAgICA5NSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjcsXG4gICAgICAgIDMwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE0MixcbiAgICAgICAgNjgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjI0LFxuICAgICAgICA3NCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyOCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDczLFxuICAgICAgICAyMTcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgODYsXG4gICAgICAgIDM2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMzcsXG4gICAgICAgIDk4LFxuICAgICAgICAzOSxcbiAgICAgICAgMzgsXG4gICAgICAgIDY2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTgsXG4gICAgICAgIDEzLFxuICAgICAgICA4OCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDgzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNTMsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTUxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTMwLFxuICAgICAgICA5OCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA4OCxcbiAgICAgICAgODAsXG4gICAgICAgIDQ1LFxuICAgICAgICA3MCxcbiAgICAgICAgNCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIxOCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJoMDM0OHhmYUlhUEZZNkQwV08rRUppakxwQkNSWUIvYXZJNUY0MzdpVVhRPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJpMHRDakxNRFNXT2NkZnE1MmVGT3lnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjM3NTY3OGM2LWYxYjEtNDZhNi04NDdhLWZlYmNiNmY2YzhlYlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTEsXG4gICAgICAxNDMsXG4gICAgICAyOCxcbiAgICAgIDE2MSxcbiAgICAgIDExNSxcbiAgICAgIDEwMSxcbiAgICAgIDQxLFxuICAgICAgMTY1LFxuICAgICAgMzUsXG4gICAgICA0MSxcbiAgICAgIDc0LFxuICAgICAgNzksXG4gICAgICAxMTAsXG4gICAgICAxMTQsXG4gICAgICA1NyxcbiAgICAgIDgyLFxuICAgICAgNjYsXG4gICAgICAyNTQsXG4gICAgICAyMTksXG4gICAgICA0NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzMsXG4gICAgICAxMzMsXG4gICAgICAxMTksXG4gICAgICAyLFxuICAgICAgMTkzLFxuICAgICAgMjYsXG4gICAgICAxODAsXG4gICAgICA2OCxcbiAgICAgIDEwMSxcbiAgICAgIDc2LFxuICAgICAgMTcwLFxuICAgICAgNjksXG4gICAgICA3MSxcbiAgICAgIDIwOSxcbiAgICAgIDE5OSxcbiAgICAgIDExMSxcbiAgICAgIDIzOCxcbiAgICAgIDIyLFxuICAgICAgNjcsXG4gICAgICAyMzJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMcXhxOThCRUwyMTA4UUdHQWdnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIk5xR2ZtWTB4WTBYYlI3NmVKOVJRcEtrbGp5elhjN1pHRGVVdUxhQlBBaVk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiM0pHSm52b0RIRGZyUXIwZ1dzb3hmZUp4b2FlT3FBcjgxdGNMZlYzQWx5eFhhLzBab1U3emZ4SHJVWEtYckU4ZmRodWhoV2hENk8ySTBHSjI3Y2ZJQ0E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiN3QxcUZYWE55U0NNcTM2NWhudk9SR0w0cHJTUmZ6MDRuWGlQNFNDQWkyZ1BybUtNQVZFbmxNNzdTY0YvZ1h2UjNGbHRQVGtQRWtaeWlCS1RER3dmaGc9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMyNDA4MDYyMTA6NDFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJzaWxlbnQga2lsbGVyXCIsXG4gICAgXCJsaWRcIjogXCIxOTcyNDI1MTQzMzc5OTE6NDFAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMyNDA4MDYyMTA6NDFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgOTksXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMixcbiAgICAgICAgICAzOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzU0NTg1Nzk0LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTWtWXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFNa1UuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI3RkY0cVhXSFZFOFNoVWZRRFpBUFhBeEVhcEtVL0dKS0dsaDlMY2FuVEVVPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjQ2ODM3NTczOCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTWtWLmpzb24iOiAie1wia2V5RGF0YVwiOlwiNGNURzd4OCtqcndoRzlPcFdvUXFCanFPVVBqQVA1Rk5WOGJseS9zN2haTT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo0NjgzNzU3MzgsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDJdfSxcInRpbWVzdGFtcFwiOlwiMTc1MzgwNzA3OTk5N1wifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU1rVy5qc29uIjogIntcImtleURhdGFcIjpcIlllL012bFJxNHUyRSs5UlZpaDEwaXJsTkVwakJEaTcrRlI1dm5BbU9kYUk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NDY4Mzc1NzM4LFwiY3VycmVudEluZGV4XCI6NSxcImRldmljZUluZGV4ZXNcIjpbMCwyXX0sXCJ0aW1lc3RhbXBcIjpcIjE3NTM4MTYwNjI3NzhcIn0iCn0="  // PUT your SESSION_ID 


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
