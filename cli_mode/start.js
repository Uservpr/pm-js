#!/usr/bin/env node

const commands = require('./command'); // Pastikan ini nge-load command.js dengan benar
const args = process.argv.slice(2);

if (args.length === 0) {
    console.log('Use "pm -help" for available commands.');
    process.exit(1);
}

const command = args[0].replace('-', ''); // Hilangin '-' biar cocok dengan fungsi di command.js

if (commands[command]) {
    commands[command](...args.slice(1));
} else {
    console.log(`Command "${args[0]}" tidak ditemukan. Gunakan "pm -help" untuk melihat daftar perintah.`);
}