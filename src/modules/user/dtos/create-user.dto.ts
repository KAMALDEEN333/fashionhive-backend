import { IsString, IsEmail, Length, IsEnum, IsOptional } from "class-validator";
import { UserRole } from "../entities/user.entity";

export class CreateUserDto {
  @IsString()
  @Length(3, 20)
  username: string;

  @IsEmail()
  email: string;

  @IsString()
  @Length(6, 50)
  password: string;

  @IsOptional()
  @IsEnum(UserRole)
  role?: UserRole;
}
