import {action, observable} from "mobx";
import axios from "axios";


class WeatherApiStore {
    private apiKey = "b2e0e0cf5b6b39ee22795bc33c0bb235"

    private makeRequest = () => {
        axios.get('http://api.openweathermap.org/data/2.5/weather?q=' + this.cityName + "&appid=" + this.apiKey).then((response) => {
            this.setResponse(response.data.results);
        });
    }

    @observable
    public cityName = "";

    @action
    setCityName = (value) => {
        this.cityName = value;
    }

    @observable
    public response = "";

    @observable
    public result = {};

    @action
    setResult = (value) => {
        this.result = value;
    }

    @action
    setResponse = (value) => {
        this.response = value;
    }


}

export default new WeatherApiStore()