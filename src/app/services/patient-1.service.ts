import { Injectable } from "@angular/core";
import { Patient1 } from "../models/Patient.model"; 

@Injectable({
    providedIn: 'root'
})
export class Patient1Service {
    private patient1: Patient1;

    constructor(){
        this.patient1 = new Patient1();
    }


    getPatient1(): Patient1{
        return this.patient1;
    }
}