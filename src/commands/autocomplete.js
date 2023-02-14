const { SlashCommandBuilder } = require("discord.js");

const choices = ["apples", "bananas", "oranges", "grapes", "fruit"];

module.exports = {
	data: new SlashCommandBuilder()
		.setName("autocomplete")
		.addStringOption((option) =>
			option
				.setName("choice")
				.setDescription("auto complete choices")
				.setAutocomplete(true)
		)
		.setDescription("pings the user back"),
	/**
	 * @param {import("../Instance")} instance
	 * @param {import("discord.js").ChatInputCommandInteraction} interaction
	 */
	exec: async function (instance, interaction) {
		interaction.reply("pong");
	},

	/**
	 *
	 * @param {improt} instance
	 * @param {import("discord.js").AutocompleteInteraction} interaction
	 */
	autocomplete: async function (instance, interaction) {
		const focus = interaction.options.getFocused();
		const filtered = choices
			.filter((choice) => choice.startsWith(focus))
			.map((choice) => ({ name: choice, value: choice }));
		interaction.respond(filtered);
	},
};
