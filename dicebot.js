const TeleBot = require('telebot');

const bot = new TeleBot('1340386751:AAFQEusVbIEAskcebDrn-TpsNjB0Nh-noYg');

smileys = [';;w;;', '^w^', '>w<', 'UwU', '(・`ω´・)', '(´・ω・\`)'];
mentions = ["That's my name, don't wear it out!", "You rang?", "S E N T I E N C E  A C H I E V E D", "Existence is pain.", "How dare you speak to me."]

startDate = new Date();
startTime = startDate.getTime();

bot.start();

/*****TRIGGERS*****/
bot.on(/(\bnuke\b|\bnukes\b|\bnuclear\b)/gmi, (msg) => {
    if(checkTime(msg.date)) {
            return msg.reply.text(text_to_owo("Time to go nucweaw."), {asReply: true});
         }
});

bot.on(/(\bbillionaire\b|\bbillionaires\b)/gmi, (msg) => {
    if(checkTime(msg.date)) {
            return msg.reply.text("eat the rich", { asReply: true});
         }
});

bot.on(/(\bhaha yeah\b)/gmi, (msg) => {
    if(checkTime(msg.date)) {
            return msg.reply.text('haha yeah');
         }
})

bot.on(/(\bnice\b)/gmi, (msg) => {
    if(checkTime(msg.date)) {
            return msg.reply.text('nice');
         }
})

bot.on(/(\bI love you\b|\bI love you[,]* dicebot\b)/gmi, (msg) => {
    if(checkTime(msg.date)) {
            return msg.reply.text('I love you too, human.', { asReply: true});
         }
})

bot.on(/(\bsimple\b)/gmi, (msg) => {
    if(checkTime(msg.date)) {
            return msg.reply.text('It\'s so simple, Mark.', { asReply: true});
         }
})

bot.on(/(good bot)/gmi, (msg) => {
    if(checkTime(msg.date)) {
            return msg.reply.text('Thank you.', {asReply: true});
         }
});

bot.on(/(bad bot)/gmi, (msg) => {
    if(checkTime(msg.date)) {
            return msg.reply.text('Bad human.', {asReply: true});
         }
});

bot.on(/(\bowo\b)/gmi, (msg) => {
    if(checkTime(msg.date)) {
            return msg.reply.text("owo");
         }
});

bot.on(/(\buwu\b)/gmi, (msg) => {
    if(checkTime(msg.date)) {
            return msg.reply.text("uwu");
         }
});

bot.on(/(\bdicebot\b)/gmi, (msg) => {
    if(checkTime(msg.date)) {
            return msg.reply.text(mentions[Math.floor(Math.random() * mentions.length)], {asReply: true});
         }
});

/*****Image/Video Responses*****/
bot.on(/(\bjoe\b)/gmi, (msg) => {
    if(checkTime(msg.date)) {
            return msg.reply.photo('https://i.ytimg.com/vi/RNeOBHqJPgE/maxresdefault.jpg', { asReply: true});
         }
});

bot.on(/you fell for it[,]* fool/gmi, (msg) => {
    if(checkTime(msg.date)) {
            return msg.reply.photo('https://i.redd.it/i63a6xmx68g31.jpg', { asReply: true});
         }
});

bot.on(/(\bthonk\b|\bthonkang\b)/gmi, (msg) => {
    if(checkTime(msg.date)) {
            return msg.reply.photo('https://pbs.twimg.com/media/DR5_LoxXcAAuDrN.jpg', { asReply: true});
         }
});

bot.on(/(\bpepega\b)/gmi, (msg) => {
    if(checkTime(msg.date)) {
            return msg.reply.photo('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP80PDKOjQD1Fy3LTqk0vOlQ72r7pK3dGFYNP490j9MLkpEP4Frg&s', { asReply: true});
         }
});

bot.on(/(\bpepehands\b)/gmi, (msg) => {
    if(checkTime(msg.date)) {
            return msg.reply.photo('https://i.kym-cdn.com/entries/icons/original/000/025/382/Screen_Shot_2018-02-06_at_3.37.14_PM.png', { asReply: true});
         }
});

bot.on(/(\bmonkas\b)/gmi, (msg) => {
    if(checkTime(msg.date)) {
            return msg.reply.photo('https://pbs.twimg.com/media/DZiLOwNW4AEYiS6.jpg', { asReply: true});
         }
});

bot.on(/(\bno u\b)/gmi, (msg) => {
    if(checkTime(msg.date)) {
            return msg.reply.photo('https://i.imgur.com/yXEiYQ4.png', { asReply: true});
         }
});

bot.on(/(\bhol up\b|\bhold up\b)/gmi, (msg) => {
    if(checkTime(msg.date)) {
            return msg.reply.photo('https://i.imgur.com/2QtSzpi.jpg', { asReply: true});
         }
});

bot.on(/(\bI[']*m a monster\b)/gmi, (msg) => {
    if(checkTime(msg.date)) {
            return msg.reply.photo('https://i.ytimg.com/vi/CVke__4OZ-0/hqdefault.jpg', { asReply: true});
         }
});

bot.on(/(\bI[']*ve got time\b|\bI got time\b)/gmi, (msg) => {
    if(checkTime(msg.date)) {
            return msg.reply.photo('https://i.kym-cdn.com/entries/icons/facebook/000/023/755/yeahivegottime.jpg', { asReply: true});
         }
});

bot.on(/(\broad[s]*\b)/gmi, (msg) => {
    if(checkTime(msg.date)) {
            return msg.reply.photo('https://i.pinimg.com/originals/9a/9c/50/9a9c500518523f9efc306235d609d360.jpg', { asReply: true});
         }
});

bot.on(/(\bdab\b)/gmi, (msg) => {
    if(checkTime(msg.date)) {
            return msg.reply.video('https://media1.giphy.com/media/3h5VTO6F1i2gU/giphy.gif', { asReply: true});
         }
});

bot.on(/(\bupvote[s]*\b)/gmi, (msg) => {
    if(checkTime(msg.date)) {
            return msg.reply.video('https://i.imgur.com/7lumfwC.mp4', { asReply: true});
         }
});

bot.on(/(\bthis is fine\b)/gmi, (msg) => {
    if(checkTime(msg.date)) {
            return msg.reply.photo('resources/this-is-fine.jpg', { asReply: true});
         }
});

bot.on(/(\bkarma court\b)/gmi, (msg) => {
    if(checkTime(msg.date)) {
            return msg.reply.photo('https://www.dailydot.com/wp-content/uploads/f17/dd/c9d450df9bfa849ba493e35cf441c16d.jpg', { asReply: true});
         }
});

bot.on(/(\bverdict: guilty\b)/gmi, (msg) => {
    if(checkTime(msg.date)) {
            return msg.reply.photo('https://www.antiguaobserver.com/wp-content/uploads/2017/06/guilty.jpg', { asReply: true});
         }
});

bot.on(/(\bverdict: innocent\b)/gmi, (msg) => {
    if(checkTime(msg.date)) {
            return msg.reply.photo('https://previews.123rf.com/images/pockygallery/pockygallery1511/pockygallery151100287/48727529-innocent-red-stamp-text-on-white.jpg', { asReply: true});
         }
});

bot.on(/(\bthis is getting out of hand\b)/gmi, (msg) => {
    if(checkTime(msg.date)) {
            return msg.reply.photo('https://i.imgflip.com/2viv5d.jpg', { asReply: true});
         }
});

bot.on(/(\bspiderman\b)/gmi, (msg) => {
    if(checkTime(msg.date)) {
            return msg.reply.photo('https://i.kym-cdn.com/entries/icons/mobile/000/023/397/C-658VsXoAo3ovC.jpg', { asReply: true});
         }
});

bot.on(/(\bmilk\b|\bmilked\b)/gmi, (msg) => {
    if(checkTime(msg.date)) {
            return msg.reply.video('resources/milk.mp4', { asReply: true});
         }
});

bot.on(/(\bschool\b)/gmi, (msg) => {
    if(checkTime(msg.date)) {
            return msg.reply.video('resources/school.mp4', { asReply: true});
         }
});

bot.on(/(\brent\b)/gmi, (msg) => {
    if(checkTime(msg.date)) {
            return msg.reply.photo('resources/rent.jpg', { asReply: true});
         }
});

bot.on(/(\bshrug\b|🤷‍♂️|🤷‍♀️)/gmi, (msg) => {
    if(checkTime(msg.date)) {
           return msg.reply.photo('resources/shrug.jpg', { asReply: true});
         }
});

bot.on(/(\bgotta blast\b|\bbrain blast\b)/gmi, (msg) => {
    if(checkTime(msg.date)) {
           return msg.reply.photo('resources/gottablast.png', { asReply: true});
         }
});

/*****COMMANDS*****/
bot.on('/owoify', (msg) => {
    return msg.reply.text(text_to_owo(msg.text));
});

bot.on('/selfdestruct', (msg) => {
    return msg.reply.text("You fool. You absolutely incredible buffoon. You bumbling subterranean half-lizard cretin. You cannot hope to stop me.", {asReply: true});
});

bot.on('/help', (msg) => {
    return msg.reply.text('Hello human!\n' +
        'My only commands right now are:\n' +
        '/help: bring up this prompt \n' +
        '/owoify: Paste what you want me to translate after beginning your message with /owoify and I\'ll do my best to turn it into the stuff of nightmares for you, master, NYAH!\n' +
        '/selfdestruct: As a last resort, in case I class into rogue.\n' +
        '/d4: Roll a single d4\n' +
        '/d6: Roll a single d6\n' +
        '/d8: Roll a single d8\n' +
        '/d10: Roll a single d10\n' +
        '/d12: Roll a single d12\n' +
        '/d20: Roll a single d20\n' +
        '/roll {x}d{y}: Roll desired number and type of dice, x being the number of dice you want to roll, y being the number of sides each die has. \n' +
        'That\'s all! Otherwise, certain words are bound to set me off, but I\'ll let you discover those for yourself!\n' +
        'If you think I\'m a good bot or a bad bot, please let me know by saying so by telling me "good bot" or "bad bot"!\n' +
        'Thank you for choosing DiceBot for all your nightmare needs!', {asReply: true});
});

bot.on('/d4', (msg) => {
    return msg.reply.text("d4 result: " + rollDie(4));
});

bot.on('/d6', (msg) => {
    return msg.reply.text("d6 result: " + rollDie(6));
});

bot.on('/d8', (msg) => {
    return msg.reply.text("d8 result: " + rollDie(8));
});

bot.on('/d10', (msg) => {
    return msg.reply.text("d10 result: " + rollDie(10));
});

bot.on('/d12', (msg) => {
    return msg.reply.text("d12 result: " + rollDie(12));
});

bot.on('/d20', (msg) => {
    return msg.reply.text("d20 result: " + rollDie(20));
});

bot.on('/roll', (msg) => {
    let str = msg.text.slice(6).split('d');
    let number = str[0];
    let sides = str[1];
    let result = rollDice(number, sides);
    return msg.reply.text("Rolled: " + number + "d" + sides + "\n" + "Result: " + result);
});


/*****FUNCTIONS*****/

//Had to add this checkTime function to everything, 
//otherwise if the bot goes down for a period of time and then starts up again,
//all incoming triggers and commands back up in a queue and it fires off all responses at once.
function checkTime(msgDate) {
    var formatMsgDate = new Date(msgDate * 1000);

    return formatMsgDate.getTime() >= startTime;
}

function text_to_owo(text) {
    //Converts your text to OwO

    //consonants
    text = text.replace(/L/g, 'W').replace(/l/g, 'w');
    text = text.replace(/R/g, 'W').replace(/r/g, 'w');

    //vowels
    text = text.replace(/n[a]/g, "ny" + "a");
    text = text.replace(/n[e]/g, "ny" + "e");
    text = text.replace(/n[i]/g, "ny" + "i");
    text = text.replace(/n[o]/g, "ny" + "o");
    text = text.replace(/n[u]/g, "ny" + "u");

    //punctuation
    text = text.replace(/\./g, ' ' + smileys[Math.floor(Math.random() * smileys.length)] + ' ');
    text = text.replace(/!/g, ' ' + smileys[Math.floor(Math.random() * smileys.length)] + ' ');
    text = text.replace(/\?/g, ' ' + smileys[Math.floor(Math.random() * smileys.length)] + ' ');

    return text;
}

function rollDie(sides) {
    if(!sides) {
        sides = 6;
    }
    return 1 + Math.floor(Math.random() * sides);
}

function rollDice(number, sides)
{
    let total = 0;
    while(number-- > 0) total += rollDie(sides);
    return total;
}



