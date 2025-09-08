module.exports.config = {
	name: "info",
	version: "1.0.1", 
	hasPermssion: 0,
	credits: "AMINUL-SORDAR", //don't change the credits please
	description: "Admin and Bot info.",
	commandCategory: "info",
	cooldowns: 1,
	dependencies: 
	{
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"]
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Dhaka").format("『D/MM/YYYY』 【hh:mm:ss】");
var link = ["https://i.imgur.com/1QaosHO.jpg", 
            
            "https://i.imgur.com/1BurIt1.jpg", 
            
            "https://i.imgur.com/tUFeHX3.jpg",

"https://i.imgur.com/iS52fh5.jpg",
            
            "https://i.imgur.com/1QaosHO.jpg"];
  
var callback = () => api.sendMessage({body:`ADMIN AND BOT INFORMATION 
________________________________________

BOT NAME       : ${global.config.BOTNAME}

BOT ADMIN      : frnwot
AGE            : 17
ADDRESS        : Chattagram

_____________CONTACT_____________

FACEBOOK       : https://www.facebook.com/share/1FLjnAgh64/

BOT PREFIX     : ${global.config.PREFIX}
BOT OWNER      : frnwot

________________________________________

TYPE /admin 

➟ UPTIME

TODAY IS TIME : ${juswa} 

BOT IS RUNNING ${hours}:${minutes}:${seconds}.

THANKS FOR USING ${global.config.BOTNAME} 『🤖🖤』`,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.jpg")).on("close",() => callback());
   };
