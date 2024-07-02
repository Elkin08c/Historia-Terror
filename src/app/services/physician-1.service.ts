import { Injectable } from "@angular/core";
import { Physician1 } from "../models/Physician.model";


@Injectable({
    providedIn: 'root'
})

export class Physician1Service {
    private physician1: Physician1;

    constructor() {
        this.physician1 = new Physician1();
    }


    getPhysician1(): Physician1{
        return this.physician1;
    }
}