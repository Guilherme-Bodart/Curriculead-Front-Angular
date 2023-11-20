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
import * as html2pdf from 'html2pdf.js';
import { ToastService } from 'src/services/toast.service';

@Component({
  selector: 'app-public-page',
  templateUrl: './public-page.component.html',
  styleUrls: ['./public-page.component.scss'],
})
export class PublicPageComponent implements OnInit {
  user = new User({});
  loading = true;
  loadingPdf = false;
  curriculum = new Curriculum({});
  page = 0;
  currentPosition;

  constructor(
    private _authenticateService: AuthenticateService,
    private _userService: UserService,
    private _curriculumService: CurriculumService,
    private _router: Router,
    private activatedRoute: ActivatedRoute,
    private _toastService: ToastService
  ) {}

  ngOnInit(): void {
    const urlParam = this.activatedRoute.snapshot.paramMap.get('url');
    this._curriculumService.getCurriculumUrl(urlParam).subscribe({
      next: (res: any) => {
        this.curriculum = res?.curriculum;
        this.currentPosition = this.curriculum.professionalExperience.find(
          (pe) => pe.currentPosition == true
        );
        this._userService
          .getUserId(this.curriculum.userId)
          .subscribe((res: any) => {
            this.user = res.user;
            this.loading = false;
          });
      },
      error: (err) => {
        this._router.navigate(['/']);
        this._toastService.showError('Link não Encontrado!');
      },
    });
  }

  htmlToPdf() {
    this.loadingPdf = true;
    var element = document.getElementById('curriculum');
    var opt = {
      margin: 0.5,
      filename: this.user.name + '.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2, width: 900 },
      jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' },
    };

    // New Promise-based usage:
    html2pdf().from(element).set(opt).save();
    this.loadingPdf = false;
  }
}
