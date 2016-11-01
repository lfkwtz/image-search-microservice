const express = require('express');

const app = express();
const routes = require('./routes/index');
app.use('/', routes);

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
