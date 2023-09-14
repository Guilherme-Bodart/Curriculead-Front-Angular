import { IRest } from './rest.interface';

export class ProfessionalExperience implements IRest {
  className = 'Experiência Profissional';

  responsibility: string;
  employer: string;
  description: string;
  startDate: Date;
  endDate: Date;
  currentPosition: Date;

  constructor(data?: any) {
    if (data) this.Deserialize(data);
  }

  Serialize() {
    const out = {
      responsibility: this.responsibility,
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
      this.employer = data['employer'] || '';
      this.description = data['description'] || '';
      this.startDate = data['startDate'] || new Date(2000, 1, 1);
      this.endDate = data['endDate'] || new Date(2000, 1, 1);
      this.currentPosition = data['currentPosition'] || false;
    }
    return this;
  }
}
