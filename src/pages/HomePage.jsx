import { useEffect, useState } from "react";
import API from "../services/api";

const HomePage = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    API.get("/")
      .then((response) => setMessage(response.data.message))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1>{message || "Cargando..."}</h1>
    </div>
  );
};

export default HomePage;
