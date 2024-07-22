import fetch from 'node-fetch'
import axios from 'axios'

let handler = async (m, { conn, usedPrefix, command }) => {
	
	if (!global.db.data.chats[m.chat].nsfw) throw `🚫 الجروب مش بيقبل محتوى +18\n\nعلشان تشغل الميزة دي اكتب \n*${usedPrefix}enable* nsfw`
    let user = global.db.data.users[m.sender].age
    if (user < 15) throw m.reply(`😐 انت لسه عيل صغير! تعال لما يبقى عندك أكتر من 15 سنة`) 
   
m.react('🥵') 
let type = (command).toLowerCase()

switch (type) {

case 'ass':
case 'culos':
    let as = await conn.getFile(global.API('fgmods', '/api/nsfw/ass', { }, 'apikey'))
    conn.sendFile(m.chat, as.data, 'img.jpg', `✅ صورة عشوائية ${command}`, m)
    m.react(xmoji) 
break

case 'boobs':
case 'boobies':
   let xb = await conn.getFile(global.API('fgmods', '/api/nsfw/boobs', { }, 'apikey'))
   conn.sendFile(m.chat, xb.data, 'img.jpg', `✅ صورة عشوائية ${command}`, m)
   m.react(xmoji) 
break

case 'pussy':
   let xp = await conn.getFile(global.API('fgmods', '/api/nsfw/pussy', { }, 'apikey'))
   conn.sendFile(m.chat, xp.data, 'img.jpg', `✅ صورة عشوائية ${command}`, m)
   m.react(xmoji) 
break

case 'lesbians':
case 'lesbian':
   let les = await conn.getFile(global.API('fgmods', '/api/nsfw/lesbian', { }, 'apikey'))
   conn.sendFile(m.chat, les.data, 'img.jpg', `✅ صورة عشوائية ${command}`, m)
   m.react(xmoji) 
break

//case 'pack':
case 'cosplay':
	     let img = await conn.getFile(global.API('fgmods', '/api/nsfw/cosplay', {}, 'apikey'))
        conn.sendFile(m.chat, img.data, 'img.jpg', `✅ نتيجة 🤭`, m)
	     m.react(xmoji) 
	break


default:
 }
}
handler.help = ['ass', 'boobs', 'lesbian', 'pussy']
handler.tags = ['nsfw']
handler.command = /^(ass|culos|boobs|boobies|lesbian|lesbians|pussy|cosplay)$/i
handler.diamond = true
handler.register = true
handler.group = true

export default handler