import { useState } from "react";

const useUrl = (url: any) => {
  const [data, setData] = useState(null);

  const handelApi = () => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  };
  return [data, handelApi];
};

export default useUrl;
