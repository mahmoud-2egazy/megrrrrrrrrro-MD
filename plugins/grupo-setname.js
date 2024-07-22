var handler = async (m, { conn, text, isROwner, isOwner }) => {
    if (!isROwner && !isOwner) {
        return conn.reply(m.chat, '🎭 يا معلم، أنت مش أدمن! مين اللي مسرحلك تعمل كده؟', m, fake);
    }

    if (!text) {
        return conn.reply(m.chat, '🎌 *اكتب اسم الجروب الجديد يا نجم*\n\nمثال, تغيير_الاسم TARBOO-BOT', m, fake)
    }

    await conn.groupUpdateSubject(m.chat, text)
    conn.reply(m.chat, `🚩 *اسم الجروب الجديد هو ${text} يا باشا*`, m, fake)
}

handler.help = ['setname']
handler.tags = ['grupo']
handler.command = /^تغيير_الاسم$/i

handler.botAdmin = true
handler.group = true
handler.admin = true

export default handler