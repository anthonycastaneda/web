---
slug: remote_files
title: Remotely Hosted files in Discord Message Embed
authors: [anthony]
tags: [discord,nerds]
---

 I've been writing a Discord bot for a local guild here in Huntsville.  I've been using Discord.js and Node.js because they seem to have the most documentation, and I'm more familiar with JavaScript than I am Python.

Anyway, I made a slash command to grab a copy of the Garfield Minus Garfield webcomic.  It's hosted on Tumblr unfortunately so the Tumblr API was a nightmare to work with.  I ended up grabbing around 45 *.png files from the web and saving them to my project folder.  All was well.

I could select a random file, but when I tried to place it in the Embed, I realized the Embed requires http or https, no local files allowed.  So I had to quickly figure out how to make a generic webserver and host the files there.  If you look at the code, you'll notice I select a random file from a folder local to my project, but I call a URL with the same filename when it's time to put it in the embed.

```js
const { SlashCommandBuilder } = require("@discordjs/builders");
const randomFile = require("select-random-file");
const { MessageEmbed } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("garfield")
    .setDescription("Garfield Minus Garfield"),
    async execute(interaction) {
    await interaction.deferReply();{
    
      const dir = './static/GnG';
      randomFile(dir, (err, file) => {
        
        console.log(`${file}`)
    
        const garfieldEmbed = new MessageEmbed()
          .setColor("0xd22b2b")
          .setTitle("Garfield Minus Garfield")
          .setDescription(
            "This is a journey deep into the mind of an isolated young everyman as he fights a losing battle against loneliness and depression in a quiet American suburb"
          )
          .setImage(`https://satanbot.anthonycastaneda.com/GnG/${file}`)
          .setURL("https://garfieldminusgarfield.net");
      return interaction.editReply({ embeds: [garfieldEmbed] });
        })
    }
},
}
```