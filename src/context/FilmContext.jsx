import { useState, useEffect } from "react";
import { createContext } from "react";
import axios from "axios";

const FilmsContext = createContext({});

function FilmsProvider({ children }) {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const handleRequest = async () => {
      const response = await axios.get(
        `https://watchit-api.onrender.com/shows?q=${search}`
      );
      setData(response.data);
      console.log(response);
    };
    if (!search) {
      handleRequest();
    }

    if (search.length >= 3) {
      handleRequest();
    }
    if (search.length === 0) {
      setData([]);
    }
  }, [search]);
  const filmsProps = {
    data,
    search,
    setSearch,
  };
  return (
    <FilmsContext.Provider value={filmsProps}>{children}</FilmsContext.Provider>
  );
}

export { FilmsContext, FilmsProvider };
