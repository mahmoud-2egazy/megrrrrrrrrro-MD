import fetch from 'node-fetch'
import fg from 'api-dylux'

let handler = async (m, { conn, args, text, usedPrefix, command }) => {

  let chat = global.db.data.chats[m.chat]
  if (!chat.nsfw) throw `🚫 الجروب مش بيقبل محتوى +18\n\nعلشان تشغل الميزة دي اكتب\n*${usedPrefix}enable* nsfw`
  let user = global.db.data.users[m.sender].age
  if (user < 15) throw `😐 انت لسه صغير! تعال لما يبقى عندك أكتر من 15 سنة`
  if (!text) throw `✳️ عشان تدور اكتب\n📌 استخدم: *${usedPrefix + command} <بحث>*\n\nعشان تحمل من لينك استخدم:\n📌 استخدم: *${usedPrefix + command} <url>*`
    
  m.react('🥵') 
  if (text.includes('http://') || text.includes('https://')) {
    if (!text.includes('xnxx.com')) return m.reply(`❎ ادخل لينك من *xnxx.com*`)
    try {
      let xn = await fg.xnxxdl(text)
      conn.sendFile(m.chat, xn.result.files.high, xn.result.title + '.mp4', `
≡ *تحميل من xnxx*
 
🔸️ *📌 العنوان*: ${xn.result.title}
🔸️ *⌚ المدة*: ${xn.result.duration}
🔸️ *🎞 الجودة*: ${xn.result.quality}
      `.trim(), m, false, { asDocument: chat.useDocument })
      m.react(done)
    } catch (e) {
      m.reply(`🔴 حصل خطأ: حاول تاني بعدين`)
    }
  } else {
    try {
      let res = await fg.xnxxSearch(text)
      let ff = res.result.map((v, i) => `${i + 1}┃ *العنوان*: ${v.title}\n*اللينك:* ${v.link}\n`).join('\n') 
      if (res.status) m.reply(ff)
    } catch (e) {
      m.reply(`❌ حصل خطأ: جرب حاجة تانية`)
    }
  }
}

handler.help = ['xnxx'] 
handler.tags = ['nsfw']
handler.command = ['سككس', 'xnxxdl'] 
handler.diamond = 2
handler.premium = false

export default handler