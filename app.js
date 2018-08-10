const express = require('express');

const app = express();

app.get('/home', (req, res)=>{
  res.send('Hello COE');
});

// start server
app.listen(4000, () => {
  console.log('server started at port 4000');
});

