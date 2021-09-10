
exports.up = async function(knex) {
  await knex.schema
    .createTable('projects', table => {
      table.increments('project_id')
      table.string('project_name', 128).notNullable()
      table.string('project_description', 255)
      table.boolean('project_completed')
    })
    .createTable('resources', table => {
      table.increments('resources_id')
      table.string('resource_name').notNullable().unique()
      table.string('resource_description')
    })
    .createTable('tasks', table => {
      table.increments('tasks_id')
      table.string('task_description').notNullable()
      table.string('task_notes')
      table.boolean('task_completed')
      table.integer('project_id')
        .unsigned()
        .notNullable()
        .references('project_id')
        .inTable('projects')
        .onDelete('restrict')
        .onUpdate('restrict')
    })
    .createTable('project_resources', table => {
      table.increments('project_resource_id')
      table.timestamps(true, true)

      table.integer('resources_id')
        .unsigned()
        .notNullable()
        .references('resources_id')
        .inTable('resources')
        .onDelete('restrict')
        .onUpdate('restrict')

      table.integer('project_id')
        .unsigned()
        .notNullable()
        .references('projects_id')
        .inTable('projects')
        .onDelete('restrict')
        .onUpdate('restrict')
    })
};

exports.down = async function(knex) {
  await knex.schema
    .dropTableIfExists('project_resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects')
};
