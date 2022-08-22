const { Client, Collection, Intents } = require('discord.js');
const fs = require('fs')
const { token } = require('./config.json');
const handleCommand = require('./command');
const client = new Client({intents : []});
// const token = "MTAxMDgyMDM2Mjg2NDQ0MzQ5NA.GesC82.dyFeC3bleLA_YCuYeXFJGTgnfx-mnGaCt7LO4U";

client.commands = new Collection();

client.once('ready', () => {
   console.log("bot launch");
});


const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.data.name, command);
}


client.on('interactionCreate', async interaction => {
    console.log("launch comand")
    if (interaction.isCommand()) handleCommand(client, interaction);
});


client.login(token);
