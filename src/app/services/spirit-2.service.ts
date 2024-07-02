import { Injectable } from "@angular/core";
import { Spirit2 } from "../models/Spirit.model";

@Injectable({
    providedIn: "root"
})

export class Spirit2Services{
    private spirit2: Spirit2;

    constructor(){
        this.spirit2 = new Spirit2;
    }


    getSpirit2(): Spirit2{
        return this.spirit2;
    }
}