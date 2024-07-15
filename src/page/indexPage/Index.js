import { useEffect, useRef } from 'react'
import video from '../../assets/videos/videoAssets.mp4'

export default function Index () {


  return (
    <>
      <SectionFirst></SectionFirst>
      <SectionSecond></SectionSecond>
      <SectionThird></SectionThird>
    </>
  )
}

function SectionFirst (){
  const sourceRef = useRef()
  const videoRef = useRef()
  const playRef = useRef()
  useEffect(() => {
  },[])

  const handleLoadedData = () =>{
    sourceRef.autoPlay = true;
  }


  return(
    <section className="index-section-01">
      <div className="index-section01-videoWrapper">
        <div className="index-section01-video">
          <video 
          ref={videoRef}
          onLoadedData={handleLoadedData}
          >
            <source  
            ref={sourceRef}
            src={video} type="video/mp4"></source>
          </video>
        </div>
        <div className='index-section01-Control'>
          <div 
            className='index-section01-playBtn'
            ref={playRef}
          >
          </div>
          <div className="index-section01--textWrapper">
            <div className='index-section01--welcome'>
              <p>welcome to the site</p>
            </div>
            <div className='index-section01--title'>
              <h3>the trick of web publish</h3>
            </div>
          </div>
        </div>
        <div className='index-section01--videoControlsWrapper'>
          <div className='index-section01--openBtnWrp'>
            <div className='index-section01-openBtn'></div>
            <div className='index-section01-openBtn'></div>
            <div className='index-section01-openBtn'></div>
            <div className='index-section01-openBtn'></div>
          </div>
          <div className='index-section01--creator'>create by huck</div>
          <div className='index-section01--detailControls'></div>
        </div>
        <div className='index-section01--howToUse'>
          <div className='index-section01-scrollIcon'>
          </div>
        </div>
      </div>
    </section>
  )
}

function SectionSecond (){

  const imgWraRef = useRef(null)
  useEffect(()=>{
    console.log(imgWraRef.current.children);
    Array.from(imgWraRef.current.children).forEach((img)=> {
      img.style.left = Math.random() * 100 +'%'
      img.style.top = Math.random() * 100 +'%'
    })
    
  },[])
  return(
    <section className="index-section-02">
      <div className="index-section02--wrapper">
        <div 
          className='index-section02--imagesWrapper'
          ref={imgWraRef}
        >
          { Array(10).fill(
              <div className='index-section02--image'>
                <img src="#"></img>
              </div>
            )
           }
        </div>
        <div className='index-section02--title'>
          <h2>what i made in</h2>
        </div>
        <div className='index-section02--textWrappers'>
          <div className='index-section02--textWrapper'>
            <p className='index-section02--subTitle'>GSAP, Gsap ScrollTriger 등의 라이브러리 활용</p>
            <p className='index-section02--content'>GSAP를 이용하여 간단한 트랜지션부터 복잡한 인트로까지 작업 가능하며, GSAP Scrolltriger을 통해 사용자의 진행도에 따른 애니메이션을 출력할 수 있습니다.</p>
          </div>
          <div className='index-section02--textWrapper'>
            <p className='index-section02--subTitle'>JavaScript, Canvas, Three.js 스크립트 애니메이션</p>
            <p className='index-section02--content'>JavaScript를 요소들을 추가 및 제거등 관리하며 동적인 애니메이션을 관리할 수 있습니다. canvas와 three.js를 통해 css를 활용하기 표현하기 힘든 디테일한 애니메이션과 요소 및 물리법칙을 구현하고, img, video등이 컨텐츠의 요소를 관리할 수 있습니다.  </p>
          </div>
          <div className='index-section02--textWrapper'>
            <p className='index-section02--subTitle'>기본 css에서 제공하는 기능</p>
            <p className='index-section02--content'>단순한 요소의 요소의 애니메이션은 KeyFrame, transition을 통해 출력해낼 수 있으며, 유저와 웹의 상호작용을 위해, ui 사용 가이드라인을 제공 할 hover, focus, active 등에 접근할 수 있습니다. 상대적으로 많이 다루지 않는 blend-mode, filter, clip-path를 활용하여 디테일의 수준이나, 연출가능한 스펙트럼을 넓히는 것에도큰 심여를 기울이고 있습니다. </p>
          </div>
        </div>

      </div>
    </section>
  )
}

function SectionThird (){
  return(
    <section className="index-section-03">
      <div>
      </div>
    </section>
  )
}