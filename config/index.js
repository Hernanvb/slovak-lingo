var configValues = require('./dbConfig');

module.exports = {
    getDbConnectionString: function (dev) {
        if (dev) {
            return 'mongodb://localhost:27017/slovak-app';
        } else {
            return 'mongodb://' + configValues.uname + ':' + configValues.pass + '@ds249311.mlab.com:49311/slovak-app';
        }
    }
}