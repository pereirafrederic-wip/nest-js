import { IsString, IsNotEmpty } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @IsString()
  @ApiModelProperty()
  readonly id: string;

  @IsString()
  @IsNotEmpty()
  @ApiModelProperty()
  readonly nom: string;

  @IsString()
  @IsNotEmpty()
  @ApiModelProperty()
  readonly prenom: string;
}
