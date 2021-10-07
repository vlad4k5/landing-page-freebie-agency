import s from "./TheTeam.module.scss"
import theTeamImg1 from "../../assets/images/theTeam1.jpg"
import theTeamImg2 from "../../assets/images/theTeam2.jpg"
import theTeamImg3 from "../../assets/images/theTeam3.jpg"
import img99 from "../../assets/images/img99.svg"
import star from "../../assets/images/star.svg"
import leftArrow from "../../assets/images/leftArrow.svg"
import rightArrow from "../../assets/images/rightArrow.svg"

const TheTeam = () => {
  return <div className={s.theTeam}>

    <div className={s.topSide}>
      <h3>The Team</h3>

      <div className={s.teamMembers}>
        <div className={s.teamMemberBlock} style={{backgroundImage: `url(${theTeamImg1})`}}>
          <div className={s.basicInfo}><span>TOM JONES</span></div>
        </div>

        <div className={s.teamMemberBlock} style={{backgroundImage: `url(${theTeamImg2})`}}>
          <div className={s.creativeDirectorInfo}>
            <span className={s.name}>TOM JONES</span>
            <div className={s.underline}></div>
            <span className={s.position}>Creative Director</span>
            <p>Create with simplicity in mind!</p>
          </div>
        </div>

        <div className={s.teamMemberBlock} style={{backgroundImage: `url(${theTeamImg3})`}}>
          <div className={s.basicInfo}><span>TIM CAHILL</span></div>
        </div>
      </div>
    </div>

    <div className={s.bottomSide}>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
      </p>
      <img className={s.img99} src={img99} alt="99" width={20}/>

      <div className={s.teamMemberInfo}>
        <span className={s.name}>DAVID JAMES</span>
        <span className={s.direction}> / Web Design</span>
        <div className={s.rating}>
          <img src={star} alt="Star"/>
          <img src={star} alt="Star"/>
          <img src={star} alt="Star"/>
          <img src={star} alt="Star"/>
          <img className={s.notActive} src={star} alt="Star"/>
        </div>
        <div className={s.underline}></div>
      </div>

      <button className={`${s.arrowButton} ${s.leftArrow}`}><img src={leftArrow} alt="Left Arrow"/></button>
      <button className={`${s.arrowButton} ${s.rightArrow}`}><img src={rightArrow} alt="Right Arrow"/></button>
    </div>
    
  </div>
}
 export default TheTeam