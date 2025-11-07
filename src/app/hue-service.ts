import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HueService {


  constructor(private http: HttpClient) { }

  public getLights() {
    //return this.http.get<Record<string, unknown>>('http://localhost:8000/api/newdeveloper/lights');
     return this.http.get('http://localhost:8000/api/newdeveloper/lights');
  }
  
}
