import '../styles/globals.css';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import cookies from 'js-cookie';
import jwt from 'jsonwebtoken';
import App from 'next/app';
import {jwtFetch} from '../lib/jwt';
import {useEffect, useState} from 'react';

export default function MyApp({ Component, pageProps}) {
  let [left, setLeft] = useState(["home", "news", "games"]);
  let [right, setRight] = useState([]);

  // SESSION CHECK
  useEffect(()=>{
    const fetchData = async(value)=>{
      const res = await jwtFetch({
        values: {"usr_ID_PK": JSON.parse(JSON.parse(value))[0].usr_ID_PK},
        path: "/api/User/getGames"
      });
      setRight([{"console": [res]}, {"profile": ["Settings", "Discord"]}, "logout"])
    };
    if(cookies.get("Session") !== undefined){
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
  }, [left])

  return (
    <>
      <Header/>
      <Nav left={left} right={right}/>

      <div className="content">
        <Component {...pageProps} />
      </div>

      <Footer/>
    </>
  )
}
