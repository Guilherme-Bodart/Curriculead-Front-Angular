import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-curriculum-red-default',
  templateUrl: './curriculum-red-default.component.html',
  styleUrls: ['./curriculum-red-default.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CurriculumRedDefaultComponent implements OnInit {
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
