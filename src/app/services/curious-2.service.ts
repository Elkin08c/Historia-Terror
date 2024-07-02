import { Injectable } from '@angular/core';
import { Curious1 } from '../models/Curious.model';
@Injectable({
providedIn: 'root'
})
export class Curious1Service {
private curious1: Curious1;

constructor() {
    this.curious1 = new Curious1();
}

getCurious1(): Curious1 {
    return this.curious1;
}
}
