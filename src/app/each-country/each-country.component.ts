import { Component, OnInit } from '@angular/core';
import { WeatherData } from '../models/weather.model';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-each-country',
  templateUrl: './each-country.component.html',
  styleUrls: ['./each-country.component.css'],
})
export class EachCountryComponent implements OnInit {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  constructor(private weatherService: WeatherService) {}

  weatherData?: WeatherData;
  cityName?: any = 'India';
  ngOnInit(): void {
    this.cityName = this.weatherService.putCountryName();
    this.weatherService.getWeatherData(this.cityName).subscribe({
      next: (response: any) => {
        this.weatherData = response;
        console.log(response);
      },
    });
  }

  onClick(): any {
    this.cityName = this.weatherService.putCountryName();
    this.weatherService.getWeatherData(this.cityName).subscribe({
      next: (response) => {
        this.weatherData = response;
        console.log(response);
      },
    });
  }
}
