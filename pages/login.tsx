import FormBox from '../components/FormBox';
import {useRouter} from 'next/router';
import {useState} from 'react';
import {jwtFetch} from '../lib/jwt';
import cookies from 'js-cookie';
import jwt from 'jsonwebtoken';

export default function Login(){

  const router = useRouter();

  // Create info var
  let [info, setInfo] = useState("");

  // Register user
  const login = async event => {
    event.preventDefault();
    let usr_Password = event.target.usr_Password.value;
    let usr_Nickname = event.target.usr_Nickname.value;

    const token = {
      "usr_Password": usr_Password,
      "usr_Nickname": usr_Nickname
    };

    const res = await jwtFetch({
      values: token,
      path: "/api/User/login"
    });
    if(res !== "Wrong password or nickname!"){
      cookies.set("Session", jwt.sign(JSON.stringify(res), process.env.JWT_SECURE_STRING));
      window.location.href = "/";
    } else {
      setInfo(res);
    }
  };
  return(
    <>
      <FormBox>
        <h1>Login</h1>
        <form onSubmit={login}>
          <input type="text" name="usr_Nickname" required/>
          <span>Nickname</span>

          <input type="password" name="usr_Password" required/>
          <span>Password</span>

          <input type="submit" value="Login"/>
        </form>
        <p>{info}</p>
      </FormBox>
    </>
  )
}
