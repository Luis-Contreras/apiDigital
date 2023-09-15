import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class extends BaseSchema {
  protected tableName = "surveys";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id");
      table.string("identity_client");
      table.string("model_car");
      table.string("factors_purchasing");
      table.integer("drive_rating");
      table.integer("satisfaction_rating");
      table.integer("is_deleted").notNullable().defaultTo(0);
      table.timestamp("created_at", { useTz: true }).notNullable();
      table.timestamp("updated_at", { useTz: true }).notNullable();
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
