import { IsBooleanString, IsNotEmpty, IsString } from 'class-validator';
export class CreateUserDto {
  id: number;
  @IsNotEmpty()
  @IsString()
  firstName: string;
  @IsNotEmpty()
  @IsString()
  lasttName: string;
  @IsNotEmpty()
  @IsBooleanString()
  isActive: boolean;
}
