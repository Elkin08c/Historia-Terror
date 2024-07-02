import { ComponentFixture, TestBed } from '@angular/core/testing';
import {RolesPersonajes} from './rolespersonajes.component'

describe ('RolesPersonajesComponent', () =>{
    let component: RolesPersonajes;
    let fixture: ComponentFixture<RolesPersonajes>;

    beforeEach(async () =>{
        await TestBed.configureTestingModule({
            declarations: [RolesPersonajes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RolesPersonajes);
    component = fixture.componentInstance;
    fixture.detectChanges();
});

it ('should create',() => {
    expect(component).toBeTruthy();
});
});