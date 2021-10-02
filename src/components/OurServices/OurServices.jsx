import s from "./OurServices.module.scss"
import pencil from "../../assets/images/pencil.svg"

const OurServices = () => {
  return <div className={s.ourServices}>
    <h2>Our Services</h2>

    <div className={s.container}>
      <div>
        <h3>BRANDING</h3>
        <p>Process of researching, developing, and applying a distinctive feature or set of features to your organization.</p>
        <button>READ MORE</button>
        <div className={s.imgBlock}>
          <img src={pencil} alt="Branding "/>
        </div>
        
      </div>

      <div>
        <h3>DESIGN</h3>
        <p>The talent and effort of the best designers, web developers and digital agencies.</p>
        <button>READ MORE</button>
        <div className={s.imgBlock}>
          <img src={pencil} alt="Design "/>
        </div>
        
      </div>

      <div>
        <h3>DEVELOPMENT</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
        <button>READ MORE</button>
        <div className={s.imgBlock}>
          <img src={pencil} alt="Development "/>
        </div>
        
      </div>

    </div>
  </div>
}
export default OurServices