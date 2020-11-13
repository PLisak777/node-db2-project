const server = require('./server')
const db = require('./data/db-config')

const port = process.env.PORT || 5000

server.listen(port, () => console.log(`** Listening on port ${port} **`))

server.get('/api/cars', async (req, res) => {
    try {
        const cars = await db('cars')
        res.status(200).json(cars)
    } catch (err) {
        res.status(500).json({
            message: 'Unable to retrieve database',
            error: err
        })
    }
})