import {executeQuery} from '../lib/db';

export class User2Game{

  private usr2gm_ID_PK:number;
  private gm_ID_FK:number;
  private usr_ID_FK:number;
  private usr2gm_Port:number;

  private database = "User2Game";

  constructor(values){
    this.usr2gm_ID_PK = values.usr2gm_ID_PK;
    this.gm_ID_FK = values.gm_ID_FK;
    this.usr_ID_FK = values.usr_ID_FK;
    this.usr2gm_Port = values.usr2gm_Port;
  }

  public async getAll(){
    try{
      const result = await executeQuery({
        query: 'SELECT * FROM ' + this.database,
        values: ''
      });
      return result;
    } catch (e){
      return e;
    }
  }

  public async getByUsrId(){
    try{
      const result = await executeQuery({
        query: "SELECT * FROM " + this.database + " WHERE usr_ID_FK = ?",
        values: [this.usr_ID_FK]
      });
      return result;
    }catch (e){
      return e;
    }
  }

}
