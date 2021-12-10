import FormBox from '../components/FormBox'
export default function Signup(){
  return(
    <>
      <FormBox>
        <h1>Sign Up</h1>
        <form>
          <input type="text" required/>
          <span>Nickname</span>

          <input type="password" required pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,100}$"/>
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

          <input type="password" required/>
          <span>Repeat Password</span>

          <input type="email" required pattern=".*@.*\..*"/>
          <span>Email</span>

          <input type="submit" value="Sign Up"/>
        </form>
      </FormBox>
    </>
  )
}
