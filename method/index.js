const fs = require('fs');
const path = require('path');

const methods = {};

// Baca semua file di folder ini
fs.readdirSync(__dirname).forEach(file => {
    if (file !== 'index.js' && file.endsWith('.js')) {
        const methodName = file.replace('.js', '').toLowerCase(); // Fix: buat lowercase
        methods[methodName] = require(path.join(__dirname, file));
    }
});

module.exports = methods;