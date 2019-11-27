import { environment } from './../../../../../environments/environment';
import { SignalService } from './../../../../core/services/pages/signal/signal.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit {

  title = 'Signal graph!';
  view: any[] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Time';
  showYAxisLabel = true;
  yAxisLabel = 'Signal Value';
  timeline = true;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  multi: any[] = [{
    name: 'Teste',
    series: [
      {
        name: 12,
        value: 5000
      },
      {
        name: 13,
        value: 16000
      }
    ]
  }];

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.getLatestSignal();
  }

  getLatestSignal() {
    this.http.get(environment.urlApi)
      .pipe(map(((data: any) => data.items)))
      .subscribe((signal: any[]) => {

        const signals = signal[signal.length - 1].signal;
        const obj = [];
        let i = 0;
        for (const sig of signals) {
          obj.push({
            value: parseFloat((sig * 10000000).toFixed(2)),
            name: String(i)
          });
          i++;
        }

        this.multi.push({
          name: 'Signal',
          series: obj
        });

        this.multi = [...this.multi];
      });
  }

  onSelect(event) {
    console.log(event);
  }

}
