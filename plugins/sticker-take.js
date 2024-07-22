import fetch from "node-fetch"

let handler = async (m, {
    command,
    usedPrefix,
    conn,
    text,
    args
}) => {

    let lister = [
        "search", // ده عشان نبحث
        "video"   // ده عشان نجيب فيديو
    ]

    let [feature, inputs, inputs_, inputs__, inputs___] = text.split("|")
    
    if (!lister.includes(feature)) {
        return m.reply("*مثال:*\n.animeiat search|naruto\n\n*اختار النوع اللي موجود*\n" + lister.map((v, index) => "  ○ " + v).join('\n'))
    }

    if (lister.includes(feature)) {

        if (feature == "search") {
            if (!inputs) return m.reply("الرجاء إدخال اسم الأنمي اللي عايز تبحث عنه")
            await m.reply("انتظر شوية...")
            let outs = await searchAnime(inputs)
            let teks = outs.map((anime, index) => {
                return `*[ ${index + 1} ]*
*العنوان:* ${anime.anime_name}
*الرقم:* ${anime.id}
*السلاوج:* ${anime.slug}
*القصة:* ${anime.story}
*أسماء تانية:* ${anime.other_names}
*عدد الحلقات:* ${anime.total_episodes}
*الفئة العمرية:* ${anime.age}
*النوع:* ${anime.type}
*الحالة:* ${anime.status}
*مسار البوستر:* ${anime.poster_path}
*منشور بواسطة:* ${anime.published}
*تاريخ النشر:* ${anime.published_at}
*السنة:* ${anime.year_id}
*تم إنشاؤه في:* ${anime.created_at}
*تحديث في:* ${anime.updated_at}
   `.trim()
            }).filter(v => v).join("\n\n________________________\n\n")
            await m.reply(teks)
        }

        if (feature == "video") {
            if (!inputs) return m.reply("الرجاء إدخال سلاوج الحلقة")
            await m.reply("انتظر شوية...")
            let outs = await fetchAnime(inputs, inputs_)
            await m.reply(outs)
        }

    }
}

handler.help = ["animeiat type query"]
handler.tags = ["internet"]
handler.command = /^(animeiat)$/i
export default handler

async function searchAnime(query) {
    try {
        const response = await fetch(`https://api.animeiat.co/v1/anime?q=${query}`)
        const data = await response.json()
        return data.data
    } catch (error) {
        console.error('حصل خطأ:', error)
        return null
    }
}

async function fetchAnime(query, episodes = 1) {
  try {
    const response = await fetch("https://api.animeiat.co/v1/anime?q=" + query);
    const sear = await response.json();
    const response1 = await fetch("https://api.animeiat.co/v1/episode/" + sear.data[0].slug + "-episode-" + episodes);
    const data = await response1.json();
    const slug = data.data.video.slug;
    const response2 = await fetch("https://api.animeiat.co/v1/video/" + slug);
    const data2 = await response2.json();
    const source = data2.data.sources;
    
    const teks = source.map((anime, index) => {
      return `*[ ${index + 1} ]*
*الجودة:* ${anime.quality}
*العلامة:* ${anime.label}
*الرابط:* ${anime.file}
   `.trim();
    }).filter(v => v).join("\n\n________________________\n\n");
    
    return teks;
  } catch (error) {
    console.error(error);
    return null
  }
}