const express = require('express')
const app = express()
const cors = require('cors')

const temproutes = require('./routes/api/temperature.js')

app.use(express.json({ extended: false}));
app.use(cors());
app.use('/temperature',temproutes);

app.get('/',(req,res) => {
   res.send('run api run');
})

const PORT = 5000;

app.listen(PORT,() => console.log(`Server is running on port ${PORT}`));
