import * as API from "./services/launches.js";
import { useState, useEffect } from "react";
// Exportamos de manera nombrada
export function App() {
  const [launches, setLaunches] = useState([]);

  useEffect( () => {
    // La línea X es la forma abreviada de:
    // API.getAllLaunches().then( datos => setLaunches(datos));
    API.getAllLaunches().then(setLaunches);
    console.log("rendered");
  }, []);

  return (
    <>
      <h1>SpaceX Launches</h1>
      <ul>
        {launches.map( (launch) => ( // <- Nótese el paréntesis "("
          <li key={launch.flight_number}>
            {launch.mission_name} ({launch.launch_year})
          </li>
        ))}
      </ul>
    </>  
  );
}
