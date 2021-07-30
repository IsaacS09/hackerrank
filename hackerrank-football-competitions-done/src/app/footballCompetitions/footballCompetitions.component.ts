import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

interface Competition {
  name: string;
  country: string;
  year: number;
  winner: string;
  runnerup: string;
}

interface ApiResponse {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: Competition[];
}

@Component({
  selector: 'football-competitions',
  templateUrl: './footballCompetitions.component.html',
  styleUrls: ['./footballCompetitions.component.scss']
})
export class FootballCompetitions implements OnInit {

  url = 'https://jsonmock.hackerrank.com/api/football_competitions?page=';
  competition: Competition[] = [];
  response: ApiResponse;
  pages: any;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
   this.getData(1);
  }

  getData(idPage: any){
    this.http.get<ApiResponse>(this.url + idPage).subscribe(data => {
      this.response = data;
      this.competition = this.response.data;
      this.pages = this.response.total_pages;
      console.log(this.response);
    })
  }
  counter(i: number) {
    return new Array(i);
  }
  getPage(number: any){
    this.getData(number);
  }
}
