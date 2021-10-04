import s from "./Header.module.scss"
import backgroundHeaderImg from "../../assets/images/header.jpg"

const Header = () => {
  return <header className={s.header} style={{backgroundImage: `url(${backgroundHeaderImg})`}}>

    <nav>
      <button className={s.active}>WORKS</button>
      <button>ABOUT</button>
      <button>SERVICES</button>
      <button>BLOG</button>
      <button>CONTACT</button>
    </nav>

    <div className={s.headerInfo}>
      <h1>WHERE GREAT IDEAS COME TO LIFE</h1>
      <p>Passionate creative studio helping startups grow their business!</p>
    </div>

    <div className={s.paginator}>
      <button className={s.active}>01</button>
      <button>02</button>
      <button>03</button>
    </div>

  </header>
}
export default Header