import { Component, OnInit } from '@angular/core';
import { WeatherData } from '../models/weather.model';
import { WeatherService } from '../services/weather.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-each-country',
  templateUrl: './each-country.component.html',
  styleUrls: ['./each-country.component.css'],
})
export class EachCountryComponent implements OnInit {
  clickEventSubscription: Subscription;

  title(title: any) {
    throw new Error('Method not implemented.');
  }
  constructor(private weatherService: WeatherService) {
    this.clickEventSubscription = this.weatherService
      .getClickEvent()
      .subscribe(() => {
        this.ngOnInit();
      });
  }

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
