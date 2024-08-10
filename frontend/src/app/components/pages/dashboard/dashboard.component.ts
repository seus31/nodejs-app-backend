import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { CardComponent } from '../../../theme/shared/components/card/card.component';
import { NgbProgressbar } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'dashboard',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, NgIf, CardComponent, NgbProgressbar],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export default class DashboardComponent {}
