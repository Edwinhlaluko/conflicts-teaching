const express = require('express')
const PORT = 5000


const app = express()

app.get('/edwin', (req, res) => {
    res.send("Hello Edwin!")
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})