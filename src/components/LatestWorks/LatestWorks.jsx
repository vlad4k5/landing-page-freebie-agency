import s from "./LatestWorks.module.scss"
import cat from "../../assets/images/cat.jpg"
import laptop from "../../assets/images/laptop.jpg"
import camera from "../../assets/images/camera.jpg"
import computer from "../../assets/images/computer.jpg"

const LatestWorks = () => {
  return <div>
    
    <div className={s.container}>
    <div className={s.leftSide}>
      <h3>Latest Works</h3>
      <nav>
        <button className={s.active}>ALL</button>
        <button>WEB DESIGN</button>
        <button>BRANDING</button>
        <button>PHOTOGRAPHY</button>
        <button>ILLUSTRATION</button>
      </nav>

      <div className={`${s.workBlock} ${s.catBlock}`}>
        <img src={cat} alt="Cat"/>
        <p>A KITTEN’S LIFE</p>
        <div className={s.infoBlock}>
          <h4>Photography</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button>READ MORE</button>
        </div>
      </div>

      <div className={`${s.workBlock} ${s.laptopBlock}`}>
        <img src={laptop} alt="Laptop"/>
        <p>APPLE’s LOST MAGIC</p>
        <div className={s.infoBlock}>
          <h4>Photography</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button>READ MORE</button>
        </div>
      </div>
    </div>

    <div className={s.rightSide}>

      <div className={`${s.workBlock} ${s.cameraBlock}`}>
        <img src={camera} alt="Camera"/>
        <p>100 YEARS PHOTOGRAPHY</p>
        <div className={s.infoBlock}>
          <h4>Photography</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button>READ MORE</button>
        </div>
      </div>

      <div className={`${s.workBlock} ${s.computerBlock}`}>
        <img src={computer} alt="Computer"/>
        <p>GROOVEMADE PRODUCTS FOR MAC</p>
        <div className={s.infoBlock}>
          <h4>Photography</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button>READ MORE</button>
        </div>
      </div>

      <button className={s.viewMoreButton}>view more</button>

    </div>
    </div>

  </div>
}
export default LatestWorks