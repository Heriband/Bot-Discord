const fs = require('fs');

const { SlashCommandBuilder } = require('@discordjs/builders');
const { CommandInteraction } = require('discord.js');

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));



module.exports = {
    data: new SlashCommandBuilder()
        .setName('list')
        .setDescription('list all command'),
    /**
     * 
     * @param {CommandInteraction} interaction 
     */
    async execute(interaction) {
        var res = "";
        for(var el of commandFiles)
            res +=         '- /'  + el.replace(".js","") + '\n';
        await interaction.reply(res);

    }
}