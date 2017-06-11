const express = require('express');
const app = express();

import { getStatus, setMode } from './functions';

app.get('/', (req, res) => res.send(200, { api: 'v1' }));
app.get('/getStatus', getStatus);
app.get('/setMode', setMode);

app.listen(9937, function () {
  console.log('BGH smart API listening on port 9937!');
});
