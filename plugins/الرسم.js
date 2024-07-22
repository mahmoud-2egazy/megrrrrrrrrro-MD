import fetch from 'node-fetch';

const handler = async (m, {conn, text, usedPrefix, command}) => {
  if (!text) throw `*[❗] يا باشا، إنت نسيت تكتب الاسم اللي عايز ترسمه*\n\n*—◉ مثال:*\n*◉ ${usedPrefix + command} anime*\n*◉ ${usedPrefix + command} miku*`;

  await conn.sendMessage(m.chat, {text: '*[❗] استنى شوية يا زعيم.⌛*'}, {quoted: m});

  try {
    const tiores1 = await fetch(`https://vihangayt.me/tools/imagine?q=${text}`);
    const json1 = await tiores1.json();
    await conn.sendMessage(m.chat, {image: {url: json1.data}}, {quoted: m});
  } catch {  
    console.log('[❗] حصلت مشكلة في الـ API الأولانية من DALL-E.');  
    
    try {
      const tiores2 = await conn.getFile(`https://vihangayt.me/tools/midjourney?q=${text}`);
      await conn.sendMessage(m.chat, {image: {url: tiores2.data}}, {quoted: m});
    } catch {
      console.log('[❗] حصلت مشكلة في الـ API التانية من DALL-E.');
      
      try {
        const tiores3 = await fetch(`https://vihangayt.me/tools/lexicaart?q=${text}`);
        const json3 = await tiores3.json();
        await conn.sendMessage(m.chat, {image: {url: json3.data[0].images[0].url}}, {quoted: m});
      } catch {
        console.log('[❗] حصلت مشكلة في الـ API التالتة من DALL-E.');
        
        try {
          const tiores4 = await conn.getFile(`https://api.lolhuman.xyz/api/dall-e?apikey=${lolkeysapi}&text=${text}`);
          await conn.sendMessage(m.chat, {image: {url: tiores4.data}}, {quoted: m});
        } catch {
          console.log('[❗] حصلت مشكلة في كل الـ APIs.');
          throw `*[❗] يا معلم، مفيش أي نتيجة طلعت. جرب تاني.*`;
        }
      }
    }
  }
};

handler.command = ['dall-e', 'dalle', 'رسم', 'الرسم', 'ارسم', 'a-img', 'aimg', 'imagine'];

export default handler;