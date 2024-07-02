import { Injectable } from "@angular/core";
import { Researcher1 } from "../models/Researcher.model";

@Injectable({
    providedIn: "root"
})

export class Researcher1Service{
    private researcher1: Researcher1;

    constructor(){
        this.researcher1 = new Researcher1();
    }


    getResearcher1(): Researcher1{
        return this.researcher1;
    }
}