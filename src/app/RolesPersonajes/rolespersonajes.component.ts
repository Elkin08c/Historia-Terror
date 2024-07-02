import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { Curious1Service } from '../services/curious-2.service';
import { Curious2Service } from '../services/curious-1.service';
import { Curious1 } from '../models/Curious.model';
import { Curious2 } from '../models/Curious.model';
import { AsylumGuardian1Service } from '../services/guardian-1.service';
import { AsylumGuardian2Service } from '../services/guardian-2.service';
import { AsylumGuardian1, AsylumGuardian2 } from '../models/Asylum-Guardian.model';
import { Nurse1Service } from '../services/nurse-1.service';
import { Nurse2Service } from '../services/nurse-2.service';
import { Nurse1, Nurse2 } from '../models/Nurse.model';
import { Patient1Service } from '../services/patient-1.service';
import { Patient2Service } from '../services/patient-2.service';
import { Patient1, Patient2 } from '../models/Patient.model';
import { Physician1Service } from '../services/physician-1.service';
import { Physician2Service } from '../services/physician-2.service';
import { Physician1, Physician2 } from '../models/Physician.model';
import { Researcher1Service } from '../services/researcher-1.service';
import { Researcher2Service } from '../services/researcher-2.service';
import { Researcher1, Researcher2 } from '../models/Researcher.model';
import { Spirit1Services } from '../services/spirit-1.service';
import { Spirit2Services } from '../services/spirit-2.service';
import { Spirit1, Spirit2 } from '../models/Spirit.model';



@Component({
selector: 'Roles-Personajes',
standalone: true,
imports: [
    CommonModule,
    NzCardModule,
    NzButtonModule,
    NzListModule,
    NzGridModule
],
templateUrl: './roles.component.html',
styleUrls: ['./roles.component.css']
})
export class RolesPersonajes implements OnInit {
    curious1: Curious1 | undefined;
    curious2: Curious2 | undefined;
    guardian1: AsylumGuardian1 | undefined;
    guardian2: AsylumGuardian2 | undefined;
    nurse1: Nurse1 | undefined;
    nurse2: Nurse2 | undefined;
    patient1: Patient1 | undefined;
    patient2: Patient2 | undefined;
    physician1: Physician1 | undefined;
    physician2: Physician2 | undefined;
    researcher1: Researcher1 | undefined;
    researcher2: Researcher2 | undefined;
    spirit1: Spirit1 | undefined;
    spirit2: Spirit2 | undefined;

    currentStoryCurious1: string | null = null
    currentStoryCurious2: string | null = null
    currentStoryGuardian1: string | null = null
    currentStoryGuardian2: string | null = null
    currentStoryNurse1: string | null = null
    currentStoryNurse2: string | null = null
    currentStoryPatient1: string | null = null
    currentStoryPatient2: string | null = null
    currentStoryPhysician1: string | null = null
    currentStoryPhysician2: string | null = null
    currentStoryResearcher1: string | null = null
    currentStoryResearcher2: string | null = null
    currentStorySpirit1: string | null = null
    currentStorySpirit2: string | null = null
    

constructor(
    private curious1Service: Curious1Service,
    private curious2Service: Curious2Service,
    private guardian1Service: AsylumGuardian1Service,
    private guardian2Service: AsylumGuardian2Service,
    private nurse1Service: Nurse1Service,
    private nurse2Service: Nurse2Service,
    private patient1Service: Patient1Service,
    private patient2Service: Patient2Service,
    private physician1Service: Physician1Service,
    private physician2Service: Physician2Service,
    private researcher1Service: Researcher1Service,
    private researcher2Service: Researcher2Service,
    private spirit1Service: Spirit1Service,
    private spirit2Service: Spirit2Service,
) {}

ngOnInit(): void {
    this.curious1 = this.curious1Service.getCurious1();
    this.curious2 = this.curious2Service.getCurious2();
    this.guardian1 = this.guardian1Service.getAsylumGuardian1();
    this.guardian2 = this.guardian2Service.getAsylumGuardian2();
    this.nurse1 = this.nurse1Service.getNurse1();
    this.nurse2 = this.nurse2Service.getNurse2();
    this.patient1 = this.patient1Service.getPatient1();
    this.patient2 = this.patient2Service.getPatient2();
    this.physician1 = this.physician1Service.getPhysician1();
    this.physician2 = this.physician2Service.getPhysician2();
    this.researcher1 = this.researcher1Service.getResearcher1();
    this.researcher2 = this.researcher2Service.getResearcher2();
    this.spirit1 = this.spirit1Service.getSpirit1();
    this.spirit2 = this.spirit2Service.getSpirit2();
}

    displayNextPart(role:any): void{
        if (role instanceof Curious1){
            this.currentStoryCurious1 = this.curious1?.displayNextPart() ?? null;
        }else if (role instanceof Curious2) {
            this.currentStoryCurious2 = this.curious2?.displayNextPart() ?? null;
        }
        else if (role instanceof AsylumGuardian1) {
            this.currentStoryGuardian1 = this.guardian1?.displayNextPart() ?? null;
    }
    else if (role instanceof AsylumGuardian2) {
        this.currentStoryGuardian2 = this.guardian2?.displayNextPart() ?? null;
        }
        else if (role instanceof Nurse1) {
            this.currentStoryNurse1 = this.nurse1?.displayNextPart() ?? null;
            }
            else if (role instanceof Nurse2) {
                this.currentStoryNurse2 = this.nurse2?.displayNextPart() ?? null;
                }
                else if (role instanceof Patient1) {
                    this.currentStoryPatient1 = this.patient1?.displayNextPart() ?? null;
                    }
                    else if (role instanceof Patient2) {
                        this.currentStoryPatient2 = this.patient2?.displayNextPart() ?? null;
                        }
                        else if (role instanceof Physician1) {
                            this.currentStoryPhysician1 = this.physician1?.displayNextPart() ?? null;
                            }
                            else if (role instanceof Physician2) {
                                this.currentStoryPhysician2 = this.physician2?.displayNextPart() ?? null;
                                }
                                else if (role instanceof Researcher1) {
                                    this.currentStoryResearcher1 = this.researcher1?.displayNextPart() ?? null;
                                    }
                                    else if (role instanceof Researcher2) {
                                        this.currentStoryResearcher2 = this.researcher2?.displayNextPart() ?? null;
                                        }
                                        else if (role instanceof Spirit1) {
                                            this.currentStorySpirit1 = this.spirit1?.displayNextPart() ?? null;
                                            }
                                            else if (role instanceof Spirit2) {
                                                this.currentStorySpirit2 = this.spirit2?.displayNextPart() ?? null;
                                                }
                                            }


    resetRoleStory(role:any):void{
        if (role instanceof Curious1) {
            this.curious1?.resetStoryIndex();
            this.currentStoryCurious1 = null;
            }
            else if (role instanceof Curious2) {
                this.curious2?.resetStoryIndex();
                this.currentStoryCurious2 = null;
                }
                else if (role instanceof AsylumGuardian1) {
                    this.guardian1?.resetStoryIndex();
                    this.currentStoryGuardian1 = null;
                    }
                    else if (role instanceof AsylumGuardian2) {
                        this.guardian2?.resetStoryIndex();
                        this.currentStoryGuardian2 = null;
                        }
                        else if (role instanceof Nurse1) {
                            this.nurse1?.resetStoryIndex();
                            this.currentStoryNurse1 = null;
                            }
                            else if (role instanceof Nurse2) {
                                this.nurse2?.resetStoryIndex();
                                this.currentStoryNurse2 = null;
                                }
                                else if (role instanceof Patient1) {
                                    this.patient1?.resetStoryIndex();
                                    this.currentStoryPatient1 = null;
                                    }
                                    else if (role instanceof Patient2) {
                                        this.patient2?.resetStoryIndex();
                                        this.currentStoryPatient2 = null;
                                        }
                                        else if (role instanceof Researcher1) {
                                            this.researcher1?.resetStoryIndex();
                                            this.currentStoryResearcher1 = null;
                                            }
                                            else if (role instanceof Researcher2) {
                                                this.researcher2?.resetStoryIndex();
                                                this.currentStoryResearcher2 = null;
                                                }
                                                else if (role instanceof Spirit1) {
                                                    this.spirit1?.resetStoryIndex();
                                                    this.currentStorySpirit1 = null;
                                                    }
                                                    else if (role instanceof Spirit2) {
                                                        this.spirit2?.resetStoryIndex();
                                                        this.currentStorySpirit2 = null;
                                                        }
    }
}
