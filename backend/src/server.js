const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');

const server = express();

mongoose.connect('mongodb+srv://semana:semana@omnistack-dw2vz.mongodb.net/tindev?retryWrites=true&w=majority', {
    keepAlive: 1,
    useUnifiedTopology: true,
    useNewUrlParser: true
})
    .then(() => console.log('DB Connected!'))
    .catch(err => {console.log(`DB Connection Error: ${err.message}`);
});

server.use(express.json());
server.use(routes);

server.listen(3333);
