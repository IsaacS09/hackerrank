import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

interface CityWeather {
  name: string;
  weather: string;
  status: string[];
}

interface ApiResponse {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: CityWeather[];
}

@Component({
  selector: 'weather-finder',
  templateUrl: './weatherFinder.component.html',
  styleUrls: ['./weatherFinder.component.scss']
})
export class WeatherFinder implements OnInit {
  url = 'https://jsonmock.hackerrank.com/api/weather?name=';
  buscador = '';
  response: ApiResponse;
  city: CityWeather;
  showNoResult: boolean = false;
  hideDetails: boolean = false;


  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
  }

  searchWeather(name: string) {
    if (name) {
      return this.http.get<ApiResponse>(this.url + name).subscribe(data => {
        this.response = data;
        this.city = this.response.data[0];
        if (this.city) {
          this.hideDetails = true;
          this.showNoResult = false
        } else {
          this.hideDetails = false;
          this.showNoResult = true;
        }
      });
    } else {
      this.hideDetails = false;
      this.showNoResult = false;
    }
  }
}
