import { BudgetItem } from './../../../shared/models/budget-item.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-budget-item-card',
  templateUrl: './budget-item-card.component.html',
  styleUrls: ['./budget-item-card.component.scss']
})
export class BudgetItemCardComponent implements OnInit {

  @Input() item: BudgetItem;

  constructor() { }

  ngOnInit() {
  }

}
