import { Connection } from 'mongoose';
import { UserSchema } from './users.schema';

export const UsersProviders = [
  {
    provide: 'USER_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('USER', UserSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
