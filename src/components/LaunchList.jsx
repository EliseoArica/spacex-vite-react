import {useState, useEffect } from 'react';
import { Heading } from '@chakra-ui/react';

import * as API from "../services/launches";
import { LaunchItem } from "./LaunchItem";

export function LaunchList() {
    const [ launches, setLaunches ] = useState([]);

    useEffect( () => {
        API.getAllLaunches().then(data => {
            setLaunches(data);
        });
    }, []);

    return (
        <>
            <Heading as="h1" size="lg" m={4}>SpaceX Launches</Heading>
            <section>
                {launches.map( (launch) => ( // <- Nótese el paréntesis "(" en vez de "{"
                    <LaunchItem key={launch.flight_number} {...launch} />
                ))}
            </section>
        </>
    )
}

