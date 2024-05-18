import { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  const getData = () => {
    const results = axios
      .get("https://disease.sh/v3/covid-19/vaccine/coverage/countries?lastdays=1")
      .then((res) => {
        console.log(res);
        const formattedDates = Object.keys(res.data);
        const formattedValues = Object.values(res.data);
        setData(formattedDates);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <p>{data}</p>
      <h1>Hi api</h1>
      <button onClick={getData}> Click Me</button>
    </>
  );
}

export default App;