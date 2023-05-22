const fs = require('fs-extra');

fs.copySync('service.html', 'dist/service.html');
fs.copySync('contact.html', 'dist/contact.html');
fs.copySync('document.html', 'dist/document.html');
