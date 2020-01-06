import { IsString, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsString()
  readonly id: string;

  @IsString()
  @IsNotEmpty()
  readonly nom: string;

  @IsString()
  @IsNotEmpty()
  readonly prenom: string;
}
