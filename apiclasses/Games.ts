import {executeQuery} from '../lib/db';

export class Games{

  private gm_ID_PK:number;
  private gm_Name:string;
  private gm_Type:string;
  private gm_Version:string;

  private database = "Games";

  constructor(values){
    this.gm_ID_PK = values.gm_ID_PK;
    this.gm_Name = values.gm_Name;
    this.gm_Type = values.gm_Type;
    this.gm_Version = values.gm_Version;
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

  public async getById(){
    try{
      const result = await executeQuery({
        query: 'SELECT * FROM ' + this.database + ' WHERE gm_ID_PK = ?',
        values: [this.gm_ID_PK]
      });
      return result;
    }catch (e){
      return e;
    }
  }
}
