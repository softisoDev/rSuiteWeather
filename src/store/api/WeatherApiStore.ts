import {action, observable} from "mobx";
import axios from "axios";
import CurrentLocationStore from "../CurrentLocationStore";


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
    private _apiKey = "b2e0e0cf5b6b39ee22795bc33c0bb235"

    @observable
    private _currentLocation;

    @action
    setCurrentLocation = (value: Position) => {
        this._currentLocation = value
    }

    getCurrentLocation = () => {
        return this._currentLocation;
    }

    constructor() {
        navigator.geolocation.getCurrentPosition((position) => {
            this.setCurrentLocation(position);
            this.getCurrentLocationWeather(position.coords.latitude, position.coords.longitude);
        });
    }

    public makeRequest = (cityName) => {
        axios.get("http://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + this._apiKey + "&units=metric").then((response) => {
            this.setResponse(response);
            this.setResult({
                city: cityName,
                weatherType: response.data.weather[0].main,
                weatherDesc: response.data.weather[0].description,
                country: response.data.sys.country,
                humidity: response.data.main.humidity,
                temp: response.data.main.temp,
                weatherImgUrl: "http://openweathermap.org/img/wn/" + response.data.weather[0].icon + "@2x.png"
            })
        });
    }

    protected getCurrentLocationWeather = (lat, lon) => {
        axios.get("http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=" + this._apiKey + "&units=metric").then((response) => {
            this.setResponse(response);
            this.setResult({
                city: response.data.name,
                weatherType: response.data.weather[0].main,
                weatherDesc: response.data.weather[0].description,
                country: response.data.sys.country,
                humidity: response.data.main.humidity,
                temp: response.data.main.temp,
                weatherImgUrl: "http://openweathermap.org/img/wn/" + response.data.weather[0].icon + "@2x.png"
            })
        })
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
}

export default new WeatherApiStore()