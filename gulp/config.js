var yaml = require('js-yaml');
var fs = require('fs');

module.exports = yaml.safeLoad(fs.readFileSync('./config/config.gulp.yml', 'utf8'));
