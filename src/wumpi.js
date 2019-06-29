const Discord = require('discord.js');
const {bot_token} = require('./config.json');
const ws = require('../src/ws');
const client = new Discord.Client({
    disableEveryone: true
});

require("./lib/functions")(client);

const WS = new ws(5665, client);
module.exports.client = client;

/* Bot authorization **/
// noinspection JSIgnoredPromiseFromCall
client.login(bot_token);