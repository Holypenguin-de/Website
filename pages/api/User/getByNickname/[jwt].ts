import jwt from 'jsonwebtoken';
import {User} from '../../../../apiclasses/User';

export default async function handler(req, res){
  // Get data out of the jwttoken
  const values = jwt.verify(req.query.jwt, process.env.JWT_SECURE_STRING);

  // Pass the data to the User Object
  const user = new User(values);

  // Get all users
  const result = await user.getByNickname();

  // send user as JSON
  res.status(200).json(result);
}
