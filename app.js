const express = require('express');
const app = express();
app.get('/',(req,res) => res.send('hello canvas'));
app.listen(3000, () => console.log("server connected at port 3000"));