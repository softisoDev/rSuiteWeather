import React, {useState} from "react";
import WeatherApiStore from "../store/api/WeatherApiStore";
import {observer} from "mobx-react";
import {Col, Panel, Row} from "rsuite";


export const GetWeather = observer(() => {

    return (
        <Row>
            <Panel shaded bordered bodyFill header={WeatherApiStore.result.city + " " + WeatherApiStore.result.country}>
                <img src={WeatherApiStore.result.weatherImgUrl} height="120"/>
                <Col xs={12} sm={12} md={18} lg={18}>
                    <p><strong>Current temperature: </strong>{WeatherApiStore.result.temp}{WeatherApiStore.result.temp ? "°C" : ""}</p>
                    <p><strong>Current humidity: </strong>{WeatherApiStore.result.humidity}{WeatherApiStore.result.humidity ? "%" : ""}</p>
                    <p><strong>Weather: </strong>{WeatherApiStore.result.weatherType}, {WeatherApiStore.result.weatherDesc}</p>
                </Col>
            </Panel>
        </Row>
    )
});
