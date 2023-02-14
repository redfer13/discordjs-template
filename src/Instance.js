const { readDirRecursive } = require("./lib/filesystem");
const { join } = require("path");

class Instance {
	/**
	 * Initialize Instance
	 * @param {import("discord.js").Client} discord
	 */
	constructor(discord) {
		this.discord = discord;

		this.commands = [];
	}

	/**
	 * Setup the bot and run
	 * @param {string} token
	 */
	async setup(token) {
		this.loadCommands(join(__dirname, "commands"));
		this.loadEvents(join(__dirname, "events"));

		await this.discord.login(token);
	}

	loadCommands(path) {
		for (const file of readDirRecursive(path)) {
			const command = require(file);
			this.commands[command.data.name] = command;
		}
	}

	loadEvents(path) {
		for (const file of readDirRecursive(path)) {
			const event = require(file);
			this.discord[event.once ? "once" : "on"](event.name, (...args) =>
				event.execute(this, ...args)
			);
		}
	}
}

module.exports = Instance;
