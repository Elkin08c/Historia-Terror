import { Injectable } from "@angular/core";
import { Nurse2 } from "../models/Nurse.model";

@Injectable({
    providedIn: "root"
})
export class Nurse2Service {
    private nurse2: Nurse2;

    constructor() {
        this.nurse2 = new Nurse2();
}

getNurse2(): Nurse2 {
    return this.nurse2;
}
}