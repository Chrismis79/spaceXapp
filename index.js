const express = require('express');
const cors = require('cors');
const graphqlHTTP = require('express-graphql');
const path = require('path');   //no install needed, lets you work with file paths.

const schema = require('./schema')
const app = express();
app.use(cors());

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true,
}));

app.use(express.static('public'));
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 5050;

app.listen(PORT, () => console.log(`***Server listening on port ${PORT}****`));
