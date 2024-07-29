import '../src/styles/abstracts/main.css'
import Footer from './page/Footer';
import Header from "./page/Header";
import Index from "./page/indexPage/Index";
import Tricks from './page/trick/Tricks';
import TrickDetail from './page/trick/TrickDetail';


const resizeFz = () => {
  const body = document.querySelector('body')
  const  wh = window.innerWidth;
  let maxfz
  if(wh > 1279){
    maxfz = 1920;
  }else if(wh <= 1279 && wh > 768){
    maxfz = 1279;
  } else if (wh <= 768 && wh > 480){
    maxfz = 768;
  } else if (wh <= 480){
    maxfz = 480;
  }
  
  body.style.fontSize =  wh / maxfz +'rem'
}

window.addEventListener('resize',resizeFz)
resizeFz()

function App() {
  return (
    <>  
      <Header />
      {/* <Index></Index> */}
      <Tricks></Tricks>
      {/* <TrickDetail></TrickDetail> */}
      {/* <Footer /> */}
    </>
  );
}

export default App;