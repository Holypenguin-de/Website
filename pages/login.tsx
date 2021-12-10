import FormBox from '../components/FormBox'

export default function Login(){
  return(
    <>
      <FormBox>
        <h1>Login</h1>
        <form>
          <input type="text" required/>
          <span>Nickname</span>
          
          <input type="password" required/>
          <span>Password</span>

          <input type="submit" value="Login"/>
        </form>
      </FormBox>
    </>
  )
}
