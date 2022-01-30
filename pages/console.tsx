import {isBrowser} from 'react-device-detect';

export default function Console(){
  let consoleStyles;
  if(isBrowser){
    consoleStyles = require('../styles/pages/ConsoleBrowser.module.css');
  }else{
    consoleStyles = require('../styles/pages/ConsoleMobile.module.css');
  }

  const handleSubmit = event =>{

  };

  const handleClick = event =>{
    document.getElementById("input").focus();
  };


  return(
    <>
    <h1> Console </h1>
    <div className={consoleStyles.grid}>
      <div className={consoleStyles.buttons}>
        <button>Start</button>
        <button>Stop</button>
        <button>Restart</button>
        <button>Save</button>
      </div>
      <div className={consoleStyles.terminal} onClick={handleClick}>
      <form onSubmit={handleSubmit}>
      <input type="text" id="input"/>
      <input type="submit"/>
      </form>
      </div>
    </div>
    </>
  )
}
