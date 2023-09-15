import { IRest } from './rest.interface';

export class AcademicEducation implements IRest {
  className = 'Educação Acadêmica';

  courseName: string;
  schoolName: string;
  startDate: Date;
  endDate: Date;

  constructor(data?: any) {
    if (data) this.Deserialize(data);
  }

  Serialize() {
    const out = {
      courseName: this.courseName,
      schoolName: this.schoolName,
      startDate: this.startDate,
      endDate: this.endDate,
    };
    return out;
  }

  Deserialize(data: any) {
    if (data) {
      this.courseName = data['courseName'] || '';
      this.schoolName = data['schoolName'] || '';
      this.startDate = data['startDate'] || undefined;
      this.endDate = data['endDate'] || undefined;
    }
    return this;
  }
}
