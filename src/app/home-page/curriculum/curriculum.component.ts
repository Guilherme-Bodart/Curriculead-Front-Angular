import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AcademicEducation } from 'src/models/academicEducation';
import { Curriculum } from 'src/models/curriculum';
import { Language } from 'src/models/language';
import { ProfessionalExperience } from 'src/models/professionalExperience';
import { Skill } from 'src/models/skill';
import { User } from 'src/models/user';
import { AuthenticateService } from 'src/services/authenticate.service';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.scss']
})

export class CurriculumComponent implements OnInit {

  user = new User({});
  loading = true;
  curriculum = new Curriculum({});
  page = 0.

  constructor(
    private _authenticateService: AuthenticateService,
    private _userService: UserService,
    private _router: Router,
  ) { }

  ngOnInit(): void {
    this.user = this._authenticateService.loggedUser;
    console.log(this._authenticateService.loggedUser);

    if (this.user) this.loading = false
    this.user.birthday = new Date(this.user.birthday)

    console.log(this.curriculum);
  }

  addExperience() {
    this.curriculum.professionalExperience.push(new ProfessionalExperience({}))
  }

  addAcademic() {
    this.curriculum.academicEducation.push(new AcademicEducation({}))
  }

  addSkills() {
    this.curriculum.skill.push(new Skill({}))
  }

  addLanguage() {
    this.curriculum.language.push(new Language({}))
  }

  nextPage() {
    this.page += 1;
  }

  previousPage() {
    this.page -= 1;
  }

  saveCurriculum() {
    console.log('save', this.curriculum);
  }

  deleteItem(list: Array<any>, index) {
    list.splice(index, 1);
  }
}
