const mongoose = require('mongoose');

async function connect() {
    const db = await mongoose.connect('mongodb://localhost:27017/asignment', {
        family:4 
    });
    console.log(db.connection.readyState); // log trạng thái kết nối của mongodb
    console.log('FINE')
}

module.exports = {connect};
