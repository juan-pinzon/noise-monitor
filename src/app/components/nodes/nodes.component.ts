import { Component, OnInit } from '@angular/core';
import {NodesService} from "../../services/nodes.service";
import {FormControl} from "@angular/forms";
import {MeasurementsService} from "../../services/measurements.service";

@Component({
  selector: 'app-nodes',
  templateUrl: './nodes.component.html',
  styleUrls: ['./nodes.component.scss']
})
export class NodesComponent implements OnInit {

  nodes: any = []
  node = new FormControl('-1')
  measurements: any = []

  constructor(private nodesService: NodesService, private measurementService: MeasurementsService) { }

  ngOnInit(): void {
    this.getNodes()
  }

  getNodes() {
    this.nodesService.getNodes()
      .subscribe(response => {
        this.nodes = response
      })
  }

  getMeasurements(node: string) {
    this.measurementService.getMeasurements(node)
      .subscribe(response => {
        this.measurements = response
      })
  }

  filterNode() {
    if (this.node.value === '-1') this.measurements = []
    this.getMeasurements(this.node.value)
  }

}
