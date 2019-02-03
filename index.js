const express = require('express')
const app = express()

app.get('/', function (req, res) {
	res.json({
		status: 'This is a really simple node application that I want to test"'
	})
})

app.listen(3000, err => {
	if(err) throw err;
	console.log('Server is listening')
})


