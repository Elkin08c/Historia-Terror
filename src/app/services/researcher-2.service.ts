import { Injectable } from "@angular/core";
import { Researcher2 } from "../models/Researcher.model";

@Injectable({
    providedIn: "root"
})

export class Researcher2Service{
    private researcher2: Researcher2;

    constructor(){
        this.researcher2 = new Researcher2();
    }


    getResearcher2(): Researcher2{
        return this.researcher2;
    }
}