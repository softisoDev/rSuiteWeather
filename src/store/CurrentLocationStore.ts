import {action, observable} from "mobx";

class CurrentLocationStore {

    private _currentLocation;


    setCurrentLocation = (value: Position) => {
        this._currentLocation = value
    }

    getCurrentLocation = () => {
        return this._currentLocation;
    }


    constructor() {
        navigator.geolocation.getCurrentPosition((position)  => {
            this.setCurrentLocation(position);
        });
    }
}

export default new CurrentLocationStore();