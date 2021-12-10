import {User} from '../../../apiclasses/User';

export default async function handler(req, res){
  // Create user object
  const user = new User("");

  // Get all users
  const result = await user.getAll();

  // Send users as JSON
  res.status(200).json(result);
}
