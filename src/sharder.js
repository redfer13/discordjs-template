const { ShardingManager } = require("discord.js");

const manager = new ShardingManager("index.js", {
	token: process.env.DISCORD_TOKEN,
});

manager.on("shardCreate", (shard) => {
	console.log(`[Sharding Manager] Spawned Shard ${shard.id}`);
});

manager.spawn();
