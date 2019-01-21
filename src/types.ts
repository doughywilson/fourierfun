import { initDomAdapter } from '@angular/platform-browser/src/browser';

export class Phasor {
    mag: number;
    freq: number;
    angle: number;
    init: number;

    constructor( mag: number, angle: number, freq: number, init: number ) {
        this.mag = mag;
        this.freq = freq;
        this.angle = angle;
        this.init = init;
    }
}
