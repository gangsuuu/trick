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
    Array.from(imgWraRef.current.children).forEach((img)=> {
      img.style.left = Math.random() * 100 +'%'
      img.style.top = Math.random() * 100 +'%'
      img.style.transform = `scale(${(Math.random()*(105 - 60 + 1) + 60)/100})`
    })
    
  },[])
  return(
    <section className="index-section-02">
      <div className="index-section02--wrapper">
        <div 
          className='index-section02--imagesWrapper'
          ref={imgWraRef}
        >
          { Array(0).fill(
              <div className='index-section02--image'>
                {/* <img src=""></img> */}
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
            <div className='index-section02--subWrapper'>
              <p className='index-section02--content'>GSAP를 이용하여 간단한 트랜지션부터 복잡한 인트로까지 작업 가능하며, GSAP Scrolltriger을 통해 사용자의 진행도에 따른 애니메이션을 출력할 수 있습니다.</p>
            </div>
            <div className='index-section02--showIconWrapper'>
              <div className='index-section02--showText'>
                <p>보기</p>
              </div>
              <div className='index-section02--icon'>
                <p className='index-section02--arrowIcon arrowOne'>⬈</p>
                <p className='index-section02--arrowIcon arrowTwo'>⬈</p>
              </div>
            </div>
          </div> 
          <div className='index-section02--textWrapper'>
            <p className='index-section02--subTitle'>JavaScript, Canvas, Three.js 스크립트 애니메이션</p>
            <div className='index-section02--subWrapper'>
              <p className='index-section02--content'>JavaScript를 요소들을 추가 및 제거등 관리하며 동적인 애니메이션을 관리할 수 있습니다. canvas와 three.js를 통해 css를 활용하기 표현하기 힘든 디테일한 애니메이션과 요소 및 물리법칙을 구현하고, img, video등이 컨텐츠의 요소를 관리할 수 있습니다.  </p>
            </div>
            <div className='index-section02--showIconWrapper'>
              <div className='index-section02--showText'>
                <p>보기</p>
              </div>
              <div className='index-section02--icon'>
                <p className='index-section02--arrowIcon arrowOne'>⬈</p>
                <p className='index-section02--arrowIcon arrowTwo'>⬈</p>
              </div>
            </div>
          </div>
          <div className='index-section02--textWrapper'>
            <p className='index-section02--subTitle'>기본 css에서 제공하는 기능</p>
            <div className='index-section02--subWrapper'>
             <p className='index-section02--content'>단순한 요소의 요소의 애니메이션은 KeyFrame, transition을 통해 출력해낼 수 있으며, 유저와 웹의 상호작용을 위해, ui 사용 가이드라인을 제공 할 hover, focus, active 등에 접근할 수 있습니다. 상대적으로 많이 다루지 않는 blend-mode, filter, clip-path를 활용하여 디테일의 수준이나, 연출가능한 스펙트럼을 넓히는 것에도큰 심여를 기울이고 있습니다. </p>
            </div>
            <div className='index-section02--showIconWrapper'>
              <div className='index-section02--showText'>
                <p>보기</p>
              </div>
              <div className='index-section02--icon'>
                <p className='index-section02--arrowIcon arrowOne'>⬈</p>
                <p className='index-section02--arrowIcon arrowTwo'>⬈</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

function SectionThird (){
  return(
    <section className="index-section-03">
      <div className='index-section03--wrapper'>
        <div className='index-section03--reasonFirst'>
          <div className='index-section03--whatIsAnimation'>
            <div className='index-section03--whatIsAnimation-black'>
              <p>웹페이지는 사용자가 브랜드에 접근할 수 있게 해주는 매개체로서 역할만 수행한다고 생각하지 않습니다.
                브랜드결과 일치하며, 목적에 맞는 UI디자인으로 만들어진 웹페이지는 단순한 홈페이지가 아닌 브랜드의 가치를 대변하는 수단입니다.
                애니메이션 요소는 웹에 에너지를 불어넣고, 사용자가 홈페이지와 상호작용하고 있음을 알려줍니다.
                잘 만들어진 애니메이션은 사용자의 이목을 집중시킬 수 있으며 브랜드 경험을 만들어 줄 것 입니다.
              </p>
            </div>
            <div className='index-section03--whatIsAnimation-gray'>
              <p>웹페이지는 사용자가 브랜드에 접근할 수 있게 해주는 매개체로서 역할만 수행한다고 생각하지 않습니다.
                브랜드결과 일치하며, 목적에 맞는 UI디자인으로 만들어진 웹페이지는 단순한 홈페이지가 아닌 브랜드의 가치를 대변하는 수단입니다.
                애니메이션 요소는 웹에 에너지를 불어넣고, 사용자가 홈페이지와 상호작용하고 있음을 알려줍니다.
                잘 만들어진 애니메이션은 사용자의 이목을 집중시킬 수 있으며 브랜드 경험을 만들어 줄 것 입니다.
              </p>
            </div>
            
          </div>
          <div className='index-section03--experienceAni'>
          </div>
        </div>
        <div className='index-section03--reasonSecond'>
          <div className='index-section03--titleWrapper'>
            <div className='index-section03--titles'>
              <div><p>What Is Animation</p></div>
              <div><p>Animation</p></div>
              <div><p>Why Do I Made</p></div>
            </div>
          </div>
          <div className='index-section03--whyDoIMade'>
            <div>
              <p>
                처음 웹페이지의 매력을 느끼게 되었던 것은 2022년 7월 30일, 'theFWA'의 site of day 에 선정된 '60fps'와 'immersive-garden'이 함께 제작한 브랜드 'DIOR'의 웹페이지 'Dioriviera'를 접했을 때 입니다.
                디올의 첫 여성 디렉터인 '마리아 그라우치'의 'Dioriviera' 컬렉션을 홍보하기 위한 3d 랜딩페이지로서, 스크롤에 따라 카메라가 움직이면 진행되며 Dioriviera 컬렉션을 하나의 여행이라는 컨셉으로 즐길 수있었고,
                이 경험을 통해서 개발자로서 진로를 확고히 하였고, 웹 개발자로서 추구하는 마음가짐의 기반을 다듬게 되었습니다. 
                디자이너의 의도를 이해하고, 그에 부합하는 애니메이션과 웹을 구현 해내는 것입니다. 디자이너의 하나의 도구로서 아이디어를 실제로 구현해내고, 이를 통해서 클라이언트와 사용자를 만족 시킬 수 있는 홈페이지를 제작 함으로서
                팀의 가치를 올려내고, 이를 통해 자아실현을 해내고자 합니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}