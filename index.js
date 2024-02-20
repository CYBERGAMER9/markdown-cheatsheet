const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keepAlive = require('./server.js');
keepAlive();

client.on('ready', async () => {
    console.clear();
    console.log(`${client.user.tag} - rich presence started!`);

    const r = new Discord.RichPresence()
        .setApplicationId('1099642415754776628')
        .setType('STREAMING')
        .setURL('https://twitch.tv/cyber_winner')
        .setState('Idle')
        .setName('Chill with cyber')
        .setDetails('CHILL WITH CYBER')
        .setAssetsLargeImage('https://media.discordapp.net/attachments/1169491681507278863/1209391005648818217/oshi-no-ko-idol.gif?ex=65e6c025&is=65d44b25&hm=dfb968338ef8960d077ef6b9bf6a096a64f294b051f814d50cf5247b8a67e41b&')
        .setAssetsLargeText('WATCHING YOUTUBE')
        .setAssetsSmallImage('https://cdn.discordapp.com/emojis/1101758417720328203.webp?size=96&quality=lossless')
        .setAssetsSmallText('Verified')
        .addButton('DISCORD BOT', 'https://discord.com/api/oauth2/authorize?client_id=1174640185380716554&permissions=8&scope=bot+applications.commands')
        .addButton('Discord Server', 'https://discord.com/invite/K99nfhCyHx');

    client.user.setActivity(r);
    client.user.setPresence({ status: 'dnd' });
});

client.login(process.env.TOKEN);












