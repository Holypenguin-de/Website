import {User} from '../../../apiclasses/User'

export default async function handler(req, res){
  const user = new User("")

  try {
    const result = await user.getAll()
    res.status(200).json(result)
  }catch (e){
    res.status(500)
  }
}
