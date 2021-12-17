// This component creates the navigationbar.
// The tabs are createt with the params "left" and "right"
// Examples:
// <Nav left='{"item": ["home", "games"]}' right='{"item": ["profile", "logout"]}'/>

import Link from 'next/link';
import Image from 'next/image';
import Sticky from 'react-sticky-el';
import {BrowserView, MobileView, isBrowser} from 'react-device-detect';
import {useEffect, useState} from 'react';

import image from '../public/hamburger.svg';
import DropDown from './DropDown';

export default function Nav({left, right}){
  let navStyle;
  if(isBrowser){
    navStyle = require("../styles/NavBrowser.module.css");
  }else{
    navStyle = require("../styles/NavMobile.module.css");
  }

  function openMenu(){
    if(!isBrowser){
      document.getElementById("links").style.display = "block";
    }
  }

  function closeMenu(){
    if(!isBrowser){
      document.getElementById("links").style.display = "none";
    }
  }

  let [leftMenu, setLeftMenu] = useState("");
  let [rightMenu, setRightMenu] = useState("");

  useEffect(()=>{
    setLeftMenu(left.map((item)=>{
      if(item !== "home"){
      return(
        <li key={item}>
          <Link href={"/" + item.toLowerCase()}>
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
  }));

    setRightMenu(right.map((item)=>{
      if(typeof(item) === "object"){
        return(
          <li key={[Object.keys(item)[0]].toString()}>
            <DropDown title={[Object.keys(item)[0]].toString().toUpperCase()}>
              {item[Object.keys(item)[0]].map((subItem)=>{
                  if(typeof(subItem) === "object"){
                    return(
                      subItem.map((game)=>{
                        console.log(game.gm_Name);
                        return(
                          <Link key={game.usr2gm_ID_PK} href={"/" + [Object.keys(item)[0]].toString().toLowerCase() + "?id=" + game.usr2gm_ID_PK}>
                            {game.gm_Name + " " + game.gm_Version + " " + game.gm_Type}
                          </Link>
                        );
                      })
                    );
                  }else{
                    return(
                      <Link key={subItem} href={"/" + subItem.toLowerCase()}>
                        {subItem}
                      </Link>
                    );
                  }
                })
              }
            </DropDown>
          </li>
        );
      }else{
        return(
          <li key={item}>
            <Link href={"/" + item.toLowerCase()}>
              <a onClick={closeMenu}>
                {item.toUpperCase()}
              </a>
            </Link>
          </li>
        );
      }
    }));
  }, [left, right]);

    return(
      <div>
        <MobileView>
          <div>
            <button onClick={openMenu} className={navStyle.mobileButton}>
              <div className={navStyle.img}>
                <Image alt="menubutton" src={image} height="35px" width="35px"/>
              </div>
            </button>
              <nav className={navStyle.links} id="links">
                <ul>
                  {leftMenu}
                  </ul>
                  <ul>
                  {rightMenu}
                </ul>
                <button onClick={closeMenu}>
                </button>
              </nav>
          </div>
        </MobileView>
        <BrowserView>
        <Sticky>
          <nav className={navStyle.container}>
            <ul className={navStyle.left}>
              {leftMenu}
            </ul>
            <ul className={navStyle.right}>
              {rightMenu}
            </ul>
          </nav>
        </Sticky>
        </BrowserView>
        </div>
    )
}
