import { prepareWAMessageMedia, generateWAMessageFromContent, getDevice } from '@whiskeysockets/baileys';

let handler = async (m, { conn, args, usedPrefix, command }) => {
    const images = [
        'https://telegra.ph/file/905e3a17e33a046ccadeb.jpg',
        'https://telegra.ph/file/87a1a8aa21442cfd02f51.jpg',
        'https://telegra.ph/file/66977b2c35e28a75c8cb0.jpg',
        'https://telegra.ph/file/dd361573a94ac738dd2dd.jpg'
    ];

    const randomImage = images[Math.floor(Math.random() * images.length)];
    var messa = await prepareWAMessageMedia({ image: { url: randomImage } }, { upload: conn.waUploadToServer });
    const taguser = m.pushName || m.mentionedJid[0] || m.sender; // تعيين المتغير taguser

    conn.relayMessage(m.chat, {
        viewOnceMessage: {
            message: {
                interactiveMessage: {
                    header: {
                        hasMediaAttachment: true,
                        imageMessage: messa.imageMessage
                    },
                    body: {
                        text: `*✧────[ 𝑾𝑬𝑳𝑪𝑶𝑴𝑬 ]────✧*\n> *🤴🏻 المطور :* 𝑬𝐿𝑇𝑨𝑹𝐵𝑶𝑶*\n> *✅ الاصدار :* {1.2.0}\n> *🎳 البادئة :* *{•}*\n> *مرحبا بك يا* ${taguser}\n> *لاستخدام البوت ومعرفة المميزات*\n> *اضغط على الزر بالأسفل*\n*✧────[𝐁𝐎𝐓_𝐓𝐀𝐑𝐁𝐎𝐎]───✧*\n\n> *افتح القائمة بواسطة الزر🔘*\n\n *Copyright©* 2024 Mahmoud Al Tarboo.`
                    },
                    nativeFlowMessage: {
                        buttons: [
                            {
                                name: 'single_select',
                                buttonParamsJson: JSON.stringify({
                                    title: '『』CLICK《',
                                    sections: [
                                        {
                                            title: '『』Menu All《',
                                            highlight_label: '❬ 𝒃𝒐𝒕 𝒕𝒂𝒓𝒃𝒐𝒐 ❭',
                                            rows: [
                                                {
                                                    header: '『』OWNER《 👑',
                                                    title: '⌬ ❛╏اوامر المطور',
                                                    description: 'خاص بالمطور فقط',
                                                    id: '.اوامر-المطور'
                                                },
                                                {
                                                    header: '『』Downloads《 📥',
                                                    title: '⌬ ❛╏اوامر التنزيلات',
                                                    description: 'خاص بالتنزيلات فقط',
                                                    id: '.اوامر-التنزيلات'
                                                },
                                                {
                                                    header: '『』Group《',
                                                    title: '⌬ ❛╏اوامر الرومات',
                                                    description: 'خاص بالرومات فقط',
                                                    id: '.اوامر-الرومات'
                                                },
                                                {
                                                    header: '『』Design《',
                                                    title: '⌬ ❛╏اوامر التصميم',
                                                    description: 'خاص بأوامر التحويل',
                                                    id: '.اوامر-التصميم'
                                                },
                                                {
                                                    header: '『』Audios《‍♂',
                                                    title: '⌬ ❛╏اوامر الصوت',
                                                    description: 'خاص بأوامر تغيير الصوت',
                                                    id: '.اوامر-الصوت'
                                                },
                                                {
                                                    header: '『』Games《',
                                                    title: '⌬ ❛╏اوامر الالعاب',
                                                    description: 'خاص بالجيمز',
                                                    id: '.اوامر-الالعاب'
                                                },
                                                {
                                                    header: '『』Entertainment《',
                                                    title: '⌬ ❛╏اوامر الترفيه',
                                                    description: 'خاص بأوامر الاسئلة',
                                                    id: '.اوامر-الترفيه'
                                                },
                                                {
                                                    header: '『』Fun《',
                                                    title: '⌬ ❛╏اوامر المرح',
                                                    description: 'كل ما هو مسلي',
                                                    id: '.اوامر-المرح'
                                                },
                                                {
                                                    header: '『』Nicknames《',
                                                    title: '⌬ ❛╏اوامر الالقاب',
                                                    description: 'خاص بلألقاب',
                                                    id: '.اوامر-الألقاب'
                                                },
                                                {
                                                    header: '『』AI《',
                                                    title: '⌬ ❛╏اوامر الذكاء',
                                                    description: 'خاص بالذكاء الاصطناعي',
                                                    id: '.اوامر-الذكاء'
                                                },
                                                {
                                                    header: '『』Menu All《',
                                                    title: '⌬ ❛╏كل الاوامر',
                                                    description: 'جميع اوامر البوت',
                                                    id: '.كل-الاوامر'
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
                                    display_text: 'مجموعه الدعم👥',
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

handler.help = ['info'];
handler.tags = ['main'];
handler.command = ['مهام', 'ty', 'er', 'youssef', 'ui', 'op'];

export default handler;