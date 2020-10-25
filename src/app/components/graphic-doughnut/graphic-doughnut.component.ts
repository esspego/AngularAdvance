import { Component, Input, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-graphic-doughnut',
  templateUrl: './graphic-doughnut.component.html',
  styles: [
  ]
})
export class GraphicDoughnutComponent implements OnInit {
  @Input() data: Label[];
  @Input() labels: MultiDataSet;
  @Input() chartType: ChartType;
  @Input() legend: string;
  constructor() { }

  ngOnInit(): void {
  }

}
