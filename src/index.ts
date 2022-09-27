import { ActivityType, CommandInteraction} from "discord.js";

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
	console.log(`The bot is in ${client.guilds.cache.size} servers.`)

	client.user.setActivity('Guess who is back!', { type: ActivityType.Playing });
});

client.on('interactionCreate', async (interaction : CommandInteraction) => {
	if (!interaction.isChatInputCommand()) return;

	const { commandName } = interaction;

	if (commandName === 'ping') {
		await interaction.reply(`Bot Latency: ${Date.now() - interaction.createdTimestamp}ms. API Latency: ${Math.round(client.ws.ping)}ms`);
	} else if (commandName === 'server') {
		await interaction.reply(`Server name: ${interaction.guild?.name}\nMember count: ${interaction.guild?.memberCount}`);
	} else if (commandName === 'user') {
		await interaction.reply(`Your tag: ${interaction.user.tag}\nAccount created: ${interaction.user.createdAt.toLocaleString('en-US')}`);
	}
});

client.login(process.env.DISCORD_TOKEN);