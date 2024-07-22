import fs from 'fs'
let handler = async (m, { conn, text }) => {
    const delay = time => new Promise(res => setTimeout(res, time))
    let chats = Object.entries(conn.chats).filter(([jid, chat]) => !jid.endsWith('@g.us') && chat.isChats).map(v => v[0])
    if (!text) throw '*⚠️ يسطا اكتب النص اللي عايز تبعته بقى!*'
    let cc = text ? m : m.quoted ? await m.getQuotedObj() : false || m
    let teks = text ? text : cc.text
    for (let i of chats) {
        await delay(500)
        conn.relayMessage(i,
            {
                liveLocationMessage: {
                    degreesLatitude: 35.685506276233525,
                    degreesLongitude: 139.75270667105852,
                    accuracyInMeters: 0,
                    degreesClockwiseFromMagneticNorth: 2,
                    caption: '––––––『 *البث* 』––––––\n\n' + teks + '\n\n*💌 ده إعلان رسمي*',
                    sequenceNumber: 2,
                    timeOffset: 3,
                    contextInfo: m,
                }
            }, {}).catch(_ => _)
    }
    m.reply(`*📑 الرسالة اتبعتت لـ ${chats.length} شات خاص*\n\n*🔔 ملحوظة: ممكن ما تتبعتش لكل الشاتات*`)
}
handler.help = ['broadcastchats', 'bcchats'].map(v => v + ' <نص>')
handler.tags = ['owner']
handler.command = /^(broadcastchats?|bcc(hats?)?)$/i
handler.rowner = true
export default handler