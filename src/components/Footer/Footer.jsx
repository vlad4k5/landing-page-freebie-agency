import s from "./Footer.module.scss"
import caseImg from "../../assets/images/case.svg"
import letter from "../../assets/images/letter.svg"
import rightArrow from "../../assets/images/rightArrow.svg"
import facebookLogo from "../../assets/images/facebookLogo.svg"
import twitterLogo from "../../assets/images/twitterLogo.svg"
import pinterestLogo from "../../assets/images/pinterestLogo.svg"

const Footer = () => {
  return <footer>
    <div className={s.topSide}>

      <div className={s.leftBlock}>
        <img src={caseImg} alt="Case"/>
        <h4>Want to work together?</h4>
        <p>Amazing. Tell us about your project!</p>
        <img src={rightArrow} className={s.arrow} alt="Arrow" />
      </div>

      <div className={s.rightBlock}>
        <img src={letter} alt="Letter"/>
        <h4>Contact us</h4>
        <p>Get in touch</p>
        <img src={rightArrow} className={s.arrow} alt="Arrow" />
      </div>

    </div>

    <div className={s.middleSide}>
      <h3>SQWD</h3>
      <p>3rd Floor, Santa Monica Beach, CA, San Francisco</p>
      <p>(359) 0 123 456 789 - info@yourmail.com</p>

      <div className={s.contacts}>
        <img src={facebookLogo} alt="Facebook"/>
        <img src={twitterLogo} alt="Twitter"/>
        <img src={pinterestLogo} alt="Pinterest"/>
      </div>

    </div>

    <div className={s.bottomSide}>
      <p>Copyright 2016 - All Rights Reserved - Designed by JD</p>
    </div>

  </footer>
}
export default Footer