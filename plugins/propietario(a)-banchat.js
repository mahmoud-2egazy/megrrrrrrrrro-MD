let handler = async (m) => {
global.db.data.chats[m.chat].isBanned = true
m.reply(`*[🔒] هذه الدردشة ليس لديها إذن لاستخدامي حتى يتم رفع الحظر عنها*`)
}
handler.help = ['banchat']
handler.tags = ['owner']
handler.command = /^بان_شات$/i
handler.botAdmin = true
handler.admin = true 
handler.group = true

export default handler
