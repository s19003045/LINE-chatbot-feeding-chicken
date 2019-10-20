const express = require('express')
const app = express()

const linebot = require('linebot');

// 判別開發環境
if (process.env.NODE_ENV !== 'production') {      // 如果不是 production 模式
  require('dotenv').config()                      // 使用 dotenv 讀取 .env 檔案
}

const bot = linebot({
  channelId: process.env.CHANNEL_ID,
  channelSecret: process.env.CHANNEL_SECRET,
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
});
const linebotParser = bot.parser();

bot.on('message', function (event) {
  console.log(event);
  switch (event.message.text) {
    case '你':
      event.reply('我的主人，我肚子好餓，趕快餵我！')
      break
    case 'hi':
      event.reply('我的主人，我肚子好餓，趕快餵我！')
      break
    case 'hello':
      event.reply('我的主人，我肚子好餓，趕快餵我！')
      break
    case '天氣':
      event.reply('不要管天氣了，我肚子好餓，趕快餵我！')
      break
    case '聽說':
      event.reply('聽說什麼，你沒聽到我說我肚子好餓嗎？趕快餵我！')
      break
    case '問':
      event.reply('問什麼不重要，重要是我肚子好餓，趕快餵我！')
      break
    case '說':
      event.reply('說什麼說，不要再說了，我肚子好餓，趕快餵我！')
      break
    case '名字':
      event.reply('我叫小雞，你是我的主人，你不知道嗎？我肚子好餓，趕快餵我！')
      break
    case '媽媽':
      event.reply('你就是我媽，我肚子好餓，趕快餵我！')
      break
    default:
      event.reply('不要再說了，我肚子好餓，趕快餵我！')
  }
  if (event.message.text = )
    event.reply(event.message.text).then(function (data) {
      // success
    }).catch(function (error) {
      // error
    });
});


app.post('/', linebotParser);


app.listen(process.env.PORT || 3000, () => {
  console.log('Express server start')
});

