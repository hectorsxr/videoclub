const express = require('express');
const cors = require('cors');
const router = require('./routes');
const bodyParser = require('body-parser');

const app = express();

app.set('port', process.env.PORT || 4000);
app.use(cors());
app.use(bodyParser.json());
app.use(router);

app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});