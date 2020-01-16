const express = require('express');
const app = express();

app.use(express.json({ extended: false }));


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  

app.get('/', (req, res) => res.send('api running')); 

app.use('/api/funding', require('./routes/api/funding/funding'));
app.use('/api/auction/finalize-auction', require('./routes/api/funding/funding'));

app.use('/api/admin', require('./routes/api/admin/admin'));


const PORT = process.env.PORT || 4000;


app.listen(PORT, () => console.log(`Server started on port ${PORT}`));