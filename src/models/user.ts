import { GenderEnum } from 'src/enumerators/gender.enum';
import { IRest } from './rest.interface';
import { Curriculum } from './curriculum';

export class User implements IRest {
  className = 'Usuário';

  _id: string;
  email: string;
  name: string;
  password: string;
  gender: GenderEnum;
  birthday: Date;
  phone: string;
  state: string;
  city: string;
  linkedin: string;
  github: string;
  curriculumId: string;

  constructor(data?: any) {
    if (data) this.Deserialize(data);
  }

  Serialize() {
    const out = {
      _id: this._id,
      email: this.email,
      name: this.name,
      password: this.password,
      gender: this.gender,
      birthday: this.birthday,
      phone: this.phone,
      state: this.state,
      city: this.city,
      linkedin: this.linkedin,
      github: this.github,
      curriculumId: this.curriculumId,
    };
    return out;
  }

  Deserialize(data: any) {
    if (data) {
      this._id = data['_id'] || undefined;
      this.email = data['email'] || '';
      this.name = data['name'] || '';
      this.gender = data['gender'] || undefined;
      this.birthday = data['birthday'] || null;
      this.phone = data['phone'] || '';
      this.state = data['state'] || '';
      this.city = data['city'] || '';
      this.linkedin = data['linkedin'] || '';
      this.github = data['github'] || '';
      this.curriculumId = data['curriculumId'] || '';
    }
    return this;
  }
}
