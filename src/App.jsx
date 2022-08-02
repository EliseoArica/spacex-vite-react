import * as API from "./services/launches.js";
import { Heading, Image } from '@chakra-ui/react';
import { useState, useEffect } from "react";
import logo from "./assets/spacex-vector-logo.png";
import { LaunchItem } from "./components/LaunchItem";


// Exportamos de manera nombrada
export function App() {
  const [launches, setLaunches] = useState([]);

  useEffect( () => {
    // La línea X es la forma abreviada de:
    // API.getAllLaunches().then( datos => setLaunches(datos));
    API.getAllLaunches().then(setLaunches);
  }, []);

  return (
    <>
      <Image src={logo} width={300} m={4} alt="Logo SpaceX en fondo blanco" />
      <Heading as="h1" size="lg" m={4}>SpaceX Launches</Heading>
        <section>
          {launches.map( (launch) => ( // <- Nótese el paréntesis "(" en vez de "{"
            <LaunchItem key={launch.flight_number} {...launch} />
          ))}
        </section>
    </>  
  );
}
