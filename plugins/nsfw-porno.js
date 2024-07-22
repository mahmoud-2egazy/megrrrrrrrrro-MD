import fetch from 'node-fetch'

var handler = async (m, { conn, args, usedPrefix, command }) => {

    // لو ال NSFW مش شغال في الشات و الشات ده جروب، هيرمي غلطة ويقولك إن الأوامر دي مش مسموحة
    if (!db.data.chats[m.chat].nsfw && m.isGroup) throw '🎌 *الأوامر الـ NSFW مش مسموحة هنا*\n\nاستخدم !on nsfw لتفعيلها'
  
    // هنا بنجيب البيانات من API و بنحطها في json
    let res = await fetch('https://api.zahwazein.xyz/randomasupan/discord18?apikey=zenzkey_048b3b850d51')
    let json = await res.json()

    // بعدين بنبعت الملف اللي جبناه من ال API للشات
    conn.sendFile(m.chat, json.result, null, `🥵`, null, null, { viewOnce: true }, m)

}

// بنحدد التاجز والأوامر اللي الناس ممكن تستخدمها عشان يشغلوا الكود ده
handler.tags = ['nsfw']
handler.command = ['vporno', 'xxxvideo']
handler.help = ['vporno', 'xxxvideo']
handler.register = true

// وبنصدر الهاندلر ده عشان الناس تعرف تستخدمه
export default handler