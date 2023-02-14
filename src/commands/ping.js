const { SlashCommandBuilder } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("ping")
		.setDescription("pings the user back"),

	/**
	 * @param {import("../Instance")} instance
	 * @param {import("discord.js").ChatInputCommandInteraction} interaction
	 */
	exec: async function (instance, interaction) {
		interaction.reply("pong");
	},
};
