// This component creates the navigationbar.
// The tabs are createt with the params "left" and "right"
// Examples:
// <Nav left='{"item": ["home", "games"]}' right='{"item": ["profile", "logout"]}'/>

import Link from 'next/link';
import Image from 'next/image';
import Sticky from 'react-sticky-el';
import {BrowserView, MobileView} from 'react-device-detect';
import {useEffect, useState} from 'react';

import image from '../public/hamburger.svg';
import navStyle from '../styles/Nav.module.css';
import DropDown from './DropDown';

export default function Nav({left, right}){
  function openMenu(){
    document.getElementById("links").style.display = "block";
  }

  function closeMenu(){
    document.getElementById("links").style.display = "none";
  }

  let [leftMenu, setLeftMenu] = useState("");
  let [rightMenu, setRightMenu] = useState("");

  useEffect(()=>{
    setLeftMenu(left.item.map((item)=>{
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
  }));

    setRightMenu(right.item.map((item)=>{
      if(typeof(item) === "object"){
        return(
          <li key={[Object.keys(item)[0]].toString()}>
            <DropDown title={[Object.keys(item)[0]].toString().toUpperCase()}>
              {
                item[Object.keys(item)[0]].map((subItem)=>{
                  return(
                      <Link key={subItem} href={"/" + [Object.keys(item)[0]] + "?id=" + subItem}>
                        {subItem}
                      </Link>
                  );
                })
              }
            </DropDown>
          </li>
        );
      }else{
        return(
          <li key={item}>
            <Link href={"/" + item}>
              <a onClick={closeMenu}>
                {item.toUpperCase()}
              </a>
            </Link>
          </li>
        );
      }
    }));
  }, [left.item, right.item]);

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
