import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class AddActivityDto {
  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsOptional()
  authorId: string;
}
