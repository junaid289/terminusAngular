import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {WeatherDto} from "../dto/WeatherDto";

@Injectable({
  providedIn: 'root'
})
export class TempratureApiService {

  constructor(private http: HttpClient) { }
  gethttpHeader() {
    return new HttpHeaders({
      'Content-Type':  'application/json'
    });
  }

  getAllWeather() {
    return this.http.get<WeatherDto[]>('/weather', {
      headers: this.gethttpHeader()
    });
  }
  addWeather(weatherDto: WeatherDto) {
    return this.http.get<WeatherDto[]>('/weather', {
      headers: this.gethttpHeader()
    });
  }
  getWeatherById(id: number) {
    return this.http.get<WeatherDto[]>('/weather/'+id, {
      headers: this.gethttpHeader()
    });
  }
}
