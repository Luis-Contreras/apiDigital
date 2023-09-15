import axios from "axios";
import { PATH } from ".";

const deleteSurvey = async (id: number) => {
  const result = await axios.delete(`${PATH}/${id}`, {
    headers: {
      authorization:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJrZXlQaHJhc2UiOiJBcnJveiJ9.KYbWcx1gDX_dNFgTYJ0yAHxQMBV_CRP3cEo-Qh9KqPM",
    },
  });

  if (result?.status === 200) return result.data;

  return false;
};

export default deleteSurvey;
