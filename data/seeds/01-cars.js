
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {
          vin: '1jf982798ca7392734',
          make: 'chevy',
          model: 'impala',
          mileage: '68455'
        }
      ]);
    });
};
