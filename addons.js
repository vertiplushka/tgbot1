

module.exports = {
    token: '6040315554:AAHwQLwGutKi1uUlTNnW9NvDyXPvGzpyJaY',
    helloStr : 'Меня зовут Валерий. Мы с женой Ириной - консультанты по питанию и организаторы клуба здорового образа жизни, а еще проводим марафоны стройности.',
    aboutStr : 'Что такое ОНЛАЙН марафон стройности❗❓❗❓ \nПочему они дают такие крутые результаты??? \nВ нашем марафоне снижают вес 9 из 10 участников!!! Причем 1 из 10 кто не снижает вес - часто и не ставит перед собой такую задачу. \nТак в чем же секрет? \nКонечно - В Продукте 💗🍹💗 \nНе зря же мы №1 во всем мире в категории продуктов питания  для снижения веса. \nНо и не только в этом. \nНаши клиенты получают шикарные результаты - потому, что мы вкладываем душу в наши марафоны и в результат каждого из Вас 💗. \nМы также: \n✅Расписываем питание; \n✅Помогаем составить программу; \n✅Постоянно контролируем и помогаем; \n✅Дае‌м знания в области питания; \n✅Поддерживаем вас; \n✅Заинтересованы в каждом вашем результате; \nА сегодня это еще‌ и очень удобно. Вы худеете прямо в телефоне. \n🌟Если вы давно наблюдаете, но не решаетесь... \n🌟Если у вас есть желание похудеть, но не знаете как... \n🌟Если давно пытаетесь, но ничего не выходит...\n  \nЗаинтересовались? Заполняйте анкету и присоеденяйтесь к нам!',
    formStr : ' 1. Вес/рост/возраст  \n2. Есть ли спорт/физическая нагрузка \n3. Чем вы обычно завтракаете и во сколько?\n4. Сколько чистой воды пьёте в течении дня?\n5. Есть ли режим питания, фиксированной время завтрак/обед/ужин? Перекусы?\n6. Тянет ли вас на сладкое? Солёное? Мучное?\n 7. Пьёте ли вы витамины/добавки или лекарства?\n8. Бывают ли отеки?\n9. Есть ли особенности по здоровью или хронические болезни?\n10. Что бы вы хотели улучшить в самочувствии/фигуре?\n11. Что уже получается для того, что вы делаете для достижения цели?\n12. Что мешает, тормозит процесс?\n',
    
    helloForm : {
        reply_markup: JSON.stringify({
            inline_keyboard :[
                [{text: 'Да', callback_data: 'yes'}, {text: 'Нет', callback_data: 'no'}],
                [{text: 'Узнать подробнее о марафоне', callback_data: 'about'}],
                [{text: 'Посмотреть результаты участников', callback_data: 'results'}],
            ]
        })
    },
    form: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: 'Вернуться назад', callback_data: 'back'}]
            ]
        })
    },
    replyForm: {
        reply_markup: JSON.stringify ({
            inline_keyboard: [
            [{text: 'Заполнить анкету письменно', callback_data: 'write'}],
            [{text: 'Аудиозвонок', callback_data: 'audio'}, {text: 'Видеозвонок', callback_data: 'video'}]
            ]
        })
    },
    noReplyForm: {
        reply_markup: JSON.stringify({
            inline_keyboard : [
                [{text: 'Да, я точно не хочу участвовать', callback_data: 'replyNo'},{text: 'Нет, я передумал(-а)', callback_data: 'replyYes'}],
                [{text: 'Присоедениться в чат с позезной информацией о ЗОЖ', callback_data: 'Join'}]
            ]
        })
    }, 
    timeForm: {
        reply_markup: JSON.stringify ({
            inline_keyboard: [
                [{text: '8:00', callback_data: '8:00'}, {text: '9:00', callback_data: '9:00'}],
                [{text: '10:00', callback_data: '10:00'}, {text: '11:00', callback_data: '11:00'}],
                [{text: '12:00', callback_data: '12:00'}, {text: '13:00', callback_data: '13:00'}],
                [{text: '14:00', callback_data: '14:00'}, {text: '15:00', callback_data: '15:00'}],
                [{text: '16:00', callback_data: '16:00'}, {text: '17:00', callback_data: '17:00'}]

            ]
        })
    },


    phList1: {
        reply_markup: JSON.stringify({
            inline_keyboard : [
                [{text: '<<', callback_data: ' '}, {text: '1/5', callback_data: ' '}, {text: '>>', callback_data: 'list2'}],
                [{text: 'Вернуться назад и заполнить анкету', callback_data: 'back'}]
            ]
        })
    }, 
    phList2: {
        reply_markup: JSON.stringify({
            inline_keyboard : [
                [{text: '<<', callback_data: 'list1'}, {text: '2/5', callback_data: ' '}, {text: '>>', callback_data: 'list3'}],
                [{text: 'Вернуться назад и заполнить анкету', callback_data: 'back'}]
            ]
        })
    }, 
    phList3: {
        reply_markup: JSON.stringify({
            inline_keyboard : [
                [{text: '<<', callback_data: 'list2'}, {text: '3/5', callback_data: ' '}, {text: '>>', callback_data: 'list4'}],
                [{text: 'Вернуться назад и заполнить анкету', callback_data: 'back'}]
            ]
        })
    }, 
    phList4: {
        reply_markup: JSON.stringify({
            inline_keyboard : [
                [{text: '<<', callback_data: 'list3'}, {text: '4/5', callback_data: ' '}, {text: '>>', callback_data: 'list5'}],
                [{text: 'Вернуться назад и заполнить анкету', callback_data: 'back'}]
            ]
        })
    }, 
    phList5: {
        reply_markup: JSON.stringify({
            inline_keyboard : [
                [{text: '<<', callback_data: 'list4'}, {text: '5/5', callback_data: ' '}, {text: '>>', callback_data: ' '}],
                [{text: 'Вернуться назад и заполнить анкету', callback_data: 'back'}]
            ]
        })
    }, 

    chatForm: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: 'Да, я хочу', callback_data: 'Join'}, {text: 'Нет, спасибо', callback_data: 'notJoin'}]
            ]
        })
    }
}