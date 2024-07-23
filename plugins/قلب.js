const handler = async (m, { conn, command, text }) => {
  const lovePercentage = Math.floor(Math.random() * 100);
  const isHighLove = lovePercentage >= 50;
  const loveMessages = [
    "💝"
  ];
  const notSoHighLoveMessages = [
    "❤️‍🔥",
  ];
  const loveDescription = isHighLove ? "💟" : "❤️";
  const getRandomMessage = (messages) => messages[Math.floor(Math.random() * messages.length)];
  const loveMessage = isHighLove ? getRandomMessage(loveMessages) : getRandomMessage(notSoHighLoveMessages);
  const response =`> *بـحــ❤️ـبك يـمجنـون*`
  async function loading() {
var hawemod = [
"اسمع",
     "حبيت اقولك",
  "انك",
  "شخص",
  "عظيم",
  "مطور بوت الـتربـو",
  "يحبك",
  "💜",
  "🖤",
  "🩶",
    "🤍",
      "🤎",
        "❤️‍🔥",
          "💞",
            "💓",
              "💘",
                "💝",
                  "💟",
                    "♥️",
                      "*بـحــ❤️ـبك يـمجنـون*"
]
   let { key } = await conn.sendMessage(m.chat, {text: `*❮ 🥰 ┇ امـوت فيك ياعـسل انـت*`, mentions: conn.parseMention(response)}, {quoted: m})
 for (let i = 0; i < hawemod.length; i++) {
   await new Promise(resolve => setTimeout(resolve, 1000)); 
   await conn.sendMessage(m.chat, {text: hawemod[i], edit: key, mentions: conn.parseMention(response)}, {quoted: m}); 
  }
  await conn.sendMessage(m.chat, {text: response, edit: key, mentions: conn.parseMention(response)}, {quoted: m});         
 }
loading()    
};
handler.help = ['love'];
handler.tags = ['fun'];
handler.command = /^(قلب|hrt)$/i;
export default handler;
