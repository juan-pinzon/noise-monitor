import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NodesService {

  constructor(private httpsClient: HttpClient) {}

  getNodes() {
    return this.httpsClient.get(environment.baseUri + 'api/nodes')
      .pipe(
        map((response: any) => [...response.data])
      )
  }
}
