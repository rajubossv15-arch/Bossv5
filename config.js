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


global.devs = "923314926711" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "923314926711";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923314926711";




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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_15_12_06_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTQzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDI3LFxuICAgICAgICA0OSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMSxcbiAgICAgICAgMTMyLFxuICAgICAgICA4MyxcbiAgICAgICAgNTQsXG4gICAgICAgIDk4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNDcsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDY2LFxuICAgICAgICA4MSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAzOSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDIxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDEyMixcbiAgICAgICAgNzIsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTk4LFxuICAgICAgICA3OCxcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU3LFxuICAgICAgICAyNCxcbiAgICAgICAgNDMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgODcsXG4gICAgICAgIDQ1LFxuICAgICAgICA2OCxcbiAgICAgICAgMzEsXG4gICAgICAgIDI5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDExMixcbiAgICAgICAgNjMsXG4gICAgICAgIDU2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTE2LFxuICAgICAgICA0NyxcbiAgICAgICAgMTgsXG4gICAgICAgIDIxLFxuICAgICAgICA0NSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTY2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgOTgsXG4gICAgICAgIDgzLFxuICAgICAgICAzMSxcbiAgICAgICAgNTAsXG4gICAgICAgIDM1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDUxLFxuICAgICAgICAyMjksXG4gICAgICAgIDE2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNDQsXG4gICAgICAgIDEsXG4gICAgICAgIDUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgOTIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNDksXG4gICAgICAgIDY0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxOCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxODQsXG4gICAgICAgIDk0LFxuICAgICAgICA2OCxcbiAgICAgICAgNzQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjQzLFxuICAgICAgICA5MyxcbiAgICAgICAgNzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjI1LFxuICAgICAgICA1NCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDM2LFxuICAgICAgICAxNTksXG4gICAgICAgIDgzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDQzLFxuICAgICAgICA5OSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgODksXG4gICAgICAgIDE1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjMsXG4gICAgICAgIDQ1LFxuICAgICAgICAxOCxcbiAgICAgICAgMTExLFxuICAgICAgICAyMDcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTc5LFxuICAgICAgICAyOCxcbiAgICAgICAgOTgsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjU0LFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgMTU4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjMzLFxuICAgICAgICA5MSxcbiAgICAgICAgNzQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTYwLFxuICAgICAgICA1NSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMzksXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDcxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE4MixcbiAgICAgICAgNzAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgOSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA0MCxcbiAgICAgICAgMzMsXG4gICAgICAgIDM1LFxuICAgICAgICAxODMsXG4gICAgICAgIDIzLFxuICAgICAgICA3NCxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNixcbiAgICAgICAgMTcwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDkxLFxuICAgICAgICA3OSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDk3LFxuICAgICAgICAyLFxuICAgICAgICA1OCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTIsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTExLFxuICAgICAgICAyMTUsXG4gICAgICAgIDI2LFxuICAgICAgICAyMzksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTA3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxMjRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDg4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODMsXG4gICAgICAgIDYyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTIsXG4gICAgICAgIDcxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDczLFxuICAgICAgICAxNzAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTgsXG4gICAgICAgIDM4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNDUsXG4gICAgICAgIDI0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTcwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDk4LFxuICAgICAgICA0NCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNTMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDg3LFxuICAgICAgICAxMjksXG4gICAgICAgIDc4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTA2LFxuICAgICAgICA0OSxcbiAgICAgICAgNzgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNzAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTUxLFxuICAgICAgICAyOCxcbiAgICAgICAgNTEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTUxLFxuICAgICAgICA1MixcbiAgICAgICAgMTY1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDU2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEzLFxuICAgICAgICAyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDk3LFxuICAgICAgICA4NSxcbiAgICAgICAgMTMzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA3MSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJqNXRnVVh0N2VNd28vQS81VXVVWUs5aDNCOXNyaUhXdGJwVzdOTGROSzhrPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzMxNDkyNjcxMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMDcyRUM0NDVFNTdCQjI0NDJEODVFNTM4Mjc2MzAwOUJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzQ5MDQ5OTU1XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMzE0OTI2NzExQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJERDg3ODdDNjJDQjY5NDA4NDYxNTFCMzVGREUzOTBFQlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3NDkwNDk5NTVcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMyLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMyLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiTDUtbEhqelNTclc4RHlwZWpiNGxQd1wiLFxuICBcInBob25lSWRcIjogXCI2MTdmYzFhMy04MDExLTQ2YjEtYWYxYi1lYWUxMDI1OTEyMTJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQ3LFxuICAgICAgMTM1LFxuICAgICAgODQsXG4gICAgICA3NCxcbiAgICAgIDEyMixcbiAgICAgIDIwLFxuICAgICAgMTAzLFxuICAgICAgMzYsXG4gICAgICAxMjAsXG4gICAgICAzNCxcbiAgICAgIDIwOSxcbiAgICAgIDE1MCxcbiAgICAgIDExMSxcbiAgICAgIDEzMixcbiAgICAgIDc0LFxuICAgICAgMTAyLFxuICAgICAgMTA2LFxuICAgICAgMjMzLFxuICAgICAgMTMsXG4gICAgICAxMThcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyLFxuICAgICAgMTU3LFxuICAgICAgNzEsXG4gICAgICAyMjYsXG4gICAgICAyMTcsXG4gICAgICAxNDAsXG4gICAgICAxMjIsXG4gICAgICAzMyxcbiAgICAgIDIwMixcbiAgICAgIDE0MSxcbiAgICAgIDU3LFxuICAgICAgMTA1LFxuICAgICAgMTksXG4gICAgICAxNTcsXG4gICAgICAxMTIsXG4gICAgICAzNyxcbiAgICAgIDk0LFxuICAgICAgMTg4LFxuICAgICAgMjUsXG4gICAgICA0M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ055ZXZiMEVFTnpFZ2NJR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiZDExMU0zWmhyWTMrZjVMK3FHRnFJMU1LU0RBK1VVeE9uUU9QeTJIUWlUUT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIzUDRuTi9wdzF1Yy9HQVcrNG1wQUxuSW9JVlFsSE9CcmFneVVCcUU0UFZiUFNSdm5RZkRzNnJtb3BxMVB3eDlhL2VFL0tKekdKSEtTekVnazkwdUdDUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJyVmFmTngrZTMySk1GNGx0bHdENHZsZTRsSXVzYWZrYlJIOVl2MjJ4dVdPUzg5MmIzMXZ1R1VNRHRQVjMyVTJ4NWx4dFZKRGh4cG5JZC9KY1NUTlBodz09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzMxNDkyNjcxMToxMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjY2ODA5NTc2NTMyMzA6MTBAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwi4oCO8J2TofCdk6rwnZOz8J2TviA1OTExXFxu4oCOXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMzMTQ5MjY3MTE6MTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA1MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzQ5MDQ5OTUyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSENNXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFIQ00uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJQaWs5aUtwM2drSHE0T2o5VmxEeDlUVXkwVUlHK1BVKzlQMEtkRGdXeFVBPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEyMDI2NzE0NTIsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTc0OTA0OTk1NjA2NFwifSIKfQ=="  // PUT your SESSION_ID 


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
