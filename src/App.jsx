import s from "./App.module.scss"
import Header from "./components/Header/Header";
import LatestWorks from "./components/LatestWorks/LatestWorks";
import OurServices from "./components/OurServices/OurServices";
import WeSquad from "./components/WeSquad/WeSquad";


const App = () => {
  return <div className={s.app}>
    <Header />
    <WeSquad />
    <OurServices />
    <LatestWorks />
  </div>
}

export default App;
