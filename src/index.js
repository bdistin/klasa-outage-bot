const { Client } = require('klasa');
const { token } = require('./config.json');

new Client({
	shardCount: 'auto',
	console: { useColor: true },
	consoleEvents: { debug: true },
	disabledCorePieces: [
		'commands',
		'monitors',
		'finalizers',
		'inhibitors',
		'tasks',
		'languages',
		'extendables',
		'arguments',
		'providers'
	],
	disabledEvents: [
		'GUILD_MEMBER_ADD',
		'GUILD_MEMBER_REMOVE',
		'GUILD_MEMBER_UPDATE',
		'GUILD_MEMBERS_CHUNK',
		'GUILD_INTEGRATIONS_UPDATE',
		'GUILD_ROLE_CREATE',
		'GUILD_ROLE_DELETE',
		'GUILD_ROLE_UPDATE',
		'GUILD_BAN_ADD',
		'GUILD_BAN_REMOVE',
		'CHANNEL_CREATE',
		'CHANNEL_DELETE',
		'CHANNEL_UPDATE',
		'CHANNEL_PINS_UPDATE',
		'MESSAGE_CREATE',
		'MESSAGE_DELETE',
		'MESSAGE_UPDATE',
		'MESSAGE_DELETE_BULK',
		'MESSAGE_REACTION_ADD',
		'MESSAGE_REACTION_REMOVE',
		'MESSAGE_REACTION_REMOVE_ALL',
		'USER_UPDATE',
		'USER_SETTINGS_UPDATE',
		'PRESENCE_UPDATE',
		'VOICE_STATE_UPDATE',
		'TYPING_START',
		'VOICE_STATE_UPDATE',
		'VOICE_SERVER_UPDATE',
		'WEBHOOKS_UPDATE'
	]
}).login(token);
