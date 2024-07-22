/**
من فضلكم خليكم لطفاء وكويسين ومتغيروش حاجة في الكريدتس بتاعة GATABOT-MD، 
لو هتضيفوا بياناتكم أو كريدتس بتاعتكم مفيش مشكلة. بس بلاش تشيلوا الكريدتس الموجودة لـ GATABOT-MD، شكراً.
**/

import { cpus as _cpus, totalmem, freemem } from 'os'
import util from 'util'
import os from 'os'
import fetch from 'node-fetch'
import osu from 'node-os-utils'
import { performance } from 'perf_hooks'
import { sizeFormatter } from 'human-readable'

let format = sizeFormatter({
  std: 'JEDEC', // 'SI' (default) | 'IEC' | 'JEDEC'
  decimalPlaces: 2,
  keepTrailingZeroes: false,
  render: (literal, symbol) => `${literal} ${symbol}B`,
})

let handler = async (m, { conn, command, usedPrefix }) => {
  let picture = './storage/logos/Menu1.jpg'
  let name = await conn.getName(m.sender)
  let _uptime = process.uptime() * 1000
  let _muptime

  if (process.send) {
    process.send('uptime')
    _muptime = await new Promise(resolve => {
      process.once('message', resolve)
      setTimeout(resolve, 1000)
    }) * 1000
  }

  let fkontak = {
    "key": {
      "participants": "0@s.whatsapp.net",
      "remoteJid": "status@broadcast",
      "fromMe": false,
      "id": "Halo"
    },
    "message": {
      "contactMessage": {
        "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
      }
    },
    "participant": "0@s.whatsapp.net"
  }

  let pp = './src/fg_logo.jpg'
  let uptime = clockString(_uptime)
  let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
  let muptime = clockString(_muptime)
  const chats = Object.entries(conn.chats).filter(([id, data]) => id && data.isChats)
  const groupsIn = chats.filter(([id]) => id.endsWith('@g.us'))
  const used = process.memoryUsage()
  const cpus = _cpus().map(cpu => {
    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
    return cpu
  })

  const cpu = cpus.reduce((last, cpu, _, { length }) => {
    last.total += cpu.total
    last.speed += cpu.speed / length
    last.times.user += cpu.times.user
    last.times.nice += cpu.times.nice
    last.times.sys += cpu.times.sys
    last.times.idle += cpu.times.idle
    last.times.irq += cpu.times.irq
    return last
  }, {
    speed: 0,
    total: 0,
    times: {
      user: 0,
      nice: 0,
      sys: 0,
      idle: 0,
      irq: 0
    }
  })

  let old = performance.now()
  let neww = performance.now()
  let speed = neww - old
  let info = `┏━━━━❰･حالة البوت･❱━━━━
┃
┃أهلاً ${taguser}
┃
┃╍╍╍╍╍╍╍╍╍╍╍╍╍
┃
┃➢ سرعة : *${speed}* ms
┃➢ رام السيرفر:  ${format(totalmem() - freemem())} / ${format(totalmem())}
┃➢ منصة : ${os.platform()}
┃➢ نشط:  ${uptime}
┃➢ وضع: ${global.opts['self'] ? 'خاص - Private' : 'عام - Public'}
┃➢ مجموعات محظورة: ${Object.entries(global.db.data.users).filter(user => user[1].banned).length} 
┃➢ مستخدمين محظورين: ${Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned).length} 
┃➢ عدد المستخدمين الكلي: ${Object.keys(global.db.data.users).length} 
┃
┗━━━━━━━━━━━━━`.trim()

  conn.sendFile(m.chat, picture, 'curiosity.jpg', info, fkontak, m)
}

handler.help = ['estado']
handler.tags = ['main']
handler.command = ['ولاية', 'uptime', 'estado']
handler.register = true
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}