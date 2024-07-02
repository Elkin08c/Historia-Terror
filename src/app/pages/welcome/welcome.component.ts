import { Component, OnInit } from '@angular/core';
import {RolesPersonajes} from '../../RolesPersonajes.component';
@Component({
  selector: 'app-welcome',
  standalone: true,
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  imports: [RolesPersonajes]
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
