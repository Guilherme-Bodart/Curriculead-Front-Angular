import { IRest } from './rest.interface';

export class ExtraCourse implements IRest {
  className = 'Cursos Extras';

  name: string;
  institution: string;
  description: string;

  constructor(data?: any) {
    if (data) this.Deserialize(data);
  }

  Serialize() {
    const out = {
      name: this.name,
      institution: this.institution,
      description: this.description,
    };
    return out;
  }

  Deserialize(data: any) {
    if (data) {
      this.name = data['name'] || '';
      this.institution = data['institution'] || '';
      this.description = data['description'] || '';
    }
    return this;
  }
}
