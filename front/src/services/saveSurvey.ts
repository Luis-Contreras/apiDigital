import axios from "axios";
import { PATH } from ".";
import { SurveyInterface } from "../types/survey.interface";

const saveSurvey = async (data: SurveyInterface) => {
  const result = await axios.post(
    `${PATH}`,
    { ...data },
    {
      headers: {
        authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJrZXlQaHJhc2UiOiJBcnJveiJ9.KYbWcx1gDX_dNFgTYJ0yAHxQMBV_CRP3cEo-Qh9KqPM",
      },
    }
  );

  if (result?.status === 200) return result.data;

  return false;
};

export default saveSurvey;
