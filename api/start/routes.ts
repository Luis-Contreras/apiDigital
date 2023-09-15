import Route from "@ioc:Adonis/Core/Route";
import swagger from "Config/swagger";
import AutoSwagger from "adonis-autoswagger";

Route.get("/swagger", async () => {
  return AutoSwagger.docs(Route.toJSON(), swagger);
});

Route.get("/docs", async () => {
  return AutoSwagger.ui("/swagger");
});
Route.get("/survey", "SurveysController.getAll").middleware("auth");
Route.get("/survey/:id", "SurveysController.get").middleware("auth");
Route.post("/survey", "SurveysController.create").middleware("auth");
Route.put("/survey/:id", "SurveysController.update").middleware("auth");
Route.delete("/survey/:id", "SurveysController.delete").middleware("auth");
Route.put("/survey/restore/:id", "SurveysController.restore").middleware(
  "auth"
);
