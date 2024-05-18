import { useState } from "react";

import Action from "./components/pages/actionpage/action";
import Recomendation from "./components/pages/reccommendation/recom";
import FirstPage from "./components/pages/Homepage/firstpage";
import pool from "../server/database";

function App() {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:7352")
      .then((response) => {
        setPlaces(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the places!", error);
      });
  }, []);
  return (
    <div>
      <FirstPage />
    </div>
  );
}

export default App;
