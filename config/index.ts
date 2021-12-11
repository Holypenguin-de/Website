// DATABASE CONFIG
import mysql from 'serverless-mysql';
const db = mysql({
  config: {
    host: process.env.MYSQL_HOST,
    //port: process.env.MYSQL_PORT,
    database: process.env.MYSQL_DB,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD
}
});

export async function executeQuery({query, values}){
  try{
    const results = await db.query(query, values);
    await db.end();
    return results;
  } catch (error){
    return {error};
  }
}

// FETCH JWT
import jwt from 'jsonwebtoken';

export async function jwtFetch({values, path}){
  // create jwt
  let token = jwt.sign(values, process.env.JWT_SECURE_STRING);

  // create header
  let header = new Headers();
  header.append("Content-Type", "application/json");

  // create fetch-options
  let fetchOptions = {
    method: 'POST',
    headers: header
  };

  let res;
  await fetch(path + "/" + token, fetchOptions)
    .then(response => response.text())
    .then(result => res = result)
    .catch(error => console.log('ERROR: ', error));
  return res;
}
