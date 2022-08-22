const { guildId } = require('./../config.json');
const Discord = require('discord.js');
const client = new Discord.Client({intents : []});
console.log(guildId)

const list = client.guilds.cache.get(guildId);
console.log(list)
var nb = list.memberCount;


// // list.(member => {console.log(member.user.username); nb++} ); 

const { SlashCommandBuilder } = require('@discordjs/builders');
const { CommandInteraction } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('board')
        .setDescription('classement'),
    /**
     * 
     * @param {CommandInteraction} interaction 
     */
    async execute(interaction) {
        await interaction.reply('nombres de menbers : ' + nb);

    }
}