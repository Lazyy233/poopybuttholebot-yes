const Discord = require("discord.js")

module.exports = {
    name: "membercount",
    category: "info",
    description: "shows server information",
    run: (client, message, args) => {

      message.delete()

        let Embed = new Discord.MessageEmbed()
            .setColor(0xdfa914)
            .setTitle("Member Count:")
            .setColor(0x5126c7)
            .setDescription(`${message.guild.memberCount}`)
            .setFooter("Made by @Lazyy#7933")
        message.channel.send(Embed);
    }
}
