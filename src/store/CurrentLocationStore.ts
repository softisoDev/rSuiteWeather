import {action, observable} from "mobx";

class CurrentLocationStore {

    @observable
    private _currentLocation;

    @action
    setCurrentLocation = (value: Position) => {
        this._currentLocation = value
    }

    currentLocation = () => {
        return this._currentLocation;
    }


    constructor() {
        navigator.geolocation.getCurrentPosition((position)  => {
            this.setCurrentLocation(position);
            console.log(position);
        });
    }
}

export default new CurrentLocationStore();