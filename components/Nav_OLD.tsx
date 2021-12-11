// This component creates the navigationbar.
// The tabs are createt with the params "left" and "right"
// Examples:
// <Nav left='{"item": ["home", "games"]}' right='{"item": ["profile", "logout"]}'/>

import Link from 'next/link';
import Image from 'next/image';
import Sticky from 'react-sticky-el';
import {UserAgentProvider, UserAgent} from '@quentin-sommer/react-useragent';
import {useEffect, useState} from 'react';
import image from '../public/hamburger.svg';
import navStyle from '../styles/Nav.module.css';

export default function Nav({left, right}, {props}){
  function openMenu(){
    document.getElementById("links").style.display = "block";
  }

  function closeMenu(){
    document.getElementById("links").style.display = "none";
  }

  const [ua, setUA] = useState("");
  useEffect(() => {
    setUA(window.navigator.userAgent);
  });

    return(
      <UserAgentProvider ua={window.navigator.userAgent}>
      <div>
        <UserAgent mobile>
          <div>
            <button onClick={openMenu} className={navStyle.mobileButton}>
              <div className={navStyle.img}>
                <Image alt="menubutton" src={image} height="35px" width="35px"/>
              </div>
            </button>
              <nav className={navStyle.links} id="links">
                <ul>
                  {left.item.map((item)=>{
                    if(item !== "home"){
                    return(
                      <li key={item}>
                        <Link href={"/" + item}>
                          <a onClick={closeMenu}>
                            {item.toUpperCase()}
                          </a>
                        </Link>
                      </li>
                    )
                  } else {
                    return(
                      <li key={item}>
                        <Link href={"/"}>
                          <a onClick={closeMenu}>
                            {item.toUpperCase()}
                          </a>
                        </Link>
                      </li>
                    )
                  }
                  })}
                  </ul>
                  <ul>
                  {right.item.map((item)=>{
                    return(
                      <li key={item}>
                        <Link href={"/" + item}>
                          <a onClick={closeMenu}>
                            {item.toUpperCase()}
                          </a>
                        </Link>
                      </li>
                    )
                  })}
                </ul>
                <button onClick={closeMenu}>
                </button>
              </nav>
          </div>
        </UserAgent>
        <UserAgent computer>
        <Sticky>
          <nav className={navStyle.container}>
            <ul className={navStyle.left}>
              {left.item.map((item)=>{
                if(item !== "home"){
                return(
                  <li key={item}>
                    <Link href={"/" + item}>
                      {item.toUpperCase()}
                    </Link>
                  </li>
                )
              } else {
                return(
                  <li key={item}>
                    <Link href={"/"}>
                      {item.toUpperCase()}
                    </Link>
                  </li>
                )
              }
              })}
            </ul>

            <ul className={navStyle.right}>
              {right.item.map((item)=>{
                return(
                  <li key={item}>
                    <Link href={"/" + item}>
                      {item.toUpperCase()}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>
        </Sticky>
        </UserAgent>
        </div>
      </UserAgentProvider>
    )
}
