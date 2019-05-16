const { Event } = require('klasa');
const db = require('../lib/sqlite');

module.exports = class extends Event {

	constructor(...args) {
		super(...args, { emitter: 'ws' });
	}

	async run(data) {
		await db.insert('GUILD_DELETE', data);
	}

	init() {
		return db.init();
	}

};
