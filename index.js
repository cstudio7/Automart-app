// Import/require packages
const express = require("express");
const morgan = require("morgan");
const Promise = require("promise");
const cors = require("cors");
// App calling
const app = new express();
const PORT = process.env.PORT || 3000;

// App usage
app.use(morgan("tiny"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(require('./routes/index.routes'));
app.use(cors());

// when a random route is inputed
app.get('*', (req, res) => res.status(200).send({
   message: 'Welcome to Victor Godwin API.'
}));
// Port listen
module.exports = app.listen(PORT);
