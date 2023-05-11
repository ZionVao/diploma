import { Controller, Get, Param, Request } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { EmployeeService } from './employee.service';

interface User {}
export interface WithUserEntityRequestDto extends Request {
  user: User;
}
@ApiTags('employee')
@ApiBearerAuth()
@Controller('employee')
export class EmployeeController {
  constructor(private employeeService: EmployeeService) {}

  @Get('profile')
  getProfile(@Request() req: WithUserEntityRequestDto) {
    return req.user;
  }

  @Get(':id')
  getById(@Param() params: { id: string }) {
    return this.employeeService.findOne(params.id);
  }
}
