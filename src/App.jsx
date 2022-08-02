import * as API from "./services/launches.js";
import { HiCalendar } from "react-icons/hi";
import { Heading, Box, Image, Flex, Text, Spacer, Tag } from '@chakra-ui/react';
import dayjs from "dayjs";
import "dayjs/locale/es"
import { useState, useEffect } from "react";
import logo from "./assets/spacex-vector-logo.png";
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
      <Image src={logo} width={300} m={4} alt="Logo SpaceX en fondo blanco" />
      <Heading as="h1" size="lg" m={4}>SpaceX Launches</Heading>
        <section>
          {launches.map( (launch) => ( // <- Nótese el paréntesis "(" en vez de "{"
            <Box key={launch.flight_number} bg="gray.100" p={4} m={4} borderRadius="lg">
              <Flex display="flex">
                <Text fontSize="xl">
                  Mission <strong>{launch.mission_name}</strong> ({launch.launch_year})
                </Text>
                <Spacer />
                <Tag bg={launch.launch_success ? "green.400" : "red.400"} color="white">
                  {launch.launch_success ? "SUCCESS" : "FAILURE"}
                </Tag>
              </Flex>

              <Flex align="center">
                <HiCalendar />
                <Text fontSize="sm" ml={1}>
                  {dayjs(launch.launch_date_local.split("T")[0])
                  .locale("es")
                  .format('D [de] MMMM [de] YYYY')}
                </Text>
              </Flex>
            </Box>
          ))}
        </section>
    </>  
  );
}
