import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MeasurementsService {

  constructor(private httpClient: HttpClient) { }

  getMeasurements(node: string) {
    return this.httpClient.get(environment.baseUri + 'api/measurement/' + node)
      .pipe(
        map((response: any) => [...response.data])
      )
  }
}
