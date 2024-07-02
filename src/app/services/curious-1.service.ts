import { Injectable } from '@angular/core';
import { Curious2 } from '../models/Curious.model';
@Injectable({
providedIn: 'root'
})
export class Curious2Service {
private curious2: Curious2;

constructor() {
    this.curious2 = new Curious2();
}

getCurious2(): Curious2 {
    return this.curious2;
}
}
