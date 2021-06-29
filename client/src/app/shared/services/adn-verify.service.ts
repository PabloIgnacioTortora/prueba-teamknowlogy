import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AdnVerifyService {
  constructor(private http: HttpClient) {}

  verifyAdn(adn): Observable<any> {
    let headers = new HttpHeaders().set("Content-Type", "application/json");
    return this.http.post<any>("/api/mutation", adn, { headers: headers });
  }
}
