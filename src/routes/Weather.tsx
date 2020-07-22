import React from "react";
import Admin from "../layouts/admin";
import WeatherStore from "../store/WeatherStore";
import {Col, Grid, Row, InputGroup, Input, Icon} from "rsuite";
import InputGroupWidthButton from "../components/FormElements/InputGroupWidthButton";
import FormElementsStore from "../store/FormElementsStore";
import {GetWeather} from "../api/WeatherApi";
import {observer} from "mobx-react";
import WeatherApiStore from "../store/api/WeatherApiStore";
import {geolocated} from "react-geolocated";

const handleClick = () => {
    WeatherApiStore.makeRequest(FormElementsStore.inputValue);
}

const getUserLocation = geolocated({
    positionOptions: {
        enableHighAccuracy: true,
        maximumAge: 0,
        timeout: Infinity,
    },
    userDecisionTimeout: 5000,
    watchPosition: false,
    suppressLocationOnMount: false,
    geolocationProvider: navigator.geolocation,
    isOptimisticGeolocationEnabled: true,
});

const Weather = observer(() => {

    return (
        <Admin pageTitle={WeatherStore.pageTitle}>
            <Grid fluid>
                <Row className="show-grid">
                    <Col xs={24} sm={24} md={8} lg={6}></Col>
                    <Col xs={24} sm={12} md={8} lg={12}>
                        <InputGroupWidthButton
                            inputProps={{
                                placeholder: "Search city...",
                            }}

                            inputGroupProps={{
                                size: "lg",
                            }}
                            onClickIcon={handleClick}
                        />
                    </Col>
                    <Col xs={24} sm={12} md={8} lg={6}></Col>
                </Row>

                <Row>
                  <Col xs={24} sm={24} md={24} lg={24} className="mt-3">
                      <GetWeather/>
                  </Col>
                </Row>
            </Grid>
        </Admin>
    )
});

export default Weather;