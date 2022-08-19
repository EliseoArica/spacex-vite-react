import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import * as API from "../services/launches";

export function LaunchDetail() {
    const { launchId } = useParams();
    const [ launch, setLaunch] = useState({});

    useEffect( () => {
        API.getLaunchByFlightNumber(launchId).then( data => {
            setLaunch(data);
        });
    }, []);

    return (
        <div>
            <h1>Información del vuelo</h1>
            <p>
                Mission Name: {launch.mission_name}
            </p>
        </div>
    )
}