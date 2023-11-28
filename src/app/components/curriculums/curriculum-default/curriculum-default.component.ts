import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-curriculum-default',
  templateUrl: './curriculum-default.component.html',
  styleUrls: ['./curriculum-default.component.scss'],
})
export class CurriculumDefaultComponent implements OnInit {
  @Input() user;
  @Input() curriculum;
  currentPosition;

  constructor() {}

  ngOnInit(): void {
    this.currentPosition = this.curriculum.professionalExperience.find(
      (pe) => pe.currentPosition == true
    );
  }
}
