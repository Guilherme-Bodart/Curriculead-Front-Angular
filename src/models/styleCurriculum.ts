import { CurriculumStyleEnum } from 'src/enumerators/curriculumType.enum';
import { IRest } from './rest.interface';

export class StyleCurriculum implements IRest {
  className = 'Estilo do Currículo';

  name: string;
  color: CurriculumStyleEnum;

  constructor(data?: any) {
    if (data) this.Deserialize(data);
  }

  Serialize() {
    const out = {
      name: this.name,
      color: this.color,
    };
    return out;
  }

  Deserialize(data: any) {
    if (data) {
      this.name = data['name'] || '';
      this.color = data['color'] || CurriculumStyleEnum.Default;
    }
    return this;
  }
}
