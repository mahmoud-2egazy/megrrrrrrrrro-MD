//import db from '../lib/database.js'

const xpperdiamond = 350 
let handler = async (m, { conn, command, args }) => {
  let count = command.replace(/^buy/i, '')
  count = count ? /all/i.test(count) ? Math.floor(global.db.data.users[m.sender].exp / xpperdiamond) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
  count = Math.max(1, count)
  if (global.db.data.users[m.sender].exp >= xpperdiamond * count) {
    global.db.data.users[m.sender].exp -= xpperdiamond * count
    global.db.data.users[m.sender].diamond += count
    conn.reply(m.chat, `
┌─「 *فاتورة الشراء* 」
‣ *الكمية المشتراة* : + ${count}💎 
‣ *النقص* : -${xpperdiamond * count} XP
└──────────────`, m)
  } else conn.reply(m.chat, `❎ معذرة، انت ماعندكش كفاية *XP* لشراء *${count}* الماس\n\n تقدر تجمع *XP* باستخدام الأوامر 💎 في *الألعاب والقائمة ؛ الاقتصاد*`, m)
}
handler.help = ['buy', 'buyall']
handler.tags = ['econ']
handler.command = ['البنك', 'بنك'] 

handler.disabled = false

export default handler