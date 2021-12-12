import cookies from 'js-cookie';
import {useRouter} from 'next/router';
import {useEffect} from 'react';

export default function Logout(){
  const router = useRouter();
  cookies.remove("Session");
  useEffect(() => {
    router.push("/");
  });

  return null;
}
