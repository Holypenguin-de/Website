import FormBox from '../components/FormBox';
import {jwtFetch} from '../config';
import {useState} from 'react';
export default function Signup(){
  // TODO: Router.push to Loginpage
  // Create info var
  let [info, setInfo] = useState("");

  // Register user
  const register = async event => {
    event.preventDefault();
    let usr_Firstname = event.target.usr_Firstname.value;
    let usr_Lastname = event.target.usr_Lastname.value;
    let usr_Password = event.target.usr_Password.value;
    let usr_Password2 = event.target.usr_Password2.value;
    let usr_Nickname = event.target.usr_Nickname.value;
    let usr_Email = event.target.usr_Email.value;

    // Check usr_Password
    if (usr_Password === usr_Password2){
      const token = {
        "usr_Firstname": usr_Firstname,
        "usr_Lastname": usr_Lastname,
        "usr_Password": usr_Password,
        "usr_Email": usr_Email,
        "usr_Nickname": usr_Nickname,
        "usr_Admin": 0
      };

      const res = await jwtFetch({
        values: token,
        path: "/api/User/register"
      });

      console.log(res);

    } else {
      setInfo("Passwords dont match!");
    }

  };

  return(
    <>
      <FormBox>
        <h1>Sign Up</h1>
        <form onSubmit={register}>
          <input type="text" name="usr_Nickname" required/>
          <span>Nickname</span>

          <input type="text" name="usr_Firstname" required/>
          <span>Firstname</span>

          <input type="text" name="usr_Lastname" required/>
          <span>Lastname</span>

          <input type="password" name="usr_Password" required pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,100}$"/>
          <span>Password</span>

          <ul>
            <li>
              Password requirements:
            </li>
            <li>
              1 Uppercase Letter
            </li>
            <li>
              1 Lowercase Letter
            </li>
            <li>
              1 Number Letter
            </li>
            <li>
              1 Symbol Letter
            </li>
            <li>
              Min. 8 Character
            </li>
          </ul>

          <input type="password" name="usr_Password2" required/>
          <span>Repeat Password</span>

          <input type="email" name="usr_Email" required pattern=".*@.*\..*"/>
          <span>Email</span>

          <input type="submit" value="Sign Up"/>
        </form>
        <p>{info}</p>
      </FormBox>
    </>
  )
}
