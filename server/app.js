const express = require('express');

const graphqlHTTP = require('express-graphql');

const cors = require('cors');

const schema = require('./schema/schema');
const mongoose = require('mongoose');

const app = express();

//allow cros-origin requests
app.use(cors());

mongoose.connect('mongodb+srv://karim:lasauce2425@clusterkarim-cqrrv.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.once('open', () => {
    console.log('connected');
})

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log('listening in port 4000');
});