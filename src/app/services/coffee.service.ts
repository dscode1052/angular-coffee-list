import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Coffee } from '../models/coffee.model';

const baseUrl = "https://random-data-api.com/api/coffee/random_coffee";

@Injectable({
  providedIn: 'root'
})
export class CoffeeService {
  constructor(private http: HttpClient) { }

  getAllCoffee(): Observable<Coffee[]> {
    return this.http.get<Coffee[]>(`${baseUrl}?size=50`);
  } 
}
