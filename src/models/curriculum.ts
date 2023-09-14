import { AcademicEducation } from './academicEducation';
import { ExtraCourse } from './extraCourse';
import { Language } from './language';
import { ProfessionalExperience } from './professionalExperience';
import { IRest } from './rest.interface';
import { Skill } from './skill';
import { StyleCurriculum } from './styleCurriculum';

export class Curriculum implements IRest {
  className = 'Currículo';

  userId: string;
  academicEducation: Array<AcademicEducation>;
  extraCourses: Array<ExtraCourse>;
  language: Array<Language>;
  professionalExperience: Array<ProfessionalExperience>;
  skill: Array<Skill>;
  styleCurriculum: StyleCurriculum;
  aboutMe: string;
  hobby: Array<string>;

  constructor(data?: any) {
    if (data) this.Deserialize(data);
  }

  Serialize() {
    const out = {
      userId: this.userId,
      academicEducation: this.academicEducation.map((a) => a.Serialize()),
      extraCourses: this.extraCourses.map((e) => e.Serialize()),
      language: this.language.map((l) => l.Serialize()),
      professionalExperience: this.professionalExperience.map((p) => p.Serialize()),
      skill: this.skill.map((s) => s.Serialize()),
      styleCurriculum: this.styleCurriculum.Serialize(),
      aboutMe: this.aboutMe,
      hobby: this.hobby,

    };
    return out;
  }

  Deserialize(data: any) {
    if (data) {
      this.userId = data['userId'] || undefined;
      this.academicEducation = (data['academicEducation'] || []).map((a) => new AcademicEducation(a));
      this.extraCourses = (data['extraCourses'] || []).map((e) => new ExtraCourse(e));
      this.language = (data['language'] || []).map((l) => new Language(l));
      this.professionalExperience = (data['professionalExperience'] || []).map((p) => new ProfessionalExperience(p));
      this.skill = (data['skill'] || []).map((s) => new Skill(s));
      this.styleCurriculum = new StyleCurriculum(data['styleCurriculum'] || {});
      this.aboutMe = data['aboutMe'] || '';
      this.hobby = data['hobby'] || [];
    }
    return this;
  }
}
