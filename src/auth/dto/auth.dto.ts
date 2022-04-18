import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class AuthDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsNotEmpty()
  nickname: string;

  firstName?: string;
  lastName?: string;
}

export class JwtPayloadDto {
  sub: number;

  @IsEmail()
  @IsNotEmpty()
  email: string;
}
