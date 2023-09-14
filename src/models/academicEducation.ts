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
      this.startDate = data['startDate'] || new Date(2000, 1, 1);
      this.endDate = data['endDate'] || new Date(2000, 1, 1);
    }
    return this;
  }
}
