import { Injectable } from "@angular/core";
import { AsylumGuardian1 } from '../models/Asylum-Guardian.model';

@Injectable({
    providedIn: 'root'
})

export class AsylumGuardian1Service {
    private asylumGuardian1: AsylumGuardian1;

    constructor(){
    this.asylumGuardian1 = new AsylumGuardian1();
    }

    getAsylumGuardian(): AsylumGuardian1 {
        return this.asylumGuardian1;
    }
}