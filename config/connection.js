const {connect, connection} = require('mongoose');

connect('mongodb://localhost:27017/developersApplication', {
    newUrlParser: true,
    useUnifiedTopology: true,
});
module.exports = connection;