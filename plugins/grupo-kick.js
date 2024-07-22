var handler = async (m, { conn, participants, usedPrefix, command }) => {

    // التحقق إذا كان البوت أدمن
    const groupMetadata = await conn.groupMetadata(m.chat)
    const botIsAdmin = groupMetadata.participants.find(participant => participant.id === conn.user.jid && participant.isAdmin)

    if (!botIsAdmin) {
        return conn.reply(m.chat, '🙃 مش قادر أطرد حد لأني مش أدمن في الجروب ده', m)
    }

    if (!m.mentionedJid[0] && !m.quoted) {
        return conn.reply(m.chat, '🎌 *يا عم، حدد الشخص اللي عايز تطرده أو رد على رسالته عشان نعرف مين*', m)
    }

    let user = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender

    await conn.groupParticipantsUpdate(m.chat, [user], 'remove')
    conn.reply(m.chat, 'يا معلم، خدلك تذكرة طيران برة الجروب! ✈️', m)
}

handler.help = ['kick']
handler.tags = ['grupo']
handler.command = /^(kick|طرد|هش|sacar|براا)$/i

handler.admin = true
handler.group = true
handler.botAdmin = true

export default handler