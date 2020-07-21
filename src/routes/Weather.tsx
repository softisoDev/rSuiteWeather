import React from "react";
import Admin from "../layouts/admin";
import WeatherStore from "../store/WeatherStore";
import {Col, Grid, Row, InputGroup, Input, Icon} from "rsuite";
import InputGroupWidthButton from "../components/FormElements/InputGroupWidthButton";
import FormElementsStore from "../store/FormElementsStore";
import axios from "axios";
import {GetWeather} from "../api/WeatherApi";


const handleClick = (e) => {
    console.log(FormElementsStore.inputValue);
}

const Weather = () => {

    return (
        <Admin pageTitle={WeatherStore.pageTitle}>
            <Grid fluid>
                <Row className="show-grid">
                    <Col xs={24} sm={24} md={8} lg={6}></Col>
                    <Col xs={24} sm={12} md={8} lg={12}>
                        <InputGroupWidthButton
                            inputProps={{
                                placeholder: "Search city...",
                                id: 'cityName',
                            }}

                            inputGroupProps={{
                                size: "lg",
                            }}
                            onClickIcon={handleClick}
                        />
                    </Col>
                    <Col xs={24} sm={12} md={8} lg={6}>
                        <GetWeather/>
                    </Col>
                </Row>
            </Grid>
        </Admin>
    )
}

export default Weather;