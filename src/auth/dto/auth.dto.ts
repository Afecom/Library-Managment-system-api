import { IsString, IsEmail, MinLength, IsEnum, IsPhoneNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({ description: 'Email address' })
  @IsEmail()
  email: string;

  @ApiProperty({ description: 'Password' })
  @IsString()
  @MinLength(6)
  password: string;
}

export class SignupDto {
  @ApiProperty({ description: 'Username' })
  @IsString()
  username: string;

  @ApiProperty({ description: 'Email address' })
  @IsEmail()
  email: string;

  @ApiProperty({ description: 'Password' })
  @IsString()
  @MinLength(6)
  password: string;

  @ApiProperty({ description: 'User role', enum: ['admin', 'librarian'] })
  @IsEnum(['admin', 'librarian'])
  role: 'admin' | 'librarian';

  @ApiProperty({ description: 'Phone Number' })
  @IsPhoneNumber()
  phone_number: string;
}

export class JwtPayload {
  @ApiProperty({ description: 'User ID' })
  sub: number;

  @ApiProperty({ description: 'Username' })
  username: string;

  @ApiProperty({ description: 'User role' })
  role: string;
} 