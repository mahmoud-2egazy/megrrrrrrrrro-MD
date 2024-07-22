import ws from 'ws';
async function handler(m, { conn: _envio, usedPrefix }) {
  // بنجيب كل اليوزرات اللي متصلة وكمان الـ WebSocket بتاعهم شغال
  const users = [...new Set([...global.conns.filter((conn) => conn.user && conn.ws.socket && conn.ws.socket.readyState !== ws.CLOSED).map((conn) => conn)])];
  
  // دالة لتحويل المدة من ميللي ثانية لأيام وساعات ودقايق وثواني
  function convertirMsADiasHorasMinutosSegundos(ms) {
    var segundos = Math.floor(ms / 1000);
    var minutos = Math.floor(segundos / 60);
    var horas = Math.floor(minutos / 60);
    var días = Math.floor(horas / 24);

    segundos %= 60;
    minutos %= 60;
    horas %= 24;

    var resultado = "";
    if (días !== 0) {
      resultado += días + " أيام، ";
    }
    if (horas !== 0) {
      resultado += horas + " ساعات، ";
    }
    if (minutos !== 0) {
      resultado += minutos + " دقايق، ";
    }
    if (segundos !== 0) {
      resultado += segundos + " ثواني";
    }

    return resultado;
  }

  // بنعمل رسالة لكل يوزر مع بياناته
  const message = users.map((v, index) => `*${index + 1}.-* @${v.user.jid.replace(/[^0-9]/g, '')}\n*🥏 wa.me/${v.user.jid.replace(/[^0-9]/g, '')}?text=${usedPrefix}estado\n*الاسم:* ${v.user.name || '-'}\n*مدة التشغيل:* ${ v.uptime ? convertirMsADiasHorasMinutosSegundos(Date.now() - v.uptime) : "غير معروف"}`).join('\n\n');
  
  // إذا مافيش أي سب بوتس، هتطلع رسالة تنبه بعدم وجودهم
  const replyMessage = message.length === 0 ? '*⚠️ مافيش سب بوتس شغالة دلوقتي. 🔰 ارجع تاني بعدين.*' : message;
  
  const totalUsers = users.length;
  const responseMessage = `${replyMessage.trim()}`.trim();
  
  // بنرد بالرسالة ونوضح عدد السب بوتس المتصلة
  await m.reply(`*🚀 دي قائمة السب بوتس اللي شغالة دلوقتي*\n\nعدد السب بوتس المتصلة: ${totalUsers || '0'}`)
  await _envio.sendMessage(m.chat, {text: responseMessage, mentions: _envio.parseMention(responseMessage)}, {quoted: m});
}
handler.command = handler.help = ['listjadibot', 'bots', 'subsbots'];
handler.tags = ['jadibot'];
export default handler;