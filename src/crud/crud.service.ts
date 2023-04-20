import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Crud } from './crud.entity';
import { Repository } from 'typeorm';
@Injectable()
export class CrudService {
  constructor(@InjectRepository(Crud) private repo: Repository<Crud>) {}
  createUser(user: any) {
    return this.repo.save(user).then(() => {
      throw new HttpException('User created', HttpStatus.CREATED);
    });
  }

  getUser() {
    return this.repo.find();
  }

  remove(id: any) {
    return this.repo.delete(id);
  }

  update(id: any, user: any) {
    return this.repo.update(id, user);
  }
}
