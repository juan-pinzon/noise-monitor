import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  constructor(private httpClient: HttpClient) { }

  getAlerts() {
    return this.httpClient.get(environment.baseUri + 'api/measurement/alerts/CO20-626')
      .pipe(
        map((response: any) => [...response.data])
      )
  }
}
