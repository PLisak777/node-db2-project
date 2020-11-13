exports.up = function (knex) {
	return knex.schema.table('cars', (tbl) => {
		tbl.string('transmission');
		tbl.string('title');
	});
};

exports.down = function (knex) {
	return knex.schema.table('cars', (tbl) => {
		tbl.dropColumn('transmission', 'title');
	});
};
