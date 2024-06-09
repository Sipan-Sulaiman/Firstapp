import { Component } from '@angular/core';

import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatChipsModule} from '@angular/material/chips';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatButtonToggleModule, MatChipsModule ],

  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
