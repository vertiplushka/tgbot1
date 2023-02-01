const telegramBot = require('node-telegram-bot-api')
token = '5961435382:AAH5ieClrWOSVMcluzFRqBN3PVg5fIcdiGw'
const {helloForm, helloStr, form, replyForm, noReplyForm, aboutStr, formStr, timeForm, phList1, phList2, phList3, phList4, phList5, helloForm2, chatForm, join} = require('./addons')

const bot = new telegramBot(token, {polling: true})
let isForm = false

function formatDate(date) {

    var dd = date.getDate();
    if (dd < 10) dd = '0' + dd;
  
    var mm = date.getMonth() + 1;
    if (mm < 10) mm = '0' + mm;
  
    var yy = date.getFullYear() % 100;
    if (yy < 10) yy = '0' + yy;
  
    return dd + '.' + mm + '.' + yy;
}


const start = async () => {

    bot.on("polling_error", console.log);

    bot.on('callback_query', quere => {
        const chatId = quere.message.chat.id
        const data = quere.data
        const user = quere.from.first_name
        const messageId = quere.message.message_id
        

        switch (data) {

            
            case 'yes':
            case 'replyYes':
                bot.editMessageText('Кстати, скоро старт следующего забега! Пойдешь с нами?', {message_id: messageId, chat_id: chatId})
                bot.sendMessage(chatId, 'Для того, чтобы дать рекомендации по питанию надо заполнить анкету', form)
            break
            
            case 'no':
                bot.editMessageText('Кстати, скоро старт следующего забега! Пойдешь с нами?', {message_id: messageId, chat_id: chatId})
                bot.sendMessage(chatId, `${user}, вы уверены?`, noReplyForm)
            break

            case 'about':
                bot.editMessageText('Кстати, скоро старт следующего забега! Пойдешь с нами?', {message_id: messageId, chat_id: chatId})
                bot.sendMessage(chatId, aboutStr, form)
            break

            case 'next':
                bot.sendMessage(chatId, 'Как вам будет удобно заполнить анкету?', replyForm)
            break

            case 'write':
                bot.sendMessage(chatId, 'Заполните приложенную ниже анкету. Мы сразу же получим ваш ответ')
                bot.sendMessage(chatId, formStr)
                isForm = true
            break

            case 'audio':
            case 'video':
                bot.sendMessage(chatId, 'Выберите время, когда с вами будет удобно связаться', timeForm)
            break


            case 'results':
                bot.editMessageText('Кстати, скоро старт следующего забега! Пойдешь с нами?', {message_id: messageId, chat_id: chatId})
                bot.sendMessage(chatId, 'В этом разделе вы можете ознакомиться с результатами наших участников')
                bot.sendPhoto(chatId, 'https://sun9-west.userapi.com/sun9-66/s/v1/ig2/zG9TN1X009abg-jCZJCmIGtPN6twTOzJEq-KKgD_M5yy_xAhO12AFqmqdRASbyrqh3yPg5yk__VaEMDGeE2RYo1z.jpg?size=1448x1448&quality=95&type=album', phList1)
            break


            case 'list1' :
                bot.deleteMessage(chatId, messageId)
                bot.sendPhoto(chatId, 'https://sun9-west.userapi.com/sun9-66/s/v1/ig2/zG9TN1X009abg-jCZJCmIGtPN6twTOzJEq-KKgD_M5yy_xAhO12AFqmqdRASbyrqh3yPg5yk__VaEMDGeE2RYo1z.jpg?size=1448x1448&quality=95&type=album', phList1)
            break
            
            case 'list2' :
                
                bot.deleteMessage(chatId, messageId)
                bot.sendPhoto(chatId, 'https://sun9-west.userapi.com/sun9-72/s/v1/ig2/5Fdb-FXP6s_tBXnMF0qW0XnlyqQkD78vJKvU29OcOoT2flCDeqvKj0mzQgQyVJxCb7GKLb3p6PpzUGSSmUVuNc-J.jpg?size=1448x1448&quality=95&type=album', phList2)
            break

            case 'list3' :
                bot.deleteMessage(chatId, messageId)
                bot.sendPhoto(chatId, 'https://sun9-north.userapi.com/sun9-79/s/v1/ig2/K_Domn4HusaED6qoaaD0uKiRrfWgEuSBr3OxlgSdKmGHx1-ePjY9Z2ep-vF485ilnO21JzyqrQOG5-2_R3i625bR.jpg?size=1448x1448&quality=95&type=album', phList3)
            break

            case 'list4' :
                bot.deleteMessage(chatId, messageId)
                bot.sendPhoto(chatId, 'https://sun4.userapi.com/sun4-10/s/v1/ig2/G1sV6mYXdUkokW-ZPUFW7vFgokpmaITOg_8UI3qbm7DvsBlI5seZeSLv0RPSVLB5Y3ASQIzG3RopkdO2zE_I1mmb.jpg?size=1448x1448&quality=95&type=album', phList4)
            break

            case 'list5' :
                bot.deleteMessage(chatId, messageId)
                bot.sendPhoto(chatId, 'https://sun4.userapi.com/sun4-16/s/v1/ig2/GwPaS-ognAe0KyeCf7qlAqVSxWJzBAnMWDrt9nNthGdlPoe7iXpbCS7MU8HKbhpew5DnqdTNXZ6f8nlCKfK3bTg8.jpg?size=1448x1448&quality=95&type=album', phList5)
            break

            case 'back':
                counter = 2
                bot.deleteMessage(chatId,messageId)
                setTimeout(()=>{
                    bot.sendMessage(chatId, `Доброго времени суток, ${user}! ` + helloStr)
                }, 1000)
                
                setTimeout(()=>{
                    bot.sendMessage(chatId, 'Кстати, скоро старт следующего забега! Пойдешь с нами?', helloForm);
                }, 1500)
                
            break

            case 'Join':
                bot.sendMessage(chatId, 'Ваша ссылка на вступление в чат', join)
            break
            case '9:00':
            case '10:00':
            case '11:00':
            case '12:00':
            case '13:00':
            case '14:00':
            case '15:00':
            case '16:00':
            case '17:00':
            case '18:00':
            case '19:00':
            case '20:00':

            

                var d1 = new Date()
                var d2, d3, d4, d5, d6, d7, d8, d9 = d1
                d1 = formatDate(d1.getDate(d1.setDate))
                d2 = formatDate(d2.setDate(d2.getDate() + 1))
                d3 = formatDate(d3.setDate(d3.getDate() + 2))
                d4 = formatDate(d4.setDate(d4.getDate() + 3))
                d5 = formatDate(d5.setDate(d5.getDate() + 4))
                d6 = formatDate(d6.setDate(d6.getDate() + 5))
                d7 = formatDate(d7.setDate(d7.getDate() + 6))
                d8 = formatDate(d8.setDate(d8.getDate() + 7))
                d9 = formatDate(d9.setDate(d9.getDate() + 8))           

                const dateForm = {
                    reply_markup: JSON.stringify({
                        inline_keyboard :[
                            [{text: `${d1}`, callback_data: 'd1'}, {text: `${d2}`, callback_data: 'd2'}, {text: `${d3}`, callback_data: 'd3'}],
                            [{text: `${d4}`, callback_data: 'd4'}, {text: `${d5}`, callback_data: 'd5'}, {text: `${d6}`, callback_data: 'd6'}],
                            [{text: `${d7}`, callback_data: 'd7'}, {text: `${d8}`, callback_data: 'd8'}, {text: `${d9}`, callback_data: 'd9'}],
                        ]
                    })
                }
                bot.sendMessage(chatId, `Мы с вами свяжемся в ${data}. Для изменения времени, напишите нам - "ссылка на профиль"`)
                bot.sendMessage(1130306939, `Новая заявка на звонок от @${quere.from.username}  в ${data}`)
                bot.sendMessage(chatId, 'Желаете вступить в наш телеграм-чат и подписаться на рассылку?', chatForm)
            break
        }
     })


    bot.on('message', async msg => {
        const user = msg.from.first_name;
        const text = msg.text;
        const chatId = msg.chat.id;
        //console.log(msg)

        if (text === '/start') {
       
            await bot.sendMessage(chatId, `Доброго времени суток, ${user}! ` + helloStr)
            return bot.sendMessage(chatId, 'Кстати, скоро старт следующего забега! Пойдешь с нами?', helloForm);
        }
        else {
            if (isForm){
                let messageId = msg.message_id
                isForm = false
                //console.log (user, text, chatId);
                await bot.sendMessage(1130306939, `Новая заполненная анкета от ${msg.from.first_name} ${msg.from.last_name}`)
                await bot.sendMessage(chatId, 'Ваша анкета получена, в скором времени мы ее обработаем.')
                await bot.sendMessage(chatId, 'Желаете вступить в наш телеграм-чат и подписаться на рассылку?', chatForm)
                return bot.forwardMessage(1130306939, chatId, messageId)
                
            }   
            else {
                await bot.sendMessage(chatId, `Прости, я тебя не понял `)
                return bot.sendMessage(chatId, 'Напиши команду /start еще раз');  
            }        
        }
})    
}


start()

