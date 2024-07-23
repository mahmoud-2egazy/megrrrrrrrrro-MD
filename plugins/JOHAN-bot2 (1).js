let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender];
    let name = conn.getName(m.sender);
    let taguser = '@' + m.sender.split("@s.whatsapp.net")[0];
    let message = `> *مرحبا بك انا بوت واتساب ادعي تربو يمكنك طلب قائمه الاوامر من خلال امر  *.اوامر* انا هنا لأساعدك في ادارة مجموعتك وموجود للإستخدام الشخصي ايضاً استطيع ان اصنع ملصقات واحول الصور لملصق والعكس صحيح واحمي مجموعتك من المزعجين والكثير من المميزات الاخري واذا كنت بحاجة الي فهم البوت الرجاء ان تكلم سيدي*
 
 مجموعة الدعم
> *https://chat.whatsapp.com/HTAcYFJ19sC07ykgnKqBzp*`;
    

    conn.sendFile(m.chat, 'https://telegra.ph/file/6c8064983cd7e01123262.jpg', 'video.mp4', message, m);
};

handler.customPrefix = /^(bot|بوت)$/i;
handler.command = new RegExp;

export default handler;
