import { DateTime } from "luxon";
import { BaseModel, column } from "@ioc:Adonis/Lucid/Orm";

export default class Survey extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public identity_client: string;

  @column()
  public model_car: string;

  @column()
  public factors_purchasing: string;

  @column()
  public drive_rating: number;

  @column()
  public satisfaction_rating: number;

  @column()
  public is_deleted?: number;

  @column.dateTime({ autoCreate: true })
  public createdAt?: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt?: DateTime;
}
