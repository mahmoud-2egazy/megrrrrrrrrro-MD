import { prepareWAMessageMedia, generateWAMessageFromContent, getDevice } from '@whiskeysockets/baileys';

let handler = async (m, { conn, args, usedPrefix, command }) => {
    const images = ['https://telegra.ph/file/905e3a17e33a046ccadeb.jpg', 'https://telegra.ph/file/87a1a8aa21442cfd02f51.jpg', 'https://telegra.ph/file/66977b2c35e28a75c8cb0.jpg', 'https://telegra.ph/file/dd361573a94ac738dd2dd.jpg'];
    const randomImage = images[Math.floor(Math.random() * images.length)];
    var messa = await prepareWAMessageMedia({ image: { url: randomImage } }, { upload: conn.waUploadToServer });
    const taguser = m.pushName || m.mentionedJid[0] || m.sender; // تعيين المتغير taguser

    conn.relayMessage(m.chat, {
        viewOnceMessage: {
            message: {
                interactiveMessage: {
                    header: {
                  hasMediaAttachment: true,
                imageMessage: messa.imageMessage,
                         },
                    body: {
                        text: `*✧────[ 𝑾𝑬𝑳𝑪𝑶𝑴𝑬 ]────✧*\n> *🤴🏻 المطور :* 𝑬𝐿𝑻𝑨𝑹𝐵𝑶𝑶*\n> *✅ الاصدار :* {1.2.0}\n> *🎳 البادئة :* *{•}*\n> *مرحبا بك يا* ${taguser}\n> *لاستخدام البوت ومعرفة المميزات* \n> *اضغط على الزر بالأسفل*\n*✧────[𝐁𝐎𝐓_𝐓𝐀𝐑𝐁𝐎𝐎]───✧*\n\n> *افتح القائمة بواسطة الزر🔘*\n\n *Copyright©* 2024 Mahmoud Al Tarboo.`
                    },
                    nativeFlowMessage: {
                        buttons: [
                            {
                                name: 'single_select',
                                buttonParamsJson: JSON.stringify({
                                    title: '『』CLICK《',
                                    sections: [
                                        {
                                            title: '『』CLICK《',
                                            highlight_label: '❬ 𝒕𝒂𝒓𝒃𝒐𝒐 𝒐𝒘𝒏𝒆𝒓 ❭ ',
                                            rows: [
                                                {
                                                    header: '『』OWNER《',
                                                    title: '⌬ ❛╏المطور',
                                                    description: 'يرسل معلومات المطور',
                                                    id: '.المطور'
                                                },
                                                {
                                                    header: '『』PRIVACY《',
                                                    title: '⌬ الاستخدام والخصوصية╏',
                                                    description: 'القوانين وخصوصية الاستخدام',
                                                    id: '.الاستخدام'
                                                },
                                                {
                                                    header: 'REBORT',
                                                    title: '⌬ ابلاغ ❛╏المطور',
                                                    description: 'ابلغ عن مشكلة للمطور',
                                                    id: '.بلاغ'
                                                },
                                                {
                                                    header: 'LIST OF COMMANDS ',
                                                    title: '⌬ ❛╏قائمة الاوامر ',
                                                    description: 'يرسل لك اقسام اوامر البوت',
                                                    id: '.مهام'
                                                }
                                            ]
                                        }
                                    ]
                                }),
                                messageParamsJson: ''
                            },
                            {
                                name: 'quick_reply',
                                buttonParamsJson: JSON.stringify({
                                    display_text: '『』OWNER《',
                                    id: '.المطور'
                                })
                            },
                            {
                                name: 'cta_url',
                                buttonParamsJson: JSON.stringify({
                                    display_text: '『』Support group《',
                                    url: 'https://chat.whatsapp.com/HTAcYFJ19sC07ykgnKqBzp',
                                    merchant_url: 'https://chat.whatsapp.com/HTAcYFJ19sC07ykgnKqBzp'
                                })
                            }
                        ]
                    }
                }
            }
        }
    }, {});
}

handler.help = ['info']
handler.tags = ['main']
handler.command = ['أوامر', 'اوامر', 'الاوامر', 'ألاوامر', 'menu', 'Menu']

export default handler;