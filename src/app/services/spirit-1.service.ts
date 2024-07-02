import { Injectable } from "@angular/core";
import { Spirit1 } from "../models/Spirit.model";

@Injectable({
    providedIn: "root"
})

export class Spirit1Services{
    private spirit1: Spirit1;

    constructor(){
        this.spirit1 = new Spirit1;
    }


    getSpirit1(): Spirit1{
        return this.spirit1;
    }
}