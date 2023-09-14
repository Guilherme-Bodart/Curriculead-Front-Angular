import { Component, OnInit } from '@angular/core';
import { CoreInformationEnum } from 'src/enumerators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  coreInformationList = Object.values(CoreInformationEnum);

  constructor(
  ) { }

  ngOnInit(): void {
  }

}
