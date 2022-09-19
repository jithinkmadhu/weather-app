import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router, UrlSerializer } from '@angular/router';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { WeatherService } from '../services/weather.service';
import { option } from '../models/search-options';

export interface User {
  name: string;
}

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  currentCountry: String = 'India';
  country!: any;
  cu!: string;
  myControl = new FormControl<string | User>('');
  options: User[] = option;

  filteredOptions: Observable<User[]> | undefined;

  constructor(private weatherService: WeatherService, private router: Router) {}

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value) => {
        const name = typeof value === 'string' ? value : value?.name;
        return name ? this._filter(name as string) : this.options.slice();
      })
    );
  }

  displayFn(user: User): string {
    return user && user.name ? user.name : '';
  }

  private _filter(name: string): User[] {
    const filterValue = name.toLowerCase();

    return this.options.filter((option) =>
      option.name.toLowerCase().includes(filterValue)
    );
  }

  getName() {
    this.country = this.myControl.value;
    this.cu = this.country.name;
    this.weatherService.getCountryName(this.country);
    this.weatherService.putCountryName();
    this.currentCountry = this.weatherService.putCountryName();
  }
  clickMe() {
    this.weatherService.sendClickEvent();
  }
}
