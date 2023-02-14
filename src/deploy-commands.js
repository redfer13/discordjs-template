const { join } = require("path");

const { REST, Routes } = require("discord.js");

const { readDirRecursive } = require("./lib/filesystem");

const token = process.env.DISCORD_TOKEN;
const applicationId = process.env.APPLICATION_ID;
const guildId = process.env.GUILD_ID;

const commandFile = join(__dirname, "commands");

const commands = [];
for (const file of readDirRecursive(commandFile)) {
	const { data } = require(file);
	commands.push(data.toJSON());
}

const rest = new REST({ version: "10" }).setToken(token);

(async () => {
	try {
		console.log(
			`Started refreshing ${commands.length} application (/) commands.`
		);

		const data = await rest.put(
			guildId
				? Routes.applicationGuildCommands(applicationId, guildId)
				: Routes.applicationCommands(applicationId),
			{ body: commands }
		);

		console.log(
			`Successfully reloaded ${data.length} application (/) commands.`
		);
	} catch (error) {
		console.error(error);
	}
})();
