
exports.up = function(knex, Promise) {
  return knex.schema.dropTable('quantitys')
};

exports.down = function(knex, Promise) {
    return knex.schema.createTable('quantitys', tbl => {
        tbl.increments()
    
        // FK
        tbl
            .integer('recipe_id')
            .notNullable()
            .references('id')
            .inTable('recipes')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
      
        // FK
        tbl
        .integer('ingredient_id')
        .notNullable()
        .references('id')
        .inTable('ingredients')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')

        tbl
        .integer('quantity')
        .notNullable();
    
    })
};
