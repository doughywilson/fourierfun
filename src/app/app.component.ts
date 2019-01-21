import { Phasor } from './../types';
import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

  constructor() {}

  phasors: Phasor[];


  ngOnInit() {
    this.phasors = [
    ];

    // d3.select('#maincontrols').selectAll('div')
    //   .data(this.data)
    //   .enter().append('div')
    //     .text(function(d) { return 'Mag: ' + d.mag + ' Freq: ' + d.freq; });
  }

  addPhasor() {
    this.phasors.push(new Phasor(1, 2, 3, 4));
  }


}
