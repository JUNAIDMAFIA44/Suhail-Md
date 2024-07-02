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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_25_07_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDkyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDk2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxODYsXG4gICAgICAgIDQwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTI1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjQsXG4gICAgICAgIDEwMixcbiAgICAgICAgNDYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjI4LFxuICAgICAgICA3MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjksXG4gICAgICAgIDE4NSxcbiAgICAgICAgOSxcbiAgICAgICAgMTAyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDYzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjUzLFxuICAgICAgICA2NCxcbiAgICAgICAgNzEsXG4gICAgICAgIDE2LFxuICAgICAgICAxMixcbiAgICAgICAgMjA2LFxuICAgICAgICA1NSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxODAsXG4gICAgICAgIDkwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDg2LFxuICAgICAgICA1NCxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMzksXG4gICAgICAgIDE4LFxuICAgICAgICA0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDY4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDM5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDI2LFxuICAgICAgICA1MyxcbiAgICAgICAgMjE3LFxuICAgICAgICA2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNjksXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjM3LFxuICAgICAgICA1NixcbiAgICAgICAgMjAzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDM2LFxuICAgICAgICA1NixcbiAgICAgICAgMTk2LFxuICAgICAgICAyNyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMCxcbiAgICAgICAgMTYsXG4gICAgICAgIDY5LFxuICAgICAgICAxMCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDMwLFxuICAgICAgICA1NCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxODQsXG4gICAgICAgIDcwLFxuICAgICAgICAxNzksXG4gICAgICAgIDIyOCxcbiAgICAgICAgMzEsXG4gICAgICAgIDIwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIyMixcbiAgICAgICAgODYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTU5LFxuICAgICAgICA5OCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjUsXG4gICAgICAgIDYsXG4gICAgICAgIDEyNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICA2NCxcbiAgICAgICAgNDcsXG4gICAgICAgIDI4LFxuICAgICAgICAxMDksXG4gICAgICAgIDIzNixcbiAgICAgICAgMTI3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgOTksXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTI5LFxuICAgICAgICA0MixcbiAgICAgICAgMjksXG4gICAgICAgIDE5MixcbiAgICAgICAgMTg4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDcxLFxuICAgICAgICA2NCxcbiAgICAgICAgOTQsXG4gICAgICAgIDc3LFxuICAgICAgICA0MixcbiAgICAgICAgMTMyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA0MyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgOTQsXG4gICAgICAgIDgzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgOTQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTM0LFxuICAgICAgICA5OCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjExLFxuICAgICAgICAxNTYsXG4gICAgICAgIDY3LFxuICAgICAgICAzMyxcbiAgICAgICAgOTMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTgwLFxuICAgICAgICAzMixcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDk2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTA4LFxuICAgICAgICA4NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDgzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMzJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTksXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTU0LFxuICAgICAgICA0NCxcbiAgICAgICAgMTM1LFxuICAgICAgICA1MCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNyxcbiAgICAgICAgMTU1LFxuICAgICAgICA2MCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgOSxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMTksXG4gICAgICAgIDQsXG4gICAgICAgIDI1MixcbiAgICAgICAgODIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgOTAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgODQsXG4gICAgICAgIDc2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTQxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDkzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDgsXG4gICAgICAgIDg5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTIsXG4gICAgICAgIDI2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNjEsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTk5LFxuICAgICAgICAzNyxcbiAgICAgICAgMjMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTI2LFxuICAgICAgICAxMDksXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjIyLFxuICAgICAgICA5MyxcbiAgICAgICAgNzEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTM5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMjEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiZjBGa1dhZW5XUHJsckNqMFpLSnlRL0hka1krWHdCY3MwUCtVSnVJTjVsRT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMzMTQzNTIwMDdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjVCRjlEQzczOTYxQTBFQTRBMzkyMjE4RDZERkVGOTk4XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxOTkxNTkyNlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJKem9uX0wwUFN5YWszRnZESHdQeTVBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjRhZGMxYWYwLWQyNGUtNDIwZS1iMzBiLTBjMjA0ZjM5ZGRlOFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjIsXG4gICAgICAxNTMsXG4gICAgICAxODIsXG4gICAgICAxNjcsXG4gICAgICA1MixcbiAgICAgIDIxNixcbiAgICAgIDQsXG4gICAgICAxNjAsXG4gICAgICAyNixcbiAgICAgIDI2LFxuICAgICAgMjI2LFxuICAgICAgMTg3LFxuICAgICAgMTI4LFxuICAgICAgMTM0LFxuICAgICAgMTA4LFxuICAgICAgMTI2LFxuICAgICAgMTEyLFxuICAgICAgMTY3LFxuICAgICAgMTQ4LFxuICAgICAgMjA3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0NyxcbiAgICAgIDIxMSxcbiAgICAgIDExMCxcbiAgICAgIDExMSxcbiAgICAgIDY3LFxuICAgICAgMjQyLFxuICAgICAgMTMxLFxuICAgICAgMTg4LFxuICAgICAgMjgsXG4gICAgICAxLFxuICAgICAgMjIzLFxuICAgICAgMTAzLFxuICAgICAgMjQ4LFxuICAgICAgNDEsXG4gICAgICAxMTgsXG4gICAgICAxNSxcbiAgICAgIDIyMyxcbiAgICAgIDM1LFxuICAgICAgMTU4LFxuICAgICAgMjhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNlBTM0ZSQk5cIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzMxNDM1MjAwNzo1NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIuKAoiDkuYMgUiBPIEsg5LmHICBOICAgICBcXG4gICDiirkgIFxcbiAgIOKKuSAgXFxuICAg4oq5ICBcXG4gICDiirkgIFxcbiAgIOKKuSAgXFxuICAg4oq5ICBcXG4gICDiirkgIFxcbiAgIOKKuVwiLFxuICAgIFwibGlkXCI6IFwiODg3NDcyNzgzNjg5MTk6NTZAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSkdyallnRkVJeXJqN1FHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJKTy9LS2MzUXUwZHlhdVNHMlh3aTJkcXRlazJ6MWYrQWtmU1dDcDEzekEwPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkpPY0tJTEhPcUFvVHJKZlJVUXVkY05NMGVYUVpBUUd1YytDKzdBZUlMdzRoYWFRVmhWdHVaYlhuNjZBYUZGaHozU29MUi9jOFFwbWVZNGR0K0U0NkNBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkNoeEJ6TUk1VUtTQklTSmgyQ3ozelI5UmFPd1FWM1VoNTFDS3YvNlJ0anhUT054bzhWemZRb0hBaC8zREhqaDRpYWVBS1ZhT29ET2RWKzZ5U2VYWGp3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzMxNDM1MjAwNzo1NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE5OTE1OTE5LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRWtIXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFFa0guanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJjSzBmeXFzVHhtVHFFaDhxMERIbzlSajREOW5CdDB0a29ZRG42TDBLWE9BPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEzNTkxNzMwMDgsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDJdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


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


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
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
