const express = require('express')
const cors = require('cors')
const path = require('path')
const myInfo = require('./myInfo')

const app = express()
app.use(express.urlencoded({ extended: false }))
app.use(cors())

app.get('/api/v1/myInfo', (req, res) => {
  res.status(200).json({
    success: true,
    error: null,
    body: myInfo,
  })
})

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
