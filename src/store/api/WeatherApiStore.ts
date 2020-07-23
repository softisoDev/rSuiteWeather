import {action, observable} from "mobx";
import axios from "axios";
import {getPosition} from "../../libs/utls";


interface IResult {
    city: string;
    weatherType: string;
    weatherDesc: string;
    temp: number | undefined;
    humidity: number | undefined;
    country: string
    weatherImgUrl?: string
}

class WeatherApiStore {
    private _apiKey = "b2e0e0cf5b6b39ee22795bc33c0bb235";
    private _apiHost = "http://api.openweathermap.org/data/2.5/weather";

    @observable
    public isCurrent: boolean = true;

    @action
    setIsCurrent = (value) => {
        this.isCurrent = false;
    }

    @observable
    private _currentLocation;

    @action
    setCurrentLocation = (value: Position) => {
        this._currentLocation = value
    }

    public async initCurrentLocation(): Promise<void> {
        this.setCurrentLocation(await getPosition());
        this.getCurrentLocationWeather(this._currentLocation.coords.latitude, this._currentLocation.coords.longitude);
        this.setIsCurrent(false);
    }

    @action
    public async getCurrentLocation(): Promise<void> {
        return this._currentLocation;
    }

    @observable
    public response = "Response";

    @observable
    public result: IResult = {
        city: "",
        weatherType: "",
        weatherDesc: "",
        country: "",
        humidity: undefined,
        temp: undefined,
    };

    @action
    setResult = (value: IResult) => {
        this.result = value;
    }

    @action
    setResponse = (value) => {
        this.response = value;
    }

    public makeRequest = (cityName) => {
        axios.get(this._apiHost + "?q=" + cityName + "&appid=" + this._apiKey + "&units=metric").then((response) => {
            this.setResponse(response);
            this.setResult(this.makeResponse(response));
        });
    }

    protected getCurrentLocationWeather = (lat, lon) => {
        axios.get(this._apiHost + "?lat=" + lat + "&lon=" + lon + "&appid=" + this._apiKey + "&units=metric").then((response) => {
            this.setResponse(response);
            this.setResult(this.makeResponse(response));
        })
    }

    private makeResponse = (response) => {
        return {
            city: response.data.name.replace(" City", ""),
            weatherType: response.data.weather[0].main,
            weatherDesc: response.data.weather[0].description,
            country: response.data.sys.country,
            humidity: response.data.main.humidity,
            temp: response.data.main.temp,
            weatherImgUrl: "http://openweathermap.org/img/wn/" + response.data.weather[0].icon + "@2x.png"
        }
    }
}

export default new WeatherApiStore()