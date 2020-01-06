import { Document } from 'mongoose';

export interface IUsers extends Document {
  readonly id: number;
  readonly nom: string;
  readonly prenom: string;
}
