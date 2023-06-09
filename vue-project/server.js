const express = require('express');
const history = require('connect-history-api-fallback');
const app = express();

app.use(history());
app.use(express.static(__dirname + '/dist'));

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
