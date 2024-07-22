var handler = async (m, { conn, text, isROwner, isOwner }) => {
    if (!isROwner && !isOwner) {
        return conn.reply(m.chat, '🎭 يا معلم، أنت مش أدمن! مين اللي مسرحلك تعمل كده؟', m, fake);
    }

    if (text) {
        await conn.groupUpdateDescription(m.chat, text)
        conn.reply(m.chat, `✅ *وصف الجروب اتعدل يا باشا*`, m, fake)
    } else {
        return conn.reply(m.chat, '🎌 *اكتب الوصف الجديد يا نجم*\n\nمثال, .تغيير_الوصف مرحبا بكم في الجروب', m, fake)
    }
}

handler.help = ['setdesc']
handler.tags = ['grupo']
handler.command = /^set(desk)?(desc)|تغيير_الوصف$/i

handler.botAdmin = true
handler.group = true
handler.admin = true

export default handler