import {executeQuery} from '../lib/db';
import bcrypt from 'bcrypt';
import {randomString} from '../lib/random';
import {Games} from './Games';
import {User2Game} from './User2Game';
import {sleep} from '../lib/sleep';

export class User{

  // Variablen (DB-Attrebutes)
  private usr_ID_PK:Number;
  private usr_Password:string;
  private usr_Nickname:string;
  private usr_Email:string;
  private usr_Firstname:string;
  private usr_Lastname:string;
  private usr_Admin:number;
  private usr_Token:string;

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
    this.usr_Token = values.usr_Token;
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
        query: 'INSERT INTO ' + this.database + ' (usr_Nickname, usr_Firstname, usr_Lastname, usr_Password, usr_Email, usr_Admin, usr_Token) VALUES (?, ?, ?, ?, ?, ?, ?)',
        values: [this.usr_Nickname, this.usr_Firstname, this.usr_Lastname, hash, this.usr_Email, this.usr_Admin, randomString(128)]
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

  public async checkSession(){
    try{
      const result = await executeQuery({
        query: 'SELECT COUNT(*) AS row_Count FROM ' + this.database + ' WHERE usr_ID = ? AND usr_Token = ?',
        values: [this.usr_ID_PK, this.usr_Token]
      });
      return result;
    }catch (e){
      return e;
    }
  }

  public async getGames(){
    try{
      const usr2gm = new User2Game({"usr_ID_FK": this.usr_ID_PK});
      const gm_IDs = await usr2gm.getByUsrId();
      let gameList = []

      await gm_IDs.forEach(async id => {
        const games = new Games({"gm_ID_PK": id.gm_ID_FK});
        const game = await games.getById();
        gameList.push({usr2gm_ID_PK: id.usr2gm_ID_PK, gm_ID_PK: game[0].gm_ID_PK,gm_Name: game[0].gm_Name, gm_Version: game[0].gm_Version,usr2gm_Port: id.usr2gm_Port,gm_Type: game[0].gm_Type});
      });
      await sleep(5);
      return gameList;
    }catch (e){
      return e;
    }
  }
}
