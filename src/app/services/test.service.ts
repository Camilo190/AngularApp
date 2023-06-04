import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http: HttpClient) { }
  getAllTest() {
    return this.http.get(
      `http://localhost:9000/api/test/all`,
     );
  }
}
