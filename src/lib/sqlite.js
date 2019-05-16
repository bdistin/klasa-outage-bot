const { resolve, basename } = require('path');

const sqlite = require('sqlite');
const SQL = require('sql-template-strings');
const fs = require('fs-nextra');

let db;

exports.baseDir = resolve(basename(require.main.filename), '..');

exports.init = async function init() {
	if (db) return;
	await fs.ensureFile(resolve(this.baseDir, 'db.sqlite'));
	db = await sqlite.open(resolve(this.baseDir, 'db.sqlite'));
	await db.run('CREATE TABLE IF NOT EXISTS packets (type TEXT NOT NULL, time INTEGER NOT NULL, data BLOB NOT NULL)');
};

exports.insert = async function insert(type, data) {
	if (!db) return;
	await db.run(SQL`
		INSERT
		INTO packets
			(type, time, data)
		VALUES (${type}, ${Date.now()}, ${JSON.stringify(data)})
	`);
};
