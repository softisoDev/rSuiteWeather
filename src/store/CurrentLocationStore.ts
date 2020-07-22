import {action, observable} from "mobx";

class CurrentLocationStore {

    private _currentLocation;

    setCurrentLocation = (value: Position) => {
        console.log(2);
        this._currentLocation = value
    }

    getCurrentLocation = () => {
        console.log(3);
        return this._currentLocation;
    }


    constructor() {
        console.log(1);
        navigator.geolocation.getCurrentPosition((position)  => {
            this.setCurrentLocation(position);
        });
    }
}

export default new CurrentLocationStore();