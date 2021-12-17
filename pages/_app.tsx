import '../styles/globals.css';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import cookies from 'js-cookie';
import jwt from 'jsonwebtoken';
import {jwtFetch} from '../lib/jwt';
import {useEffect, useState} from 'react';
import {useRouter} from 'next/router';

export default function MyApp({ Component, pageProps}) {

  // check if user is allowd to be there
  const router = useRouter();

  // list of allwed paths
  const allowedPaths = ["/home", "/games", "/", "/news", "/login", "/signup", "/logout"];

  // reroute user if he is not allowed to be there
  const checkCookie = event =>{
    if(!allowedPaths.includes(router.pathname) && cookies.get("Session") === undefined){
      router.push("/");
    }else if(!allowedPaths.includes(router.pathname)){
      try{
        jwt.verify(cookies.get("Session"), process.env.JWT_SECURE_STRING)
      }catch(e){
        router.push("/logout");
      }
    }
  }

  // generate Navbar Values
  let [left, setLeft] = useState(["home", "news", "games"]);
  let [right, setRight] = useState([]);

  useEffect(()=>{

    // async function for datafetching
    const fetchData = async(value)=>{
      if(cookies.get("Games") === undefined){
        const res = await jwtFetch({
          values: {"usr_ID_PK": JSON.parse(JSON.parse(value))[0].usr_ID_PK},
          path: "/api/User/getGames"
        });
        const token = jwt.sign(res, process.env.JWT_SECURE_STRING);
        cookies.set("Games", token);
      }
      try{
        const games = jwt.verify(cookies.get("Games"), process.env.JWT_SECURE_STRING);
        setRight([{"console": [games]}, {"settings": ["Profile", "Discord"]}, "logout"]);
      }catch(e){
        cookies.remove("Games");
      }
    };

    // check if Session-cookie is set
    if(cookies.get("Session") !== undefined){
      // try to verify jwt-cookie and fetch data
      try {
        let value = jwt.verify(cookies.get("Session"), process.env.JWT_SECURE_STRING);
        fetchData(value);
      } catch (e){
        cookies.remove("Session");
        setRight(["signup", "login"]);
      }
    } else {
      setRight(["signup", "login"]);
    }
  }, [left, router])

  return (
    <div onLoad={checkCookie}>
      <Header/>
      <Nav left={left} right={right}/>

      <div className="content">
        <Component {...pageProps} />
      </div>

      <Footer/>
    </div>
  )
}
