const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
var { graphql, buildSchema } = require('graphql');
var graphqlHTTP = require('express-graphql');
var buildSchema = require('./graphql/schema')
var routes = require('./graphql/resolver');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/graphql', graphqlHTTP({
  schema: buildSchema,
  rootValue: routes,
  graphiql: true,
}));

const PORT = 3000;



mongoose.connect(`mongodb+srv://Nabil:Bejaia954@cluster0-sfcbp.gcp.mongodb.net/test?retryWrites=true&w=majority`,{useNewUrlParser: true, useUnifiedTopology: true}).then(result => {
    app.listen(PORT);
    console.log('running on port: ' + PORT);
}).catch(err => console.log(err));


module.exports = app;


