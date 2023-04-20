import { Module } from '@nestjs/common';
import { Crud } from './crud.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CrudService } from './crud.service';
import { CrudController } from './crud.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Crud])],
  controllers: [CrudController],
  providers: [CrudService]
})
export class CrudModule {}
