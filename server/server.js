const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/register', (req,res) => {
	console.log(req.data);
});

app.listen(8000, () => {
	console.log('Server is running on port 8000.');
});
