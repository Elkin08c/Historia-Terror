import { Inject } from "@angular/core";
import { Nurse1} from "../models/Nurse.model";

@Inject({
    providedIn: 'root'
})
export class Nurse1Service{
    private nurse1: Nurse1;

    constructor(){
        this.nurse1 = new Nurse1();
    }



    getNurse1(): Nurse1{
        return this.nurse1;
    }
}