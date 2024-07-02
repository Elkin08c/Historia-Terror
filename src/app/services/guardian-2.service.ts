import { Injectable } from "@angular/core";
import { AsylumGuardian2 } from "../models/Asylum-Guardian.model";


@Injectable({
    providedIn: 'root'
})

export class AsylumGuardian2Service {
    private asylumGuardian2: AsylumGuardian2;
    constructor(){
        this.asylumGuardian2 = new AsylumGuardian2();
    }

    getAsylumGuardian2(): AsylumGuardian2 {
        return this.asylumGuardian2;
    }
}