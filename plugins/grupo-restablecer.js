/* كريدتوس لـ https://github.com/ALBERTO9883 */

const handler = async (m, {conn, isAdmin, isBotAdmin}) => {
  if (!isBotAdmin) {
    await conn.reply(m.chat, `🚫 *_مش هقدر أغير اللينك لأني مش أدمن في الجروب. يا ريت تخليني أدمن ونجرب تاني._*`, m);
    return;
  }
  
  const revoke = await conn.groupRevokeInvite(m.chat);
  await conn.reply(m.chat, `🔹️ *_تمام يا باشا، غيرت لينك الجروب مخصوص ليك._*\n♾ • اللينك الجديد اهو: ${'https://chat.whatsapp.com/' + revoke}`, m);
};

handler.command = ['رستر', 'تغيير_اللينك'];
handler.botAdmin = true;
handler.admin = true;
handler.group = true;

export default handler;