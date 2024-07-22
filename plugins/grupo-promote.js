var handler = async (m, { conn, usedPrefix, command, text }) => {

if (isNaN(text) && !text.match(/@/g)){
	
} else if (isNaN(text)) {
var number = text.split`@`[1]
} else if (!isNaN(text)) {
var number = text
}

if (!text && !m.quoted) return conn.reply(m.chat, `🎌 *يا عم، حدد الشخص اللي عايز ترفعه أدمن أو رد على رسالته عشان نعرف مين*`, m, fake)
if (number.length > 13 || (number.length < 11 && number.length > 0)) return conn.reply(m.chat, `🚩 *رقم غير صحيح، يا عم اكتب رقم مظبوط! هي ناقصة؟*`, m, fake)
  
try {
if (text) {
var user = number + '@s.whatsapp.net'
} else if (m.quoted.sender) {
var user = m.quoted.sender
} else if (m.mentionedJid) {
var user = number + '@s.whatsapp.net'
} 
} catch (e) {
} finally {
conn.groupParticipantsUpdate(m.chat, [user], 'promote')
conn.reply(m.chat, `✅ *بقى زعيم، هوب هوب! ده دلوقتي عنده سلطات سوبر!*`, m, fake)
}

}

handler.fail = (m) => {
    conn.reply(m.chat, `❌ *يا نهار أبيض! أنا مش أدمن في الجروب ده، مش قادر أعمل حاجة*`, m, fake)
}

handler.help = ['promote']
handler.tags = ['grupo']
handler.command = ['رفع', 'ترقيه', 'ارفعو']

handler.group = true
handler.admin = true
handler.botAdmin = true

export default handler