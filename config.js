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


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID || "SUHAIL_09_44_07_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNTIsXG4gICAgICAgIDQwLFxuICAgICAgICA0NyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMzksXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjMxLFxuICAgICAgICA3OSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMzksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTQsXG4gICAgICAgIDIwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDMsXG4gICAgICAgIDIzNixcbiAgICAgICAgOTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMyxcbiAgICAgICAgMjQyLFxuICAgICAgICA4MCxcbiAgICAgICAgMjgsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjE1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgOTQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDc2LFxuICAgICAgICAxODMsXG4gICAgICAgIDQ0LFxuICAgICAgICA0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNTUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTg1LFxuICAgICAgICA4NixcbiAgICAgICAgMTgsXG4gICAgICAgIDc1LFxuICAgICAgICAxNyxcbiAgICAgICAgNTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTE3LFxuICAgICAgICA3OSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDcxLFxuICAgICAgICAxODAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTY5LFxuICAgICAgICA0MixcbiAgICAgICAgMjI4LFxuICAgICAgICA3OCxcbiAgICAgICAgNTEsXG4gICAgICAgIDU2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDUxLFxuICAgICAgICA5MSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxODEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTkwLFxuICAgICAgICA3NyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDIwMixcbiAgICAgICAgNTQsXG4gICAgICAgIDExOSxcbiAgICAgICAgNDUsXG4gICAgICAgIDc1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjIzLFxuICAgICAgICA0NixcbiAgICAgICAgMzMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDY4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDQyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTczLFxuICAgICAgICAxODEsXG4gICAgICAgIDUxLFxuICAgICAgICAxMjksXG4gICAgICAgIDE4NCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjI1LFxuICAgICAgICA3NCxcbiAgICAgICAgMjMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTg2LFxuICAgICAgICA5NSxcbiAgICAgICAgMTMyLFxuICAgICAgICA0MixcbiAgICAgICAgNDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICAxODQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMzYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTE2LFxuICAgICAgICA1NyxcbiAgICAgICAgMjMyLFxuICAgICAgICA4NSxcbiAgICAgICAgNjksXG4gICAgICAgIDgzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDcxLFxuICAgICAgICA5NixcbiAgICAgICAgMTgzLFxuICAgICAgICA1NyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDc4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNDgsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjQsXG4gICAgICAgIDUwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1MixcbiAgICAgICAgMzQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTgzLFxuICAgICAgICAzMCxcbiAgICAgICAgMjYsXG4gICAgICAgIDE5NixcbiAgICAgICAgOTAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNDMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTg5LFxuICAgICAgICA5MyxcbiAgICAgICAgMTgzLFxuICAgICAgICA5NixcbiAgICAgICAgMTIxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDYyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDIzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDEwMixcbiAgICAgICAgOTMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTM4LFxuICAgICAgICA0OCxcbiAgICAgICAgMTIzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxMjFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDksXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4NyxcbiAgICAgICAgNyxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDUyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgODYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjksXG4gICAgICAgIDQwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDg0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMzIsXG4gICAgICAgIDMzLFxuICAgICAgICAyOCxcbiAgICAgICAgMSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDcyLFxuICAgICAgICAxODUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNTAsXG4gICAgICAgIDExMyxcbiAgICAgICAgOTIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxODcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTgzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMzIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMSxcbiAgICAgICAgNDMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNTIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTg5LFxuICAgICAgICAxODUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyNixcbiAgICAgICAgNTUsXG4gICAgICAgIDM5LFxuICAgICAgICA2MCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDI5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDY3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNzIsXG4gICAgICAgIDgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgOTksXG4gICAgICAgIDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE4OSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ6bWZjeVhTVytBeDFOUGZsYTQ2VXBFWG91bWs3d3dvOGkrb2JmL2VuendzPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzMxNDM1MjAwN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiOTBBNDQ5RjI4QzAzRDVBQUJCRjVCODkwNjAxNzY5MEZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwMjU5MDQwXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkJZZFk2eEk0UTN1cWs4UUJNaFZvdEFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZDQ0ZDZlODktYTZhNC00MjMwLWFkNjQtYjAwMzMwMDZmNTBmXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzMSxcbiAgICAgIDIyNCxcbiAgICAgIDIxOSxcbiAgICAgIDkzLFxuICAgICAgMTk2LFxuICAgICAgNTMsXG4gICAgICA5OCxcbiAgICAgIDIyOSxcbiAgICAgIDY5LFxuICAgICAgNDAsXG4gICAgICAyMzcsXG4gICAgICAzNyxcbiAgICAgIDIwNyxcbiAgICAgIDE1MSxcbiAgICAgIDIwNyxcbiAgICAgIDc2LFxuICAgICAgMTY1LFxuICAgICAgMTQ4LFxuICAgICAgMTA4LFxuICAgICAgN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTksXG4gICAgICAxNjgsXG4gICAgICAzOSxcbiAgICAgIDE5MyxcbiAgICAgIDY5LFxuICAgICAgMjcsXG4gICAgICAxODAsXG4gICAgICA1NCxcbiAgICAgIDE4OSxcbiAgICAgIDE1LFxuICAgICAgMjU1LFxuICAgICAgMTk2LFxuICAgICAgMTA2LFxuICAgICAgMTEwLFxuICAgICAgMTU1LFxuICAgICAgNTksXG4gICAgICA1LFxuICAgICAgNCxcbiAgICAgIDE5NSxcbiAgICAgIDE0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlFaRldHR01BXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMzMTQzNTIwMDc6NTdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLigKIg5LmDIFIgTyBLIOS5hyAgTiAgICAgXFxuICAg4oq5ICBcXG4gICDiirkgIFxcbiAgIOKKuSAgXFxuICAg4oq5ICBcXG4gICDiirkgIFxcbiAgIOKKuSAgXFxuICAg4oq5ICBcXG4gICDiirlcIixcbiAgICBcImxpZFwiOiBcIjg4NzQ3Mjc4MzY4OTE5OjU3QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0pLcmpZZ0ZFTmlqcExRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiSk8vS0tjM1F1MGR5YXVTRzJYd2kyZHF0ZWsyejFmK0FrZlNXQ3AxM3pBMD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJIQ2hNemtZREVNQ0ZoRllTaHBDWmpXVFh5NDFLTjhhNXQ4S0k2d3lmdERKL3VjT3hvNnRjVkZSbUdXNXhMQU9xaFhyOFA4bTVtMWpLWWM3MWpaSm9DZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJUdFlrUVRRelBuY25Pa2l3REZPVk1FazVCcmVYR25Cam1KSTN5WXgxMTdSM1p4MmxqeTg0YURhNC9xdWxWS3pEUHBIVi83cDlCUmJuN0ZrcTh1Y1dEUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMzMTQzNTIwMDc6NTdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDI1OTAzNSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUVrSFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRWtILmpzb24iOiAie1wia2V5RGF0YVwiOlwiY0swZnlxc1R4bVRxRWg4cTBESG85Umo0RDluQnQwdGtvWURuNkwwS1hPQT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMzU5MTczMDA4LFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwyXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0= " // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


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
