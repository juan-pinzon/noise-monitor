import { Component, OnInit } from '@angular/core';
import {AlertsService} from "../../services/alerts.service";

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss']
})
export class AlertsComponent implements OnInit {

  alerts: any = []

  constructor(private alertsService: AlertsService) { }

  ngOnInit(): void {
    this.getAlerts()
  }

  getAlerts() {
    this.alertsService.getAlerts()
      .subscribe(response => {
        this.alerts = response
      })
  }

}
