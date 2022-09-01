import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-toggle-button',
  templateUrl: './toggle-button.component.html',
  styleUrls: ['./toggle-button.component.scss']
})
export class ToggleButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Output() changed = new EventEmitter<boolean>();
}
