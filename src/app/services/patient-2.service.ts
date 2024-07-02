import { Injectable } from "@angular/core";
import { Patient2 } from "../models/Patient.model"; 

@Injectable({
    providedIn: 'root'
})
export class Patient2Service {
    private patient2: Patient2;

    constructor(){
        this.patient2 = new Patient2();
    }

    getPatient2(): Patient2{
        return this.patient2;
    }
}