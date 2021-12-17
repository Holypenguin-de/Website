import cookies from 'js-cookie';
import {useEffect} from 'react';

export default function Logout(){
  cookies.remove("Session");
  cookies.remove("Games");
  useEffect(() => {
    window.location.href="/";
  });

  return null;
}
