const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923314352007" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923314352007";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_00_36_07_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxOCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNzksXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTEyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDI0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjMzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTY0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDI5LFxuICAgICAgICA1NSxcbiAgICAgICAgOSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgODYsXG4gICAgICAgIDU2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTA4LFxuICAgICAgICA5NixcbiAgICAgICAgMTYzLFxuICAgICAgICAyMixcbiAgICAgICAgNzMsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDM1LFxuICAgICAgICAzNixcbiAgICAgICAgODksXG4gICAgICAgIDk3LFxuICAgICAgICAyMzksXG4gICAgICAgIDE1MyxcbiAgICAgICAgOTgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTU1LFxuICAgICAgICAwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDMsXG4gICAgICAgIDg2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjE0LFxuICAgICAgICA0OSxcbiAgICAgICAgNzAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNzEsXG4gICAgICAgIDE1NixcbiAgICAgICAgODcsXG4gICAgICAgIDI3LFxuICAgICAgICA5NyxcbiAgICAgICAgMjAwLFxuICAgICAgICA4OSxcbiAgICAgICAgMCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDgzLFxuICAgICAgICAyMzksXG4gICAgICAgIDEyLFxuICAgICAgICA0NyxcbiAgICAgICAgMjEyLFxuICAgICAgICA1MCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjM3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNjAsXG4gICAgICAgIDI2LFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgODEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTczLFxuICAgICAgICAyMjYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTk4LFxuICAgICAgICA1NyxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTI0LFxuICAgICAgICAyMyxcbiAgICAgICAgNzUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTAwLFxuICAgICAgICA4MCxcbiAgICAgICAgMzAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDY3LFxuICAgICAgICA3NixcbiAgICAgICAgNTMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMixcbiAgICAgICAgNTAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDkyLFxuICAgICAgICA5NixcbiAgICAgICAgOTksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMTksXG4gICAgICAgIDQxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTI0LFxuICAgICAgICA1MCxcbiAgICAgICAgMjEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMzEsXG4gICAgICAgIDE0MixcbiAgICAgICAgNTAsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTU0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMSxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMDksXG4gICAgICAgIDEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDQwLFxuICAgICAgICA1MSxcbiAgICAgICAgNjIsXG4gICAgICAgIDExLFxuICAgICAgICAxODIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxOTksXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTU3LFxuICAgICAgICA4N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxMTRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDczXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjIsXG4gICAgICAgIDEyMixcbiAgICAgICAgMzUsXG4gICAgICAgIDUzLFxuICAgICAgICA4OSxcbiAgICAgICAgMTY0LFxuICAgICAgICA3OCxcbiAgICAgICAgMTUxLFxuICAgICAgICA1OSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDg1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTQ3LFxuICAgICAgICA0MSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTI4LFxuICAgICAgICA0OCxcbiAgICAgICAgMjQsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMTksXG4gICAgICAgIDczLFxuICAgICAgICA5LFxuICAgICAgICA5OCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgOTMsXG4gICAgICAgIDU0LFxuICAgICAgICAxODAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNjMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTU3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDQyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTU4LFxuICAgICAgICAzOCxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjIzLFxuICAgICAgICA5LFxuICAgICAgICAyNSxcbiAgICAgICAgOTEsXG4gICAgICAgIDQxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjAwLFxuICAgICAgICA1NyxcbiAgICAgICAgMjMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEzMyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJGMktMTDl3NWVPZDZvY3RBSTZZNFFQcW80MkZzd2NZTW5SeHRwdWkrYVhZPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzMxNDM1MjAwN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRTkzQkNBNTUwNDI5QUU4QUQ5QjU3OTIyNDVGMDE2QkZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE5ODgwNTczXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMzE0MzUyMDA3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI1QUJDNkU5QTZERDAxMEMxQUQ3QzIwQzQyMDRGOTg2MlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTk4ODA1NzNcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiZGUycmx2T3JTc1czSkhBb0ZHVnpvQVwiLFxuICBcInBob25lSWRcIjogXCI0OTQ0ZTVkYy01MGRlLTQzYTktOGE4Yy1mMDA4ODUwZjc4YjdcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzQsXG4gICAgICAyMyxcbiAgICAgIDEyOCxcbiAgICAgIDg4LFxuICAgICAgMTAwLFxuICAgICAgMTEsXG4gICAgICAyMTcsXG4gICAgICAxNzYsXG4gICAgICAxNzEsXG4gICAgICAxNTYsXG4gICAgICAyMDIsXG4gICAgICA1NixcbiAgICAgIDg0LFxuICAgICAgMTE4LFxuICAgICAgMjMxLFxuICAgICAgMTQxLFxuICAgICAgNzAsXG4gICAgICAxODAsXG4gICAgICAxNzYsXG4gICAgICA1MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5OSxcbiAgICAgIDIzLFxuICAgICAgOTgsXG4gICAgICAxNTksXG4gICAgICAxOTIsXG4gICAgICA4NyxcbiAgICAgIDE2MSxcbiAgICAgIDI0NCxcbiAgICAgIDM0LFxuICAgICAgMjMxLFxuICAgICAgMTE5LFxuICAgICAgNjksXG4gICAgICAxNjQsXG4gICAgICA5MSxcbiAgICAgIDIwNixcbiAgICAgIDE4MyxcbiAgICAgIDEwMCxcbiAgICAgIDk2LFxuICAgICAgMTQ1LFxuICAgICAgMTc1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlhOS1M0VjE0XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMzMTQzNTIwMDc6NTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLigKIg5LmDIFIgTyBLIOS5hyAgTiAgICAgXFxuICAg4oq5ICBcXG4gICDiirkgIFxcbiAgIOKKuSAgXFxuICAg4oq5ICBcXG4gICDiirkgIFxcbiAgIOKKuSAgXFxuICAg4oq5ICBcXG4gICDiirlcIixcbiAgICBcImxpZFwiOiBcIjg4NzQ3Mjc4MzY4OTE5OjU1QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0pDcmpZZ0ZFUGVXamJRR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiSk8vS0tjM1F1MGR5YXVTRzJYd2kyZHF0ZWsyejFmK0FrZlNXQ3AxM3pBMD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJvek5WZXBvS0V3Q2hOVVdGcXh0N3h6M1lNZ3dGSE9lRTZScUwxUUxROEJzaVFJQzhuMzM0ZDBQNU1mKzBNSWxLSHJkTUh3eEd5dFlrblpmT2NGekxDdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJNcnJ6NDFTVWgrazdZcFNQMHhHdVJHaWtYMkZxLzZJbnAxanFOMGIycjk4QjBNdVI4eFg1dkhDWHlNcnBjbkhPbmRkSkVmQTU2a0Y5S0x2TUUxYTFCUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMzMTQzNTIwMDc6NTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxOTg4MDU3MCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUVrR1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRWtHLmpzb24iOiAie1wia2V5RGF0YVwiOlwiZWI0aGdzS1p3c3MwbEMyOUc2V3h2K0VYRWN1RHdDZFhUK0lhZ0hha3Rlbz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMzU5MTczMDA4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTk3NDk5MTg5NjlcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















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
