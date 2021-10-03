import s from "./App.module.scss"
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LatestWorks from "./components/LatestWorks/LatestWorks";
import OurServices from "./components/OurServices/OurServices";
import TheTeam from "./components/TheTeam/TheTeam";
import WeSquad from "./components/WeSquad/WeSquad";


const App = () => {
  return <div className={s.app}>
    <Header />
    <WeSquad />
    <OurServices />
    <LatestWorks />
    <TheTeam />
    <Footer />
  </div>
}

export default App;
