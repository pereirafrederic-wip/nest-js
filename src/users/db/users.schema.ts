import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  id: String,
  nom: String,
  prenom: String,
});

