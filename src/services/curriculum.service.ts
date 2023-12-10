import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/models/user';
import { AuthenticateService } from './authenticate.service';
import { Curriculum } from 'src/models/curriculum';

@Injectable({
  providedIn: 'root'
})
export class CurriculumService {
  private readonly JWT_TOKEN = 'JWT_TOKEN';
  public loggedUser: User;
  private endpoint = 'https://curriculead-back.vercel.app'
  private _urlCurriculum = '/curriculum/';
  private _urlCurriculumUrl = '/auth/curriculum/';

  constructor(
    private _http: HttpClient,
    private _route: Router,
    private _authenticateService: AuthenticateService,
  ) { }

  createCurriculum(curriculum: Curriculum){
    const token = this._authenticateService.getJwtToken();
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const url = this.endpoint + this._urlCurriculum;
    return this._http.post(url, curriculum, { headers });
  }

  updateCurriculum(curriculum: Curriculum){
    const token = this._authenticateService.getJwtToken();
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const url = this.endpoint + this._urlCurriculum + curriculum._id;
    return this._http.put(url, curriculum, { headers });
  }

  getCurriculumUserId(userId){
    const token = this._authenticateService.getJwtToken();
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const url = this.endpoint + this._urlCurriculum + userId;
    return this._http.get(url, { headers });
  }

  getCurriculumUrl(urlCurriculum){
    const url = this.endpoint + this._urlCurriculumUrl + urlCurriculum;
    return this._http.get(url);
  }

}
