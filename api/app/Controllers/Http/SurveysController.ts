import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { schema } from "@ioc:Adonis/Core/Validator";
import Survey from "App/Models/Survey";

export default class SurveysController {
  public async getAll({ request }: HttpContextContract) {
    const page = request.input("page", 1);
    const limit = request.input("limit", 10);

    const allSurvey = await Survey.query()
      .where("is_deleted", 0)
      .paginate(page, limit);
    return allSurvey;
  }

  public async get({ response, params }: HttpContextContract) {
    const survey = await Survey.query()
      .where("id", params.id)
      .andWhere("is_deleted", 0);

    response.abortIf(survey.length === 0, "Survey not found", 404);

    return response.json(survey);
  }

  public async create({ request, response }: HttpContextContract) {
    const payload = await request.validate({
      schema: schema.create({
        identity_client: schema.string(),
        model_car: schema.string(),
        factors_purchasing: schema.string(),
        drive_rating: schema.number(),
        satisfaction_rating: schema.number(),
      }),
    });

    const survey = await Survey.create(payload);

    return response.json(survey);
  }

  public async update({ request, response, params }: HttpContextContract) {
    const survey = await Survey.query()
      .where("id", params.id)
      .andWhere("is_deleted", 0);

    response.abortIf(survey.length === 0, "Survey not found", 404);

    const payload = await request.validate({
      schema: schema.create({
        identity_client: schema.string(),
        model_car: schema.string(),
        factors_purchasing: schema.string(),
        drive_rating: schema.number(),
        satisfaction_rating: schema.number(),
      }),
    });

    const updatedSurvey = await Survey.updateOrCreate(
      { id: params.id },
      payload
    );

    return response.json(updatedSurvey);
  }

  public async delete({ response, params }: HttpContextContract) {
    const survey = await Survey.find(params.id);

    response.abortIf(!survey, "Survey not found", 404);

    const updatedSurvey = await Survey.updateOrCreate(
      { id: params.id },
      { is_deleted: 1 }
    );

    return response.json(updatedSurvey);
  }

  public async restore({ response, params }: HttpContextContract) {
    const survey = await Survey.find(params.id);

    response.abortIf(!survey, "Survey not found", 404);

    const updatedSurvey = await Survey.updateOrCreate(
      { id: params.id },
      { is_deleted: 0 }
    );

    return response.json(updatedSurvey);
  }
}
