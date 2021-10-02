import s from "./WeSquad.module.scss"
import weSquad1 from "../../assets/images/weSquad1.jpg"
import weSquad2 from "../../assets/images/weSquad2.jpg"

const WeSquad = () => {
  return <div className={s.weSquad}>

    <div className={s.info}>
      <span className={s.weAre}>WE ARE</span>
      <p className={s.theSqwd}>THE SQWD</p>
      <p className={s.leftParagraph}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
        <div></div>
      </p>
      
      <img src={weSquad1} alt="We Are Squad" className={s.firstImg}/>
      <div className={s.greenBlock}></div>
      <img src={weSquad2} alt="We Are Squad" className={s.secondImg}/>
      <p className={s.rightParagraph}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
        <div></div>
      </p>
    </div>

    
  </div>
}

export default WeSquad
