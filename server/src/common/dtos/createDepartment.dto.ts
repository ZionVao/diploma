import { ApiProperty } from '@nestjs/swagger';

export class CreateDepartmentDTO {
  @ApiProperty({})
  title: string;

  @ApiProperty({ type: String, required: false })
  description?: string;
}
