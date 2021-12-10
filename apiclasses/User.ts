import {executeQuery} from '../config';
import bcrypt from 'bcrypt';

export class User{

  // Variablen (DB-Attrebutes)
  private usr_ID_PK;
  private usr_Password;
  private usr_Nickname;
  private usr_Email;
  private usr_Firstname;
  private usr_Lastname;
  private usr_Admin;

  // Database
  private database = "Users";

  constructor(values){
    // Split values on DB-Attrebutes
    this.usr_ID_PK = values.usr_ID_PK;
    this.usr_Password = values.usr_Password;
    this.usr_Nickname = values.usr_Nickname;
    this.usr_Email = values.usr_Email;
    this.usr_Firstname = values.usr_Firstname;
    this.usr_Lastname = values.usr_Lastname;
    this.usr_Admin = values.usr_Admin;
  }

  // Get all existing User
  public async getAll() {
    try{
      const result = await executeQuery({
        query: 'SELECT usr_Nickname, usr_Firstname, usr_Lastname, usr_Email, usr_Admin FROM ' + this.database,
        values: ''
      });
      return result;
    } catch (e){
      return e;
    }
  }

  // Get user by ID
  public async getById(){
    try{
      const result = await executeQuery({
        query: 'SELECT usr_Nickname, usr_Firstname, usr_Lastname, usr_Email, usr_Admin FROM ' + this.database + ' WHERE usr_ID_PK = ?',
        values: [this.usr_ID_PK]
      });
      return result;
    }catch (e){
      return e;
    }
  }

  // Get user by Nickname
  public async getByNickname(){
    try{
      const result = await executeQuery({
        query: 'SELECT * FROM ' + this.database + ' WHERE usr_Nickname = ?',
        values: [this.usr_Nickname]
      });
      return result;
    }catch (e){
      return e;
    }
  }

  public async register(){
    try{
      const hash = bcrypt.hashSync(this.usr_Password, 12);
      const result = await executeQuery({
        query: 'INSERT INTO ' + this.database + ' (usr_Nickname, usr_Firstname, usr_Lastname, usr_Password, usr_Email, usr_Admin) VALUES (?, ?, ?, ?, ?, ?)',
        values: [this.usr_Nickname, this.usr_Firstname, this.usr_Lastname, hash, this.usr_Email, this.usr_Admin]
      });
      return result;
    } catch (e){
      return e;
    }
  }

  public async login(){
    try{
      const data = await this.getByNickname();
      if(data.length !== 0 && typeof(data) !== undefined){
        const hash = data[0].usr_Password;
        if(bcrypt.compareSync(this.usr_Password, hash)){
          return data;
        }
      }
      return "Wrong password or nickname!";
    } catch (e){
      return e;
    }
  }
}
