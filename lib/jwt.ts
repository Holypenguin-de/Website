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
  if(typeof(res) !== "string"){
    return JSON.parse(res);
  }else{
    return res;
  }
}
