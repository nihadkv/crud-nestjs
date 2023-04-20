import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CrudService } from './crud.service';

@Controller('user')
export class CrudController {
  constructor(private service: CrudService) {}
  @Post()
  create(@Body() user: any) {
    // return this.usersService.create(createUserDto);
    return this.service.createUser(user);
  }

  @Get()
  get() {
    return this.service.getUser();
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() user: any) {
    return this.service.update(id, user);
  }
}
