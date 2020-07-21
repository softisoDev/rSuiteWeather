import React from "react";
import Admin from "../layouts/admin";
import WeatherSingleStore from "../store/WeatherSingleStore";

const WeatherSingle = () => {

    return (
        <Admin pageTitle={WeatherSingleStore.pageTitle}>
            <h5>content of WeatherSingle</h5>
        </Admin>
    )
}

export default WeatherSingle;