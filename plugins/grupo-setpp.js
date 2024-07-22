var handler = async (m, { conn, usedPrefix, command, isAdmin, isBotAdmin }) => {

    let q = m.quoted ? m.quoted : m;
    let mime = (q.msg || q).mimetype || q.mediaType || '';

    if (!isAdmin) {
        return conn.reply(m.chat, '🛑 *يا معلم، أنت مش أدمن! مين اللي مسرحلك تعمل كده؟*', m, fake);
    }

    if (!isBotAdmin) {
        return conn.reply(m.chat, '🛑 *انا مش ادمن، ماقدرش أغير الصورة!*', m, fake);
    }

    if (/image/.test(mime)) {
        let img = await q.download();
        if (!img) return conn.reply(m.chat, '🎌 *رد على صورة يا نجم*', m, fake);
        await conn.updateProfilePicture(m.chat, img).then(_ => conn.reply(m.chat, '✅ *الصورة اتغيرت يا معلم!*', m, fake));
    } else {
        return conn.reply(m.chat, '🎌 *رد على صورة يا نجم*', m, fake);
    }

}
handler.help = ['setpp', 'setppgc', 'setppgroup'];
handler.tags = ['grupo'];
handler.command = /^setpp(group|grup|gc)|تغييرالصورة?$/i;

handler.group = true;
handler.admin = true;
handler.botAdmin = true;

export default handler;