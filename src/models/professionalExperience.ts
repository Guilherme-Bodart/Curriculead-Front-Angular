import { IRest } from './rest.interface';

export class ProfessionalExperience implements IRest {
  className = 'Experiência Profissional';

  responsibility: string;
  employer: string;
  office: string;
  description: string;
  startDate: Date;
  endDate: Date;
  currentPosition: boolean;

  constructor(data?: any) {
    if (data) this.Deserialize(data);
  }

  Serialize() {
    const out = {
      responsibility: this.responsibility,
      office: this.office,
      employer: this.employer,
      description: this.description,
      startDate: this.startDate,
      endDate: this.endDate,
      currentPosition: this.currentPosition,
    };
    return out;
  }

  Deserialize(data: any) {
    if (data) {
      this.responsibility = data['responsibility'] || '';
      this.office = data['office'] || '';
      this.employer = data['employer'] || '';
      this.description = data['description'] || '';
      this.startDate = data['startDate'] || undefined;
      this.endDate = data['endDate'] || undefined;
      this.currentPosition = data['currentPosition'] || false;
    }
    return this;
  }
}
