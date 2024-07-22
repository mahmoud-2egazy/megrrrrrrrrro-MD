import { toAudio } from '../lib/converter.js';
let handler = async (_0x2a59c, {
  conn: _0x2d5618,
  usedPrefix: _0x43b896,
  command: _0x4178d6
}) => {
  let _0x38d8b4 = _0x2a59c.quoted ? _0x2a59c.quoted : _0x2a59c;
  if (!_0x2a59c.quoted) {
    throw "*رد عــلى فــيديـو !*";
  }
  let _0x50f0c2 = await _0x38d8b4.download?.();
  if (!_0x50f0c2) {
    throw "*حدث خطأ*";
  }
  let _0x5bc774 = await toAudio(_0x50f0c2, "mp4");
  if (!_0x5bc774.data) {
    throw "*فشلت عملية التحويل*";
  }
  _0x2d5618.sendFile(_0x2a59c.chat, _0x5bc774.data, 'audio.mp3', '', _0x2a59c, null, {
    'mimetype': "audio/mp4"
  });
};
handler.help = ["tomp3"];
handler.tags = ['fun'];
handler.command = ["لصوت"];
export default handler;