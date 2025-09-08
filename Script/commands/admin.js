module.exports.config = {
  name: "admin",
  version: "1.0.2",
  hasPermssion: 0,
  credits: "aminulsordar",
  description: "Bot operator information",
  commandCategory: "info",
  cooldowns: 1
};

module.exports.languages = {
  en: {
    message: `    THE BOT OPERATOR
             
╔══❀══◄░❀░►══❀══╗
 -NAME ➪ ༒ 𝐂𝐄𝐎-⸙ frnwot-❯⸙๏

 -Gender ➪ Male 

 -Age ➪ 17

 -Work ➪ Student

 -Game ➪ mostly i tried all

 -Facebook ➪ https://www.facebook.com/100094924471568

 -LC ➪ "Hey, I say I love you because I do" 

 -Page/acc ➪ https://www.facebook.com/share/17U7cQkGME/

 -FIRE ➪ ️frnwot (GitHub)

 -Mail ➪ Inbox me if needed

╚══❀══◄░❀░►══❀══╝`
  },

  vi: {
    message: `    NGƯỜI ĐIỀU HÀNH BOT
             
╔══❀══◄░❀░►══❀══╗
 -Tên ➪ ༒ 𝐂𝐄𝐎-⸙ frnwot-❯⸙๏

 -Giới tính ➪ Nam 

 -Tuổi ➪ 17

 -Tình trạng ➪ Độc thân

 -Công việc ➪ Học sinh

 -Game yêu thích ➪ tried all

 -Facebook ➪ https://www.facebook.com/100094924471568

 -LC ➪ "Nói yêu là vì thực sự yêu" 🥱

 -Trang ➪ https://www.facebook.com/share/17U7cQkGME/

 -FIRE ➪ ️༒ frnwot-❯⸙๏

 -Mail ➪ Inbox nếu cần

╚══❀══◄░❀░►══❀══╝`
  }
};

module.exports.run = async function ({ api, event, getText }) {
  return api.sendMessage(getText("message"), event.threadID, event.messageID);
};
