const express = require('express');
const mongoose = require('mongoose');
const routes =  require('./routes')

const app = express();

mongoose.connect('mongodb+srv://vitor:vitor@cluster0-bcclm.azure.mongodb.net/omnistack10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
mongoose.set('useCreateIndex', true);

app.use(express.json());    
app.use(routes);

app.listen(3333);
