import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { WeatherData } from '../models/weather.model';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  countryNameFromSearch: any;

  constructor(private http: HttpClient) {}

  getWeatherData(cityName: string): Observable<WeatherData> {
    return this.http.get<WeatherData>(environment.weatherApiUrl, {
      params: new HttpParams()
        .set('locations', cityName)
        .set('aggregateHours', '24')
        .set('unitGroup', 'metric')
        .set('shortColumnNames', 'false')
        .set('contentType', 'json')
        .set('forcastDays', '5')
        .set('key', environment.myApiKey),
    });
  }

  getCountryName(countryName: object): any {
    this.countryNameFromSearch = countryName;
    this.putCountryName();
  }

  putCountryName(): any {
    console.log(this.countryNameFromSearch.name);
    this.getWeatherData(this.countryNameFromSearch.name);
    return this.countryNameFromSearch.name;
  }
}
