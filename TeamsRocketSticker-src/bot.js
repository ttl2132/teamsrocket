// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

const { ActivityHandler, MessageFactory, CardFactory } = require('botbuilder');

class EchoBot extends ActivityHandler {
    constructor() {
        super();
        this.onMessage(async (context, next) => {
            let test = new Map();
            test.set(':teamrocket:', CardFactory.heroCard(
                'Team Rocket!',
                ['https://cdn.upstation.asia/wp-content/uploads/sites/6/2019/07/27064023/5517.jpeg']
            ));
            test.set(':test:', CardFactory.heroCard(
                'test',
                ['https://i.imgur.com/dCbZtZl.jpg']
            ));
            test.set(':smiley:', CardFactory.heroCard(
                'smiley',
                ['https://i.imgur.com/v4vFMcb.jpg']
            ));
            test.set(':sillysmiley:', CardFactory.heroCard(
                'test',
                ['https://i.imgur.com/7g2rXu8.jpg']
            ));
            test.set(':toiletpaper:', CardFactory.heroCard(
                'test',
                ['https://i.imgur.com/GS5n6M4.jpg']
            ));
            test.set(':coffeemountain:', CardFactory.heroCard(
                'test',
                ['https://i.imgur.com/cPQAz0E.jpg']
            ));
            test.set(':mounttwoply:', CardFactory.heroCard(
                'test',
                ['https://i.imgur.com/kUuDfg4.jpg']
            ));
            test.set(':mountoneply:', CardFactory.heroCard(
                'test',
                ['https://i.imgur.com/DCVlkwd.jpg']
            ));
            test.set(':shower:', CardFactory.heroCard(
                'test',
                ['https://i.imgur.com/WuyXC3i.jpg']
            ));
            test.set(':work:', CardFactory.heroCard(
                'test',
                ['https://i.imgur.com/DDD8yYu.jpg']
            ));
            if (test.has(context.activity.text))
                await context.sendActivity(MessageFactory.attachment(test.get(context.activity.text)));
            else if (context.activity.text == 'help') {
                let stickers = Array.from(test.keys()).join(", ");
                await context.sendActivity(MessageFactory.text("help: "+stickers));
            }

            await next();
        });

        this.onMembersAdded(async (context, next) => {
            const membersAdded = context.activity.membersAdded;
            const welcomeText = 'Hello and welcome!';
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
