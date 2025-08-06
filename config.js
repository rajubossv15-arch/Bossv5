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


global.devs = "923314926746" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "923314926746";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923314926746";




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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_12_26_08_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMTI4LFxuICAgICAgICA3MSxcbiAgICAgICAgNDcsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDgyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDEyNixcbiAgICAgICAgNDcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMzQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMzksXG4gICAgICAgIDIyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDEwLFxuICAgICAgICAxNDksXG4gICAgICAgIDQ5LFxuICAgICAgICAxODgsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1MixcbiAgICAgICAgMTcwLFxuICAgICAgICAxMDksXG4gICAgICAgIDU2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNjMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNTEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTYyLFxuICAgICAgICA2OSxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDYyLFxuICAgICAgICAxLFxuICAgICAgICA2OSxcbiAgICAgICAgMTcyLFxuICAgICAgICA0OSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDg4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNDgsXG4gICAgICAgIDY0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTc3LFxuICAgICAgICA1NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICA3OSxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNDQsXG4gICAgICAgIDUwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDczLFxuICAgICAgICAxMDYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA5MixcbiAgICAgICAgMjAyLFxuICAgICAgICA3MixcbiAgICAgICAgOTgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNTMsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMjksXG4gICAgICAgIDI0LFxuICAgICAgICAzNixcbiAgICAgICAgMTg3LFxuICAgICAgICA0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTMsXG4gICAgICAgIDEwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDkyLFxuICAgICAgICAyNSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxOSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTMxLFxuICAgICAgICA1NSxcbiAgICAgICAgOSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDc0LFxuICAgICAgICAxMTksXG4gICAgICAgIDU3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDc4LFxuICAgICAgICA4MSxcbiAgICAgICAgOTQsXG4gICAgICAgIDUwLFxuICAgICAgICAxODksXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDYyLFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAyOSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNjEsXG4gICAgICAgIDYsXG4gICAgICAgIDUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTEsXG4gICAgICAgIDM2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNTQsXG4gICAgICAgIDM3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTc3LFxuICAgICAgICAzNCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMyxcbiAgICAgICAgMTM4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDgsXG4gICAgICAgIDU0LFxuICAgICAgICAxNyxcbiAgICAgICAgMSxcbiAgICAgICAgMjE5LFxuICAgICAgICA4OCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTQwLFxuICAgICAgICA5NCxcbiAgICAgICAgMTI1LFxuICAgICAgICA0NCxcbiAgICAgICAgMTc1LFxuICAgICAgICA5NCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTQwLFxuICAgICAgICA3OSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgODcsXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDg1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTA5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjEyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDQzLFxuICAgICAgICA2MCxcbiAgICAgICAgODksXG4gICAgICAgIDIxMixcbiAgICAgICAgMTI5LFxuICAgICAgICA4NSxcbiAgICAgICAgODIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTcxLFxuICAgICAgICAxODIsXG4gICAgICAgIDU0LFxuICAgICAgICA2MyxcbiAgICAgICAgMTQ2LFxuICAgICAgICA2MSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjMyLFxuICAgICAgICAzOSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMSxcbiAgICAgICAgMTM1LFxuICAgICAgICAzMyxcbiAgICAgICAgMTUsXG4gICAgICAgIDgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxOSxcbiAgICAgICAgNTUsXG4gICAgICAgIDEzLFxuICAgICAgICA1MSxcbiAgICAgICAgMjMyLFxuICAgICAgICAzNyxcbiAgICAgICAgMTUsXG4gICAgICAgIDkzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDcyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNTMsXG4gICAgICAgIDg5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMzAsXG4gICAgICAgIDExNixcbiAgICAgICAgMTM0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNDQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwibmxUME4xaEJXRGlIUXFYRHFpck9HdEUvdWhrUG90N2x4T0FnMHlNcUlrVT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiUGlrVzdkRFhSNXFRZ1RnNG44QTU4QVwiLFxuICBcInBob25lSWRcIjogXCI4ZTFjMzQyYS0yNzhkLTRhNTUtYjA0YS1iZjM2YmY0NDJiZWFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTI0LFxuICAgICAgODEsXG4gICAgICAyMTEsXG4gICAgICAyMTYsXG4gICAgICAyNTUsXG4gICAgICAyNTUsXG4gICAgICAxNTQsXG4gICAgICA1NSxcbiAgICAgIDk1LFxuICAgICAgMjM1LFxuICAgICAgMTg3LFxuICAgICAgODMsXG4gICAgICAxNDMsXG4gICAgICAxODAsXG4gICAgICAyMjIsXG4gICAgICAxNDMsXG4gICAgICAyMixcbiAgICAgIDE0MSxcbiAgICAgIDE3MyxcbiAgICAgIDE3NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOSxcbiAgICAgIDIxLFxuICAgICAgMTEwLFxuICAgICAgMTU3LFxuICAgICAgMTgyLFxuICAgICAgMjEsXG4gICAgICAxMTksXG4gICAgICAyMzEsXG4gICAgICAxMDMsXG4gICAgICA2NCxcbiAgICAgIDM5LFxuICAgICAgNDUsXG4gICAgICA2LFxuICAgICAgMTY3LFxuICAgICAgMjM2LFxuICAgICAgMTk1LFxuICAgICAgMjU1LFxuICAgICAgMjIzLFxuICAgICAgMTY0LFxuICAgICAgMjVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLN2MrNHNFRU4rVHpjUUdHQVFnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjcvenNvN1VEM2pxS2RDY1lzYzFLeGdQdjFrVHB5NitMQVZuaTBTeGxJVlE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiTk5MamdRSWFVVzk1TjBiM1RvZzZuZUdtL1BFKysxaGlCNkkrYnNJMlpzQ3J5OTBkdEd3cXo3eUY2eDhUUWFuWmRRSTlPNFJGNUhXcGI4ZEszbXd4QWc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiV2EwNU42UC9tcUtLZEM5Wkt1ZENiN0Rnb0VVZUpSTFI1T2JWTGpraFBENTV0a3lseXF5T0xzaWV3TWNUb01UMjhRci9uaHVGZ0JNZldOc0dtSDloaGc9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMzMTQ5MjY3NDY6MjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLwnZOh8J2TqvCdk7PwnZO+IDU5MTFcIixcbiAgICBcImxpZFwiOiBcIjI2NTA0NzM2NDM3ODY4NjoyNEBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzMxNDkyNjc0NjoyNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgODRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc1NDQ4MzE3MSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUhuMVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSG4xLmpzb24iOiAie1wia2V5RGF0YVwiOlwiL0c5MkVMQ3ozL3BtM284cDJOWEhzM3N1elpoZ0JYa3NmZVVsUUJnVFlDbz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMDk4ODM3NTUwLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFIbjIuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJrSUJWTTBFUjFRL2tFbi9yTjh4TUlRTzN5c2RUT3ZSRW5DcU1yOFpndlRzPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEwOTg4Mzc1NTAsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUhuMy5qc29uIjogIntcImtleURhdGFcIjpcIkVRMThnMWsyQ0YrREpjWDlVWFlVTXVtUUpaOEY4WUNONnJoZWdYK2d5Z0E9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTA5ODgzNzU1MCxcImN1cnJlbnRJbmRleFwiOjMsXCJkZXZpY2VJbmRleGVzXCI6WzAsM119LFwidGltZXN0YW1wXCI6XCIxNzU0NDgzMTA3MzAyXCJ9Igp9"  // PUT your SESSION_ID 


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
