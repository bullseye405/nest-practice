import { IsNotEmpty, MinLength, IsEmail } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @MinLength(3)
  firstname: string;

  @IsNotEmpty()
  @MinLength(3)
  lastname: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  @MinLength(8)
  password: string;
}
