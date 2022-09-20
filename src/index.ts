const { Client, GatewayIntentBits } = require('discord.js');
require('dotenv').config();

const client = new Client({ 
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,
	],
});

client.once('ready', () => {
	console.log('i liek kiwis=====');
});

client.login(process.env.DISCORD_TOKEN);