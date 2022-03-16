---
title: A bit of fun improving our Whatsapp Group.
date: "2020-10-26T01:02:00.284Z"
description: "Sometimes a Whatsapp group can become quiet, not really much to talk about. So why not shake things up?"
---

## Introduction

Everything started when I received my first animated sticker on Whatsapp. 
I searched about how to create my own and saw that I couldn't. 
Just downloading some unofficial versions of the app.

Then doing a bit of research I found  [wa-automate]([https://github.com/open-wa/wa-automate-nodejs]) an automating tool for Whatsapp.
It basically emulates a Web Session and listen to commands, having some predefined commands, such as sending messages, stickers, etc.
----
## Ok, let's have a bit of fun?

Based on that I started to have some ideas. Such as: 


**Q**: Many times I keep searching a sticker that matches some reaction and lose the timing of the joke

**A**: Ok, so let's do a command that sends a Sticker by the text.

**Q**: And when I want to send an Youtube video? It would be nice to send it directly from the chat..

**A**: Sure! Why not?

**Q**: And in that moments that people ask you something that is just doing a google search?

**A**: Yeah, just send a LMGTFY link!

and many more...

----

So I started **[Futezap](https://github.com/Futebot/futezap)**. 

The code to read the commands is very simple.

**Writing an onMessage handler:**

```
client.onMessage(async message => {
    await handleMessage(message, client);
});
```

**And then have a list of commands to compare the calls:**

```
const commands = [
       {prefix: '.ping', function: sendPing},
       {prefix: '.help', function: sendHelp},
       {prefix: '.youtube', function: sendYoutubeURL},
       {prefix: '.lmgtfy', function: sendLMGTFY},
       {prefix: '.image', function: sendImage},
       {prefix: '.sticker', function: sendSticker},
       {prefix: '.gif', function: sendGifSticker},
       {prefix: '.groupimg', function: setGroupImage}
   ]
   
   async function handleMessage(message: Message, client: Client) {
   
       if((message.caption && !message.caption.startsWith(".")) && (message.body && !message.body.startsWith("."))) {
           return;
       }
   
       const commandCalled = message.caption ? message.caption : message.body;
   
       for (const command of commands) {
           if(commandCalled === command.prefix) {
               await command.function(message, client);
           }
       }
   
   }
```

**With that, it was up to my creativity to write the commands. 
For example, to send a GIF Sticker based on a keyword searched on Google:**

```
export async function sendGifSticker(message: Message, client: Client, attempt: number = 0) {

    try {
        const imgUrl = await getGifURLFromText(message.body.substr(message.body.indexOf(' '), message.body.length), attempt);
        await client.sendStickerfromUrl(message.chatId, imgUrl);
    } catch (e) {
        attempt += 1;
        if(attempt < 5) await sendGifSticker(message, client, attempt);
    }
}

export async function getGifURLFromText(text: string, index: number = 0): string {
    const asyncFunction = util.promisify(gis);
    const opts = {
        searchTerm: text,
        queryStringAddition: '&tbs=itp:animated'
    };
    const result: any = await asyncFunction(opts);

    return result[index].url;
}
```

**The result was:**

`youtube:uHTgDEU5ziE`

----
## Right, and didn't you find any problem on the journey?

Yeah, how wouldn't I? The main problem is, by Whatsapp policies we are not allowed on automating our accounts.
But, once the app emulates a browser, they won't notice unless you add your bot to many chats and the volume of messages gets too high.

So my tip is, don't do that! Keep it just for personal use.

## The end!

So again, the code is at [https://github.com/Futebot/futezap](https://github.com/Futebot/futezap) and is open-source.

A big thanks to [Felipe Santarelli](https://github.com/fsantarelli) for providing a SIM Card for the Bot, to [Aleph Melo](https://github.com/alephmelo) for Dockerizing it and [Leeeandroo](https://github.com/leeeandroo) for documenting.