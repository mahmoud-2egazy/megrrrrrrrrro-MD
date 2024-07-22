import uploadImage from '../lib/uploadImage.js'
import fetch from 'node-fetch'

var handler = async (m, {conn, text, usedPrefix, command}) => {

  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw '*⚠️ ياباشا، لازم ترد على صورة!*'
  let img = await q.download?.()
  let url = await uploadImage(img)
  let anu = await fetch(`https://api.lolhuman.xyz/api/read-qr?apikey=${lolkeysapi}&img=${url}`)
  let json = await anu.json()

  await m.reply(`*🧃 النص المكتوب في الكود QR هو:* ${json.result}`)
  
}

handler.help = ['readqr']
handler.tags = ['implementos']
handler.command = /^(readqr|اقرأ_qr)$/i

export default handler