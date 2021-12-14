//import dropDownStyle from '../styles/DropDown.module.css';
import {isBrowser} from 'react-device-detect';

export default function DropDown({children, title}){
  let dropDownStyle;
  if(isBrowser){
    dropDownStyle = require("../styles/DropDownBrowser.module.css");
  } else {
    dropDownStyle = require("../styles/DropDownMobile.module.css");
  }

  return(
    <>
      <div className={dropDownStyle.dropbtn}>
        {title}
      </div>
      <div className={dropDownStyle.dropContent}>
        {children}
      </div>
    </>
  );
}
