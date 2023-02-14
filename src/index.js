const { Client, IntentsBitField } = require("discord.js");
const Instance = require("./Instance");

const client = new Client({
	intents: [IntentsBitField.Flags.GuildVoiceStates],
});

const instance = new Instance(client);

instance.setup(process.env.DISCORD_TOKEN);
