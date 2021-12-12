import jwt from 'jsonwebtoken';
import {User} from '../../../../apiclasses/User';

export default async function handler(req, res){
  // Get values out of jwt
  const values = jwt.verify(req.query.jwt, process.env.JWT_SECURE_STRING);

  // Create user object and pass the values trough
  const user = new User(values);

  // get all users with ID
  const result = await user.checkSession();

  // send all users as JSON
  res.status(200).json(result);
}
