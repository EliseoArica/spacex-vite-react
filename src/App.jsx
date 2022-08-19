import { Routes, Route } from "react-router-dom";
import { Image } from '@chakra-ui/react';
import logo from "./assets/spacex-vector-logo.png";
import { LaunchList } from "./components/LaunchList";
import { LaunchDetail } from "./components/LaunchDetail";


// Exportamos de manera nombrada
export function App() {
  return (
    <>
      <Image src={logo} width={300} m={4} alt="Logo SpaceX en fondo blanco" />
      <Routes>
        <Route path="/" element={<LaunchList />} />
        <Route path="launch/:launchId" element={<LaunchDetail />} />
      </Routes>
    </>
  );
}
