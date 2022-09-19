import { Component, OnInit } from '@angular/core';
import { WeatherData } from '../models/weather.model';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-more-details',
  templateUrl: './more-details.component.html',
  styleUrls: ['./more-details.component.css'],
})
export class MoreDetailsComponent implements OnInit {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  constructor(private weatherService: WeatherService) {}

  weatherData?: WeatherData;
  cityName?: any;
  ngOnInit(): void {
    this.cityName = this.weatherService.putCountryName();
    this.weatherService.getWeatherData(this.cityName).subscribe({
      next: (response: any) => {
        this.weatherData = response;
        console.log(response);
      },
    });
  }
}
