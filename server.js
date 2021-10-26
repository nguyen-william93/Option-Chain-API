const express = require('express');
const routes = require('./routes');
const PORT = process.env.PORT || 4001;

const app = express();

app.use(routes);

app.listen(PORT, () => console.log(`Now listening on ${PORT}`));