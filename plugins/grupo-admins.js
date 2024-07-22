var handler = async (m, { conn, participants, groupMetadata, args, text }) => {

let pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './storage/logos/Menu2.jpg'
let groupAdmins = participants.filter(p => p.admin)
let listaAdmins = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n')
let owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'

if (!text) return conn.reply(m.chat, `🎌 *ادخل للسبب الخاص بك لستدعاء المشرفين*`, m, fake, )
if (text.length < 3) return conn.reply(m.chat, `🚩 *السبب لا يقل عن ثلاثة كلمات*`, m, fake, )
let mensaje = args.join` `
let yo = `*الرساله:* ${text}`
let texto = `${yo}

*━「* قائمه المشرفين *」━*

${listaAdmins}

⚠ ️] هذا الامر للحالات الطارئه فقط!!*`.trim()

conn.sendFile(m.chat, pp, 'error.jpg', texto, m, false, { mentions: [...groupAdmins.map(v => v.id), owner] })

}
handler.help = ['admins']
handler.tags = ['grupo']
handler.command = /^(admins|المشرفين|dmins)$/i

handler.group = true

export default handler
