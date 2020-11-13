const knex = require('knex')
const config = require('../knexfile')

const configuredKnex = knex(config.development)

module.exports = configuredKnex