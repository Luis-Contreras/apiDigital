import axios from "axios";
import { PATH } from ".";
import { useEffect, useState } from "react";
import { MetaInterface } from "./survey.interface";

const ListSurvey = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);
  const [meta, setMeta] = useState<MetaInterface>({
    current_page: 1,
    first_page: 1,
    first_page_url: "",
    last_page: 0,
    last_page_url: "",
    next_page_url: "",
    per_page: 10,
    previous_page_url: null,
    total: 0,
  });

  const getData = async (page: number = 1, limit: number = 10) => {
    setData([]);
    const result = await axios.get(`${PATH}?page=${page}&limit=${limit}`, {
      headers: {
        authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJrZXlQaHJhc2UiOiJBcnJveiJ9.KYbWcx1gDX_dNFgTYJ0yAHxQMBV_CRP3cEo-Qh9KqPM",
      },
    });
    if (result?.data?.data) {
      setData(result.data.data);
      setMeta(result.data.meta);
      setIsLoading(false);
    } else {
      setError(true);
    }
  };

  useEffect(() => {
    const callFnction = async () => {
      await getData();
    };

    callFnction();
  }, []);

  return {
    isLoading,
    error,
    data,
    meta,
    getData,
    setData,
  };
};

export default ListSurvey;
