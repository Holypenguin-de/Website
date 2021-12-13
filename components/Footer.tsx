import footerStyle from '../styles/Footer.module.css';

export default function Footer(){

  return (
    <>
      <div className={footerStyle.back}>
        <div>
          <a href="#">
            ↑ Back to top ↑
          </a>
        </div>
      </div>
      <div className={footerStyle.container}>
        <div>
          <h1>Impressum:</h1>
          <table>
            <tr>
              <th>
                Name:
              </th>
              <td>
                Sven Ziegler
              </td>
            </tr>
            <tr>
              <th>
                E-Mail:
              </th>
              <td>
                sven.ziegler@hotmail.com
              </td>
            </tr>
            <tr>
              <th>
                Country:
              </th>
              <td>
                Germany
              </td>
            </tr>
          </table>
        </div>
        <div>
          <h1>Sozial Media:</h1>
          <table>
            <tr>
              <th>
                YouTube:
              </th>
              <td>
                <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UCDZx4gbpl6H1gmMYr0UcIDw">
                  Svenum
                </a>
              </td>
            </tr>
            <tr>
              <th>
                Instagram:
              </th>
              <td>
                <a target="_blank" rel="noreferrer" href="https://www.instagram.com/svenum_graphics/">
                  svenum_graphics
                </a>
              </td>
            </tr>
            <tr>
              <th>
                Discord:
              </th>
              <td>
                <a target="_blank" rel="noreferrer" href="https://discord.com/invite/8dfFCFY">
                  Svenum_Graphics
                </a>
                <br/>
                <a target="_blank" rel="noreferrer" href="https://discord.gg/xPer4qUubC">
                  Holypenguin
                </a>
              </td>
            </tr>
          </table>
        </div>
        <div>
          <h1>Copyright:</h1>
          This page and the logo were created by Sven Ziegler and Benno Rodehack. The logo may NOT be used for purposes other than intended, i.e. it may only be distributed in connection with this website! ©
        </div>
        <div>
          <h1>Info:</h1>
          This site was written in <a target="_blank" rel="noreferrer" href="https://nextjs.org/">Nextjs</a>.
        </div>
      </div>
    </>
  )
}
