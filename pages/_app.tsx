import '../styles/globals.css';
import Header from '../components/Header';
import Nav from '../components/Nav';

export default function MyApp({ Component, pageProps }) {
  let left = {"item": ["home", "news", "games"]};
  let right = {"item": ["signup", "login"]};
  return (
    <>
      <Header/>
      <Nav left={left} right={right}/>

      <div className="content">
        <Component {...pageProps} />
      </div>
    </>
  )
}
