const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('api running')); 

app.use('/api/funding', require('./routes/api/funding/funding'));
app.use('/api/auction/finalize-auction', require('./routes/api/funding/funding'));


const PORT = process.env.PORT || 4000;


app.listen(PORT, () => console.log(`Server started on port ${PORT}`));