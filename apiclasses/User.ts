import {executeQuery} from '../config'

export class User{

  // Variablen
  private usr_ID_PK
  private usr_Password
  private usr_Password2
  private usr_Nickname
  private usr_Email
  private usr_Firstname
  private usr_Lastname
  private usr_Admin

  // Database
  private database = "Users"

  constructor(values){
    this.usr_ID_PK = values.usr_ID_PK
    this.usr_Password = values.usr_Password
    this.usr_Password2 = values.usr_Password2
    this.usr_Nickname = values.usr_Nickname
    this.usr_Email = values.usr_Email
    this.usr_Firstname = values.usr_Firstname
    this.usr_Lastname = values.usr_Lastname
    this.usr_Admin = values.usr_Admin
  }

  public async getAll() {
    try{
      const result = await executeQuery({
        query: 'SELECT usr_Nickname, usr_Firstname, usr_Lastname, usr_Email, usr_Admin FROM ' + this.database,
        values: ''
      })
      return result;
    } catch (e){
      return e
    }
  }

  public async getById(){
    try{
      const result = await executeQuery({
        query: 'SELECT usr_Nickname, usr_Firstname, usr_Lastname, usr_Email, usr_Admin FROM ' + this.database + ' WHERE usr_ID_PK = ?',
        values: [this.usr_ID_PK]
      })
      return result
    }catch (e){
      return e
    }

  }
}
