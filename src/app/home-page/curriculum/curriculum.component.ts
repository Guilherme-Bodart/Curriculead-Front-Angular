import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AcademicEducation } from 'src/models/academicEducation';
import { Curriculum } from 'src/models/curriculum';
import { Language } from 'src/models/language';
import { ProfessionalExperience } from 'src/models/professionalExperience';
import { Skill } from 'src/models/skill';
import { User } from 'src/models/user';
import { AuthenticateService } from 'src/services/authenticate.service';
import { CurriculumService } from 'src/services/curriculum.service';
import { UserService } from 'src/services/user.service';
import { MessageService } from 'primeng/api';
import { StyleCurriculum } from 'src/models/styleCurriculum';
import { CurriculumStyleEnum } from 'src/enumerators/curriculumType.enum';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.scss'],
  providers: [MessageService],
})
export class CurriculumComponent implements OnInit {
  user = new User({});
  loading = true;
  curriculum = new Curriculum({});
  page = 0;

  constructor(
    private _authenticateService: AuthenticateService,
    private _userService: UserService,
    private _curriculumService: CurriculumService,
    private _router: Router,
    private activatedRoute: ActivatedRoute,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    const par = this.activatedRoute.snapshot.paramMap.get('parametro');
    this.user = this._authenticateService.loggedUser;
    if (this.user?.curriculumId) {
      this._curriculumService
        .getCurriculumUserId(this.user._id)
        .subscribe((res: any) => {
          if (res.curriculum) {
            this.curriculum = res?.curriculum;
            this.curriculum.academicEducation.forEach((aE) => {
              if (aE.startDate) aE.startDate = new Date(aE.startDate);
              if (aE.endDate) aE.endDate = new Date(aE.endDate);
            });

            this.curriculum.professionalExperience.forEach((pE) => {
              if (pE.startDate) pE.startDate = new Date(pE.startDate);
              if (pE.endDate) pE.endDate = new Date(pE.endDate);
            });
          }
          this.loading = false;
        });
    } else this.loading = false;
    this.user.birthday = new Date(this.user.birthday);
  }

  addExperience() {
    this.curriculum.professionalExperience.push(new ProfessionalExperience({}));
  }

  addAcademic() {
    this.curriculum.academicEducation.push(new AcademicEducation({}));
  }

  addSkills() {
    this.curriculum.skill.push(new Skill({}));
  }

  addLanguage() {
    this.curriculum.language.push(new Language({}));
  }

  nextPage() {
    this.page += 1;
  }

  previousPage() {
    this.page -= 1;
  }

  saveCurriculum() {
    this.loading = true;
    this.curriculum.styleCurriculum = new StyleCurriculum({
      color: CurriculumStyleEnum.Default,
      name: 'Estilo',
    });
    if (this.curriculum.userId) {
      this._curriculumService
        .updateCurriculum(this.curriculum)
        .subscribe((res: any) => {
          this.curriculum = res.curriculum;
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Currículo Editado com Sucesso!',
            life: 3000,
          });
          setTimeout(() => {
            this.loading = false;
            window.location.reload();
          }, 3000);
        });
    } else {
      this._curriculumService
        .createCurriculum(this.curriculum)
        .subscribe((res: any) => {
          this.curriculum = res.curriculum;
          this.loading = true;
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Currículo Criado com Sucesso!',
            life: 3000,
          });
          setTimeout(() => {
            this.loading = false;
            window.location.reload();
          }, 3000);
        }, (error) => {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: error?.error?.error,
            life: 3000,
          });
          this.loading = false;
        });
    }
  }

  deleteItem(list: Array<any>, index) {
    list.splice(index, 1);
  }

  saveButton(): boolean {
    let bool = false;

    if (
      this.curriculum?.url &&
      this.curriculum?.professionalExperience?.length &&
      this.curriculum?.academicEducation?.length &&
      this.curriculum?.skill?.length
    )
      bool = true;
    return bool;
  }

  currentPosition(indexPE) {
    this.curriculum.professionalExperience.forEach((experience, index) => {
      if (indexPE != index) experience.currentPosition = false;
    });
  }
}
