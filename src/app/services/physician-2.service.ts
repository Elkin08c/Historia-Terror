import { Injectable } from "@angular/core";
import { Physician2 } from "../models/Physician.model";

@Injectable({
    providedIn: 'root'
})
export class Physician2Service{
    private patient2: Physician2;

    constructor(){
        this.patient2 = new Physician2();
    }


    getPhysician2(): Physician2 {
        return this.patient2;
    }
}