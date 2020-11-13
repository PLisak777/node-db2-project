const server = require('./server');
const db = require('./data/db-config');

const port = process.env.PORT || 5000;

server.listen(port, () => console.log(`** Listening on port ${port} **`));

server.get('/api/cars', async (req, res) => {
	try {
		const cars = await db('cars');
		res.status(200).json(cars);
	} catch (err) {
		res.status(500).json({
			message: 'Unable to retrieve database',
			error: err,
		});
	}
});

server.post('/api/cars', async (req, res) => {
	try {
		const { vin, make, model, mileage } = req.body;
		if (vin && make && model && mileage) {
			const id = await db('cars').insert(req.body);
			res.status(201).json(await db('cars').where({ id })[0]);
		} else {
			res.status(400).json({
				message: `Please provide the following: {${!vin && 'vin'}, ${
					!make && 'make'
				}, ${!model && 'model,'} ${!mileage && 'mileage'}}`,
			});
		}
	} catch (err) {
		res.status(500).json({
			message: 'Something went wrong!',
			error: err,
		});
	}
});
