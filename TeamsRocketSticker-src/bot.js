// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

const { ActivityHandler, MessageFactory, CardFactory } = require('botbuilder');

class EchoBot extends ActivityHandler {
    constructor() {
        super();
        this.onMessage(async (context, next) => {
            let test = new Map();
            test.set(':teamrocket:', CardFactory.heroCard("",
                ['https://cdn.upstation.asia/wp-content/uploads/sites/6/2019/07/27064023/5517.jpeg']
            ));
            test.set(':sleeplisten:', CardFactory.heroCard("",
                ['https://i.imgur.com/L5HAOhB.jpg']
            ));
            test.set(':mind:', CardFactory.heroCard("",
                ['https://i.imgur.com/4xuXQu4.jpg']
            ));
            test.set(':toiletpaper:', CardFactory.heroCard("",
                ['https://i.imgur.com/FN0c2MZ.jpg']
            ));
            test.set(':coffeemountain:', CardFactory.heroCard("",
                ['https://i.imgur.com/tTvf0WF.jpg']
            ));
            test.set(':mounttwoply:', CardFactory.heroCard(
                "",
                ['https://i.imgur.com/6iLwBO3.jpg']
            ));
            test.set(':mountoneply:', CardFactory.heroCard(
                "",
                ['https://i.imgur.com/ZgsesZK.jpg']
            ));
            test.set(':sleephurt:', CardFactory.heroCard(
                "",
                ['https://i.imgur.com/nt5oqSu.jpg']
            ))
            test.set(':shower:', CardFactory.heroCard(
                '',
                ['https://i.imgur.com/dZpmk93.jpg']
            ));
            test.set(':sleepwatch:', CardFactory.heroCard(
                "", ['https://i.imgur.com/cFZsaaa.jpg']
            ))
            test.set(':work:', CardFactory.heroCard(
                '',
                ['https://i.imgur.com/QlkxNZg.jpg']
            ));
            test.set(':redmeeting:', CardFactory.heroCard(
                '',
                ['https://i.imgur.com/pRrRKzO.jpg']
            ));
            test.set(':bluemeeting:', CardFactory.heroCard(
                '',
                ['https://i.imgur.com/e5Kdf2C.jpg']
            ));
            test.set(':growthmindset:', CardFactory.heroCard(
                '',
                ['https://i.imgur.com/P1C1iwV.jpg']
            ));
            test.set(':hardstop:', CardFactory.heroCard(
                '',
                ['https://i.imgur.com/gNTsWUp.jpg']
            ));
            test.set(':mute:', CardFactory.heroCard(
                '',
                ['https://i.imgur.com/KHocrP5.jpg']
            ));
            test.set(':handsan:', CardFactory.heroCard(
                '',
                ['https://i.imgur.com/7Ssa07Q.jpg']
            ));
            test.set(':deadteams:', CardFactory.heroCard(
                '',
                ['https://i.imgur.com/tp4Vwaq.jpg']
            ));
            test.set(':music:', CardFactory.heroCard(
                '',
                ['https://i.imgur.com/9xECHhA.jpg']
            ));
            test.set(':monday:', CardFactory.heroCard(
                '',
                ['https://i.imgur.com/6uQ0p6m.jpg']
            ));
            test.set(':tuesday:', CardFactory.heroCard(
                '',
                ['https://i.imgur.com/GPrazrd.jpg']
            ));
            test.set(':wednesday:', CardFactory.heroCard(
                '',
                ['https://i.imgur.com/j8OMXx6.jpg']
            ));
            test.set(':thursday:', CardFactory.heroCard(
                '',
                ['https://i.imgur.com/pn1cL3q.jpg']
            ));
            test.set(':friday:', CardFactory.heroCard(
                '',
                ['https://i.imgur.com/rmOwVtT.jpg']
            ));
            
            var keyword = context.activity.text.substr("Teams Rocket Stickers".length + 4, context.activity.text.length).trim();
            if (test.has(keyword))
                await context.sendActivity(MessageFactory.attachment(test.get(keyword)));
            else if (keyword == 'help') {
                let stickers = Array.from(test.keys()).join(", ");
                await context.sendActivity(MessageFactory.text("help: "+stickers));
            } else {
                await context.sendActivity(MessageFactory.text(keyword));
            }

            await next();
        });

        this.onMembersAdded(async (context, next) => {
            const membersAdded = context.activity.membersAdded;
            const welcomeText = 'Hello and welcome! Type "@teamsrocketbot2 help" for available stickers:';
            for (let cnt = 0; cnt < membersAdded.length; ++cnt) {
                if (membersAdded[cnt].id !== context.activity.recipient.id) {
                    await context.sendActivity(MessageFactory.text(welcomeText, welcomeText));
                }
            }
            // By calling next() you ensure that the next BotHandler is run.
            await next();
        });
    }
}

module.exports.EchoBot = EchoBot;