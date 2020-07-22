import React, {Component, useEffect} from "react";
import CurrentLocationStore from "../store/CurrentLocationStore";
import {observer} from "mobx-react";

const CurrentLocation = observer(() => {

    return (
        <div>
            <h4>{CurrentLocationStore.currentLocation() ? CurrentLocationStore.currentLocation().coords.latitude : ""}</h4>
        </div>
    );
});

export default CurrentLocation;