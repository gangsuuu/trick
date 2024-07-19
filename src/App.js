import '../src/styles/abstracts/main.css'
import Footer from './page/Footer';
import Header from "./page/Header";
import Index from "./page/indexPage/Index";
import Tricks from './page/trick/Tricks';
import TrickDetail from './page/trick/TrickDetail';

function App() {
  return (
    <>  
      <Header />
      {/* <Index></Index> */}
      {/* <Tricks></Tricks> */}
      <TrickDetail></TrickDetail>
      {/* <Footer /> */}
    </>
  );
}

export default App;
