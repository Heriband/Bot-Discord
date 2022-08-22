const { SlashCommandBuilder } = require('@discordjs/builders');
const { CommandInteraction } = require('discord.js');

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }



module.exports = {
    data: new SlashCommandBuilder()
        .setName('play')
        .setDescription('play best game ever')
        .addStringOption(option => 
            option.setName('choice')
            .setDescription('Le choix à faire')
            .setRequired(true)
            .addChoices(
            { name: 'Pierre',  value: "Pierre"},
            { name: 'Feuille',  value: "Feuille"},
            { name: 'Ciseau',  value: "Ciseau"},
            { name: 'Puit',  value: "Puit"}

            )),

    /**
     * 
     * @param {CommandInteraction} interaction 
     */
    async execute(interaction) {

        const choice = interaction.options.getString('choice');

        var opposantChoice = getRandomInt(3) + 1
        var opposantChoiceRes = ""
        if (opposantChoice == 1)
            opposantChoiceRes = "Pierre"

        if (opposantChoice == 2)
            opposantChoiceRes = "Feuille"

        if (opposantChoice == 3)
            opposantChoiceRes = "Ciseau"

        var win = 0 ;
        
        if (choice == "Pierre"){
            if (opposantChoiceRes == "Ciseau")
                win = 1
            if (opposantChoiceRes == "Feuille")
                win = -1
        }

        if (choice == "Feuille"){
            if (opposantChoiceRes == "Pierre")
                win = 1
            if (opposantChoiceRes == "Ciseau")
                win = -1
        }

        if (choice == "Ciseau"){
            if (opposantChoiceRes == "Feuille")
                win = 1
            if (opposantChoiceRes == "Pierre")
                win = -1
        }


        if (choice  == "Puit")
            await interaction.reply('fdp le puit ca existe pas !');

        else if (choice == opposantChoice)
            await interaction.reply('Egalité \n' + "We play : " +  opposantChoiceRes);
        
    
        else if (win > 0)
            await interaction.reply("You Win \n You play : " + choice + "    I play : " + opposantChoiceRes);
        else 
        await interaction.reply("You Loose \n You play : " + choice + "    I play : " + opposantChoiceRes);

    }
}