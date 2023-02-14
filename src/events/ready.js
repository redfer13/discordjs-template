const { Events } = require("discord.js");

module.exports = {
	name: Events.ClientReady,
	once: true,
	/**
	 * Execute On Ready
	 * @param {import("../Instance")} instance
	 * @param {import("discord.js").Client} client
	 */
	// eslint-disable-next-line no-unused-vars
	exec: async function (instance, client) {
		console.log("[client] has started");
	},
};
