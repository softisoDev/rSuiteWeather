import {action, observable} from "mobx";
import axios from "axios";

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
    private apiKey = "b2e0e0cf5b6b39ee22795bc33c0bb235"

    public makeRequest = (cityName) => {
        axios.get("http://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + this.apiKey + "&units=metric").then((response) => {
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
        // weatherImgUrl: "http://openweathermap.org/img/wn/10d@2x.png"
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