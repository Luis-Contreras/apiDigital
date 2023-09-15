import { test } from "@japa/runner";

test.group("Survey Tests", () => {
  test("create survey", async ({ client }) => {
    const mockData = {
      identity_client: "322",
      model_car: "mazda",
      factors_purchasing: "otro",
      drive_rating: 10,
      satisfaction_rating: 10,
    };
    const response = await client
      .post("/survey")
      .form(mockData)
      .headers({
        authorization: process.env.TOKEN || "",
      });
    response.assertStatus(200);
    response.assertBodyContains({
      identity_client: "322",
    });
  });

  test("List survey should be 1 for limit", async ({ client }) => {
    const response = await client.get("/survey/?page=1&limit=1").headers({
      authorization: process.env.TOKEN || "",
    });
    const length = response.body().data.length;
    response.assert?.equal(length, 1);
  });

  test("get 1 survey by id", async ({ client }) => {
    const response = await client.get("/survey/1").headers({
      authorization: process.env.TOKEN || "",
    });
    const length = response.body().length;
    response.assert?.equal(length, 1);
  });

  test("update survey", async ({ client }) => {
    const mockData = {
      identity_client: "322",
      model_car: "Toyota",
      factors_purchasing: "otro",
      drive_rating: 3,
      satisfaction_rating: 5,
    };
    const response = await client
      .put("/survey/1")
      .form(mockData)
      .headers({
        authorization: process.env.TOKEN || "",
      });
    response.assertStatus(200);
    response.assertBodyContains({
      model_car: "Toyota",
    });
  });

  test("delete survey", async ({ client }) => {
    const response = await client.delete("/survey/1").headers({
      authorization: process.env.TOKEN || "",
    });
    response.assertStatus(200);
    response.assertBodyContains({
      is_deleted: 1,
    });
  });

  test("restore survey", async ({ client }) => {
    const response = await client.put("/survey/restore/1").headers({
      authorization: process.env.TOKEN || "",
    });
    response.assertStatus(200);
    response.assertBodyContains({
      is_deleted: 0,
    });
  });
});
