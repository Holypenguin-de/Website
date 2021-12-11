// This component creates the Header
// You call it:
// <Header/>

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import HeaderStyle from '../styles/Header.module.css';
import image from '../public/logo.svg';

export default function Header(){
  return(
    <div className={HeaderStyle.container}>
      <Head>
        <title>Holypenguin</title>
      </Head>
      <Link href='/'>
        <a>
          <Image alt="holypenguin-logo" src={image} width={50} height={50}/>
          <h1>Holypenguin</h1>
        </a>
      </Link>
    </div>
  )
}
