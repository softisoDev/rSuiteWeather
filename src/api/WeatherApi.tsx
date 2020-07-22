import React, {useState} from "react";
import axios from "axios";
import WeatherApiStore from "../store/api/WeatherApiStore";
import {observer} from "mobx-react";
import {Panel} from "rsuite";


export const GetWeather = observer(() => {

    return (
        <Panel header={WeatherApiStore.result.city + ", " + WeatherApiStore.result.country} bordered>
            <p><strong>Current temperature: </strong>{WeatherApiStore.result.temp}{WeatherApiStore.result.temp ? "°C": ""}</p>
            <p><strong>Current humidity: </strong>{WeatherApiStore.result.humidity}{WeatherApiStore.result.humidity ? "%" : ""}</p>
            <p><strong>Weather: </strong>{WeatherApiStore.result.weatherType}, {WeatherApiStore.result.weatherDesc}</p>
        </Panel>
    )
});
