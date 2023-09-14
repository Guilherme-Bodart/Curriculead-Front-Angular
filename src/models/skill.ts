import { IRest } from './rest.interface';

export class Skill implements IRest {
  className = 'Cursos Extras';

  name: string;
  level: string;

  constructor(data?: any) {
    if (data) this.Deserialize(data);
  }

  Serialize() {
    const out = {
      name: this.name,
      level: this.level,
    };
    return out;
  }

  Deserialize(data: any) {
    if (data) {
      this.name = data['name'] || '';
      this.level = data['level'] || 0;
    }
    return this;
  }
}
