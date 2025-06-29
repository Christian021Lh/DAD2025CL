import { Component } from '@angular/core';
import {CurrencyPipe, NgForOf} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatDividerModule} from "@angular/material/divider";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatRadioModule} from "@angular/material/radio";
import {MatStepperModule} from "@angular/material/stepper";

@Component({
  selector: 'app-entrada',
  standalone: true,
    imports: [
        CurrencyPipe,
        FormsModule,
        MatButtonModule,
        MatCardModule,
        MatDividerModule,
        MatFormFieldModule,
        MatInputModule,
        MatRadioModule,
        MatStepperModule,
        NgForOf,
        ReactiveFormsModule
    ],
  templateUrl: './entrada.component.html',
  styleUrl: './entrada.component.scss'
})
export class EntradaComponent {

}
