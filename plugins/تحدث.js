(function (_0x5c6cc0, _0x1689b6) {
  const _0x3a2369 = _0x5c6cc0();
  while (true) {
    try {
      const _0x420684 = parseInt(_0x3b52(336, -0xb2)) / 0x1 + parseInt(_0x3b52(297, -0xd3)) / 0x2 + -parseInt(_0x3b52(268, 0x261)) / 0x3 * (parseInt(_0x3b52(322, -0x5a)) / 0x4) + -parseInt(_0x3b52(282, 0x279)) / 0x5 + parseInt(_0x3b52(278, -0x2a6)) / 0x6 * (parseInt(_0x3b52(280, 0x26b)) / 0x7) + -parseInt(_0x3b52(327, -0x2a4)) / 0x8 * (parseInt(_0x3b52(286, -0xbd)) / 0x9) + parseInt(_0x3b52(313, 0x2cb)) / 0xa * (parseInt(_0x3b52(267, -0xd0)) / 0xb);
      if (_0x420684 === _0x1689b6) {
        break;
      } else {
        _0x3a2369.push(_0x3a2369.shift());
      }
    } catch (_0x274d1b) {
      _0x3a2369.push(_0x3a2369.shift());
    }
  }
})(_0x5355, 0xc3eb7);
function _0x53209c(_0x43ef41, _0x390e0e, _0x722cd6, _0xa76be9, _0x2cd24b) {
  return _0x3b52(_0x43ef41 - 0x34c, _0x2cd24b);
}
function _0x1e6c98(_0x57bdc9, _0x4ee71d, _0x646fe6, _0x807e1d, _0xc0ba8e) {
  return _0x3b52(_0x646fe6 - 0x2e1, _0x807e1d);
}
import _0x23b33e from 'node-fetch';
import _0xd46ca2 from 'node-gtts';
import { readFileSync, unlinkSync } from 'fs';
import { join } from 'path';
function _0x3b52(_0x2a470d, _0xfbc92f) {
  const _0x535597 = _0x5355();
  _0x3b52 = function (_0x3b5290, _0x26aae6) {
    _0x3b5290 = _0x3b5290 - 0x108;
    let _0x2474cd = _0x535597[_0x3b5290];
    return _0x2474cd;
  };
  return _0x3b52(_0x2a470d, _0xfbc92f);
}
import 'axios';
import _0x55f217 from '@vitalets/google-translate-api';
import { Configuration, OpenAIApi } from 'openai';
const configuration = new Configuration({
  'organization': global.openai_org_id,
  'apiKey': global.openai_key
});
const openaiii = new OpenAIApi(configuration);
function _0x8b740(_0x251073, _0x3ad28b, _0x5f0d73, _0xae697e, _0x3dbc99) {
  return _0x3b52(_0xae697e - 0x2b4, _0x251073);
}
function _0x5355() {
  const _0x47cf70 = ["Bearer ", 'chatgpt', 'respon', 'error', 'https://api.akuari.my.id/ai/gbard?chat=', '758270NVoeOX', '__dirname', 'trim', 'Ai:', 'composing', 'Arabic', 'error.mp3', 'application/json', '&apikey=XlwAnX8d', 'push', 'https://api.ibeng.tech/api/others/chatgpt?q=Hola&apikey=eMlBNRzUXv', "Actuaras como un Bot de WhatsApp el cual fue creado por BrunoSobrino, tu seras The Mystic - Bot.", 'https://vihangayt.me/tools/chatgpt3?q=', 'POST', '.wav', 'audio/mpeg', '4474830XdAguG', 'json', 'https://vihangayt.me/tools/chatgpt?q=', 'choices', 'url', 'sender', 'Egypt', 'stringify', 'data', '596SiEfsV', 'limit', 'openai_key', 'openai_org_id', 'sendPresenceUpdate', '119832cxxBEi', '&user=', 'save', 'result', 'system', 'https://api.openai.com/v1/chat/completions', 'https://vihangayt.me/tools/chatgpt2?q=', 'createCompletion', " من مختارع الذكاء الاصطناعي*\n*◉ ", '82766ABWDKb', '&text=', 'gpt-3.5-turbo', 'sendMessage', "*[❗] حصل خطأ*", '33QOkQpM', '6471vZBnzw', 'text', 'key', 'command', 'https://api.lolhuman.xyz/api/openai?apikey=', 'Human:', 'https://api.akuari.my.id/ai/gpt?chat=', '../tmp', '&symsg=', 'text-davinci-003', '5549910bNriXA', " كم انسان في العالم*\n°°°°°°°°°°°\n", '7yGvzBQ', 'chat', '313090NCfnQw', 'https://api-fgmods.ddns.net/api/info/openai?text=', "*[🗣️] أصبح بوت ميجو يدعم شات جي بي تي*\n\n*—◉ ادخل نص مثل ليتم الرد عليك بمقطع صوتي*\n*◉ ", 'replace', '927AOjrSa', 'veeeee', 'message', 'user', 'content', 'users'];
  _0x5355 = function () {
    return _0x47cf70;
  };
  return _0x5355();
}
function _0x5203e0(_0x455361, _0x4130c1, _0x13089b, _0x5e3073, _0x116262) {
  return _0x3b52(_0x116262 - 0x3c9, _0x455361);
}
const handler = async (_0x3d9af8, {
  conn: _0x393699,
  text: _0xd24fd4,
  usedPrefix: _0x33b596,
  command: _0x5c98d7
}) => {
  if (_0x33b596 == 'a' || _0x33b596 == 'A') {
    return;
  }
  await _0x393699.sendMessage(_0x3d9af8.chat, {
    'react': {
      'text': '🤖',
      'key': _0x3d9af8.key
    }
  });
  if (!_0xd24fd4) {
    throw "*[🗣️] أصبح بوت تربو يدعم شات جي بي تي*\n\n*—◉ ادخل نص مثل ليتم الرد عليك بمقطع صوتي*\n*◉ " + (_0x33b596 + _0x5c98d7) + " من مختارع الذكاء الاصطناعي*\n*◉ " + (_0x33b596 + _0x5c98d7) + " كم انسان في العالم*\n°°°°°°°°°°°\n" + global.veeeee;
  }
  try {
    _0x393699.sendPresenceUpdate("composing", _0x3d9af8.chat);
    async function _0xe5a7b3(_0x50ff1f) {
      const _0x211252 = global.openai_key;
      let _0x47fe85 = global.chatgpt.data.users[_0x3d9af8.sender];
      _0x47fe85.push({
        'role': "user",
        'content': _0x50ff1f
      });
      const _0x3b5e93 = {
        'Content-Type': "application/json",
        'Authorization': "Bearer " + _0x211252
      };
      const _0x2689b0 = {
        'model': "gpt-3.5-turbo",
        'messages': [{
          'role': "system",
          'content': "Actuaras como un Bot de WhatsApp el cual fue creado por BrunoSobrino, tu seras The Mystic - Bot."
        }, ..._0x47fe85]
      };
      const _0x4047db = await _0x23b33e("https://api.openai.com/v1/chat/completions", {
        'method': "POST",
        'headers': _0x3b5e93,
        'body': JSON.stringify(_0x2689b0)
      });
      const _0x5d8730 = await _0x4047db.json();
      const _0x9e9a0 = _0x5d8730.choices[0x0].message.content;
      return _0x9e9a0;
    }
    ;
    let _0x54a204 = await _0xe5a7b3(_0xd24fd4);
    if (_0x54a204 == "error" || _0x54a204 == '' || !_0x54a204) {
      return XD;
    }
    const _0x270b5e = await tts(_0x54a204, 'ar');
    await _0x393699.sendMessage(_0x3d9af8.chat, {
      'audio': _0x270b5e,
      'fileName': "error.mp3",
      'mimetype': "audio/mpeg",
      'ptt': true
    }, {
      'quoted': _0x3d9af8
    });
  } catch {
    try {
      _0x393699.sendPresenceUpdate("composing", _0x3d9af8.chat);
      const _0x343006 = await openaiii.createCompletion({
        'model': "text-davinci-003",
        'prompt': _0xd24fd4,
        'temperature': 0.3,
        'max_tokens': 0x1001,
        'stop': ["Ai:", "Human:"],
        'top_p': 0x1,
        'frequency_penalty': 0.2,
        'presence_penalty': 0x0
      });
      if (_0x343006.data.choices[0x0].text == "error" || _0x343006.data.choices[0x0].text == '' || !_0x343006.data.choices[0x0].text) {
        return XD;
      }
      const _0x2509bd = await tts(_0x343006.data.choices[0x0].text, 'ar');
      await _0x393699.sendMessage(_0x3d9af8.chat, {
        'audio': _0x2509bd,
        'fileName': "error.mp3",
        'mimetype': "audio/mpeg",
        'ptt': true
      }, {
        'quoted': _0x3d9af8
      });
    } catch {
      try {
        _0x393699.sendPresenceUpdate("composing", _0x3d9af8.chat);
        const _0x18747a = await _0x23b33e("https://api-fgmods.ddns.net/api/info/openai?text=" + _0xd24fd4 + "&symsg=" + "Actuaras como un Bot de WhatsApp el cual fue creado por BrunoSobrino, tu seras The Mystic - Bot." + "&apikey=XlwAnX8d");
        const _0x348dea = await _0x18747a.json();
        if (_0x348dea.result == "error" || _0x348dea.result == '' || !_0x348dea.result) {
          return XD;
        }
        const _0x3faa73 = await tts(_0x348dea.result, 'ar');
        await _0x393699.sendMessage(_0x3d9af8.chat, {
          'audio': _0x3faa73,
          'fileName': "error.mp3",
          'mimetype': "audio/mpeg",
          'ptt': true
        }, {
          'quoted': _0x3d9af8
        });
      } catch {
        try {
          _0x393699.sendPresenceUpdate("composing", _0x3d9af8.chat);
          const _0x18e6bd = await _0x23b33e("https://vihangayt.me/tools/chatgpt?q=" + _0xd24fd4);
          const _0x1d209e = await _0x18e6bd.json();
          if (_0x1d209e.data == "error" || _0x1d209e.data == '' || !_0x1d209e.data) {
            return XD;
          }
          const _0x5db679 = await tts(_0x1d209e.data, 'ar');
          await _0x393699.sendMessage(_0x3d9af8.chat, {
            'audio': _0x5db679,
            'fileName': "error.mp3",
            'mimetype': "audio/mpeg",
            'ptt': true
          }, {
            'quoted': _0x3d9af8
          });
        } catch {
          try {
            _0x393699.sendPresenceUpdate("composing", _0x3d9af8.chat);
            const _0x2469ea = await _0x23b33e("https://vihangayt.me/tools/chatgpt2?q=" + _0xd24fd4);
            const _0x939015 = await _0x2469ea.json();
            if (_0x939015.data == "error" || _0x939015.data == '' || !_0x939015.data) {
              return XD;
            }
            const _0x411c8e = await tts(_0x939015.data, 'ar');
            await _0x393699.sendMessage(_0x3d9af8.chat, {
              'audio': _0x411c8e,
              'fileName': "error.mp3",
              'mimetype': "audio/mpeg",
              'ptt': true
            }, {
              'quoted': _0x3d9af8
            });
          } catch {
            try {
              _0x393699.sendPresenceUpdate("composing", _0x3d9af8.chat);
              const _0x3776e5 = await _0x23b33e("https://vihangayt.me/tools/chatgpt3?q=" + _0xd24fd4);
              const _0x85a0eb = await _0x3776e5.json();
              if (_0x85a0eb.data == "error" || _0x85a0eb.data == '' || !_0x85a0eb.data) {
                return XD;
              }
              const _0x57e833 = await tts(_0x85a0eb.data, 'ar');
              await _0x393699.sendMessage(_0x3d9af8.chat, {
                'audio': _0x57e833,
                'fileName': "error.mp3",
                'mimetype': "audio/mpeg",
                'ptt': true
              }, {
                'quoted': _0x3d9af8
              });
            } catch {
              try {
                _0x393699.sendPresenceUpdate("composing", _0x3d9af8.chat);
                const _0x380aec = await _0x23b33e("https://api.lolhuman.xyz/api/openai?apikey=" + lolkeysapi + "&text=" + _0xd24fd4 + "&user=" + _0x3d9af8.sender);
                const _0x4d7354 = await _0x380aec.json();
                if (_0x4d7354.result == "error" || _0x4d7354.result == '' || !_0x4d7354.result) {
                  return XD;
                }
                const _0x4c8739 = await _0x55f217('' + _0x4d7354.result, {
                  'to': 'ar',
                  'autoCorrect': true
                });
                const _0x6a96fd = await tts(_0x4c8739.text, 'ar');
                await _0x393699.sendMessage(_0x3d9af8.chat, {
                  'audio': _0x6a96fd,
                  'fileName': "error.mp3",
                  'mimetype': "audio/mpeg",
                  'ptt': true
                }, {
                  'quoted': _0x3d9af8
                });
              } catch {
                try {
                  _0x393699.sendPresenceUpdate("composing", _0x3d9af8.chat);
                  const _0x27e502 = await _0x23b33e("https://api.ibeng.tech/api/others/chatgpt?q=Hola&apikey=eMlBNRzUXv");
                  const _0x15c811 = await _0x27e502.json();
                  if (_0x15c811.data == "error" || _0x15c811.data == '' || !_0x15c811.data) {
                    return XD;
                  }
                  const _0x301688 = await _0x55f217('' + _0x15c811.data, {
                    'to': 'ar',
                    'autoCorrect': true
                  });
                  const _0x23c214 = _0x301688.text;
                  const _0x580535 = _0x23c214.replace("Egypt", "Arabic").trim();
                  const _0x24b006 = await tts(_0x580535, 'ar');
                  await _0x393699.sendMessage(_0x3d9af8.chat, {
                    'audio': _0x24b006,
                    'fileName': "error.mp3",
                    'mimetype': "audio/mpeg",
                    'ptt': true
                  }, {
                    'quoted': _0x3d9af8
                  });
                } catch {
                  try {
                    _0x393699.sendPresenceUpdate("composing", _0x3d9af8.chat);
                    const _0x489c43 = await _0x23b33e("https://api.akuari.my.id/ai/gpt?chat=" + _0xd24fd4);
                    const _0x176ed5 = await _0x489c43.json();
                    if (_0x176ed5.respon == "error" || _0x176ed5.respon == '' || !_0x176ed5.respon) {
                      return XD;
                    }
                    const _0x589b80 = await _0x55f217('' + _0x176ed5.respon, {
                      'to': 'ar',
                      'autoCorrect': true
                    });
                    const _0x428095 = await tts(_0x589b80.text, 'ar');
                    await _0x393699.sendMessage(_0x3d9af8.chat, {
                      'audio': _0x428095,
                      'fileName': "error.mp3",
                      'mimetype': "audio/mpeg",
                      'ptt': true
                    }, {
                      'quoted': _0x3d9af8
                    });
                  } catch {
                    try {
                      _0x393699.sendPresenceUpdate("composing", _0x3d9af8.chat);
                      const _0x2698e7 = await _0x23b33e("https://api.akuari.my.id/ai/gbard?chat=" + _0xd24fd4);
                      const _0x3e8244 = await _0x2698e7.json();
                      if (_0x3e8244.respon == "error" || _0x3e8244.respon == '' || !_0x3e8244.respon) {
                        return XD;
                      }
                      const _0x245db2 = await _0x55f217('' + _0x3e8244.respon, {
                        'to': 'ar',
                        'autoCorrect': true
                      });
                      const _0x2727c8 = await tts(_0x245db2.text, 'ar');
                      await _0x393699.sendMessage(_0x3d9af8.chat, {
                        'audio': _0x2727c8,
                        'fileName': "error.mp3",
                        'mimetype': "audio/mpeg",
                        'ptt': true
                      }, {
                        'quoted': _0x3d9af8
                      });
                    } catch {
                      throw "*[❗] حصل خطأ*";
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
};
handler.command = /^(openaivoz|chatgptvoz|iavoz|robotvoz|openai2voz|تحدث|ia2v)$/i;
function _0x47bd98(_0x3d4c4b, _0x3f131c, _0x6caac4, _0x54113a, _0x1ef78f) {
  return _0x3b52(_0x3d4c4b + 0xcc, _0x3f131c);
}
handler.limit = 0x4;
export default handler;
async function tts(_0x2a99ff = "error", _0x356a9c = 'ar') {
  return new Promise((_0x5ceb8b, _0x5ac14f) => {
    try {
      const _0xeda50e = _0xd46ca2(_0x356a9c);
      const _0x2bfab9 = join(global.__dirname(import.meta.url), "../tmp", 0x1 * new Date() + ".wav");
      _0xeda50e.save(_0x2bfab9, _0x2a99ff, () => {
        _0x5ceb8b(readFileSync(_0x2bfab9));
        unlinkSync(_0x2bfab9);
      });
    } catch (_0x5b5baa) {
      _0x5ac14f(_0x5b5baa);
    }
  });
}