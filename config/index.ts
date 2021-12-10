// DATABASE CONFIG
import mysql from 'serverless-mysql'
const db = mysql({
  config: {
    host: process.env.MYSQL_HOST,
    //port: process.env.MYSQL_PORT,
    database: process.env.MYSQL_DB,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD
}
})

export async function executeQuery({query, values}){
  try{
    const results = await db.query(query, values)
    await db.end()
    return results
  } catch (error){
    return {error};
  }
}
