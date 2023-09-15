import axios from "axios";
import { PATH } from ".";
import { SurveyInterface } from "../types/survey.interface";

const UpdateSurvey = async (data: SurveyInterface) => {
  const prepareData = {
    identity_client: data.identity_client,
    model_car: data.model_car,
    factors_purchasing: data.factors_purchasing,
    drive_rating: data.drive_rating,
    satisfaction_rating: data.satisfaction_rating,
  };
  const result = await axios.put(
    `${PATH}/${data.id}`,
    { ...prepareData },
    {
      headers: {
        authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJrZXlQaHJhc2UiOiJBcnJveiJ9.KYbWcx1gDX_dNFgTYJ0yAHxQMBV_CRP3cEo-Qh9KqPM",
      },
    }
  );

  console.log(result);

  if (result?.status === 200) return result.data;

  return false;
};

export default UpdateSurvey;
