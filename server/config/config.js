var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
	development: {
		db: 'mongodb://localhost/mainlycodes',
		rootPath: rootPath,
		port: process.env.PORT || 3030
	},
	production: {
		db: 'mongodb://ngiron:zzgbabq@ds011024.mlab.com:11024/mainlycodes',
		rootPath: rootPath,
		port: process.env.PORT || 80
	}
}