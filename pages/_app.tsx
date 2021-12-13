import '../styles/globals.css';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import cookies from 'js-cookie';
import jwt from 'jsonwebtoken';

export default function MyApp({ Component, pageProps }) {
  let left = {"item": ["home", "news", "games"]};
  let right:object;

  // SESSION CHECK
  if(cookies.get("Session") !== undefined){
    try {
      jwt.verify(cookies.get("Session"), process.env.JWT_SECURE_STRING);
      right = {"item":["logout"]};
    } catch (e){
      right = {"item":["signup", "login"]};
    }
  } else {
    right = {"item":["signup", "login"]};
  }

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
