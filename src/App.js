import '../src/styles/abstracts/main.css'
import Footer from './page/Footer';
import Header from "./page/Header";
import Index from "./page/indexPage/Index";
import Tricks from './page/trick/Tricks';
import TrickDetail from './page/trick/TrickDetail';
import { Route, Routes } from 'react-router-dom';
import { changePageSize } from './store/page.js';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';


function App() {
  let dispatch = useDispatch()

  useEffect(()=> {
    resizeFz()

    window.addEventListener('resize',resizeFz)
  },[])
  
  const resizeFz = () => {
    const body = document.querySelector('body')
    const  wh = window.innerWidth;
    let maxfz
    if(wh > 1279){
      maxfz = 1920;
      dispatch(changePageSize('desk'))
    }else if(wh <= 1279 && wh > 768){
      maxfz = 1279;
      dispatch(changePageSize('laptop'))
    } else if (wh <= 768 && wh > 480){
      maxfz = 768;
      dispatch(changePageSize('tablet'))
    } else if (wh <= 480){
      maxfz = 480;
      dispatch(changePageSize('mobile'))
    }
  
    body.style.fontSize =  wh / maxfz +'rem'
  }







  return (
    <>  
      
      <Header />
      
      <Routes>
        <Route path="/index" element={<Index></Index>} />
        <Route path="/tricks" element={<Tricks></Tricks>} />
        <Route path="/tricks/:number" element={<TrickDetail/>} />
        <Route path="*" element={<div>잘 못 된 접속경로 입니다.</div>} />
      </Routes>
      {/* <TrickDetail></TrickDetail> */}

      
      
      
      <Footer />
    </>

  );
}

export default App;