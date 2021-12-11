// This component creates a form-box
// Example:
// <FormBox>
//   <h1>Sign Up</h1>     <-- big Header
//   <form>
//     <input type="text" required/>
//     <span>Nickname</span>    <-- Placeholder
//
//     <input type="password" required pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,100}$"/>
//     <span>Password</span>
//
//     <ul>
//       <li>
//         Password requirements:  <-- First li is the Header of ul
//       </li>
//       <li>
//         1 Uppercase Letter
//       </li>
//       <li>
//         1 Lowercase Letter
//       </li>
//       <li>
//         1 Number Letter
//       </li>
//       <li>
//         1 Symbol Letter
//       </li>
//       <li>
//         Min. 8 Character
//       </li>
//     </ul>
//
//     <input type="password" required/>
//     <span>Repeat Password</span>
//
//     <input type="email" required pattern=".*@.*\..*"/>
//     <span>Email</span>
//
//     <input type="submit" value="Sign Up"/>
//   </form>
// </FormBox>




import formStyle from '../styles/FormBox.module.css';
import {useEffect} from 'react';

export default function FormBox({children}){
  useEffect(() =>{
    window.addEventListener('change', (event) =>{
      if((event.target as HTMLInputElement).value !== ""){
        ((event.target as HTMLElement).nextElementSibling as HTMLElement).style.top = "-51px";
        ((event.target as HTMLElement).nextElementSibling as HTMLElement).style.left = "8.5%";
        ((event.target as HTMLElement).nextElementSibling as HTMLElement).style.color = "var(--main_font_color)";
        ((event.target as HTMLElement).nextElementSibling as HTMLElement).style.textDecoration = "underline";
      }else{
        ((event.target as HTMLElement).nextElementSibling as HTMLElement).style.top = "-28px";
        ((event.target as HTMLElement).nextElementSibling as HTMLElement).style.left = "10%";
        ((event.target as HTMLElement).nextElementSibling as HTMLElement).style.color = "gray";
        ((event.target as HTMLElement).nextElementSibling as HTMLElement).style.textDecoration = "none";
      }
    })
  })

  return(
    <div className={formStyle.container}>
      {children}
    </div>
  )
}
