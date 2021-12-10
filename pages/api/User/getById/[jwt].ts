import jwt from 'jsonwebtoken'
import {User} from '../../../../apiclasses/User'

export default async function handler(req, res){
  const values = jwt.verify(req, process.env.JWT_SECURE_STRING)
  const user = new User(values)
  try {
    const result = await user.getById()
    res.status(200).json(result)
  }catch (e){
    res.status(500)
  }
}
