import fetch from "node-fetch";

let handler = async (m, {
    conn,
    args,
    usedPrefix,
    text,
    command
}) => {
    if (!text || !text.startsWith("+")) return m.reply("*يا عم، إنت ناسي الرقم ولا إيه؟ 🐦❤️* \n*مثال :*.تلوكولر +201225655220")
    await conn.sendMessage(m.chat, {
        react: {
            text: `🔍`,
            key: m.key
        }
    })
    await conn.sendMessage(m.chat, {
        react: {
            text: `📞`,
            key: m.key
        }
    })
    const anu = await fetch(`https://outrageous-fish-dress.cyclic.app/api/other/truecaller?number=${args[0]}`)
    let api = await anu.json()
    const msg = `*${m.pushName} بيانات الرقم في تلوكولر مش بتتوه*

📝 *الاسم:* ${api.data.data[0].name}
🔒 *صلاحيات:* ${api.data.data[0].access}
⭐️ *التقييم:* ${api.data.data[0].score}
📞 *E164:* ${api.data.data[0].phones[0].e164Format}
🌍 *محلي:* ${api.data.data[0].phones[0].nationalFormat}
🌐 *كود دولي:* ${api.data.data[0].phones[0].dialingCode}
🌍 *كود البلد:* ${api.data.data[0].phones[0].countryCode}
⏰ *منطقة زمنية:* ${api.data.data[0].addresses[0].timeZone}
🏢 *شركة:* ${api.data.data[0].phones[0].carrier}
📱 *النوع:* ${api.data.data[0].phones[0].type}

*${wm}*`
    const truei = await m.reply(msg)
    await conn.sendMessage(m.chat, {
        react: {
            text: `📋`,
            key: truei.key
        }
    })
    await conn.sendMessage(m.chat, {
        react: {
            text: `✅`,
            key: m.key
        }
    })
}
handler.help = ["ceknomor", "truecaller"]
handler.command = ["numberbook", "تلوكولر"]
handler.tags = ["tools"]
export default handler