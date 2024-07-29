import { useEffect, useRef, useState } from 'react'
import video from '../../assets/videos/videoAssets.mp4'
import axios from 'axios'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { getValue, wait } from '@testing-library/user-event/dist/utils'

gsap.registerPlugin(ScrollTrigger)

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
  let [showControl,setShowControl] = useState(false)
  let [onControler,setOnControler] = useState(false)
  let [audioMute,setAudioMute] = useState(false)
  let [play,setPlay] = useState(false)
  
  const closeBtnRef = useRef()
  const videoRef = useRef()
  const progressControlRef = useRef()
  const rangePassedRef = useRef()
  const rangeRef = useRef()
  let closeBtn
  let clicked

  const moveCloseBtn = (x,y,p) =>{
    if(closeBtn === undefined) return
    if(closeBtn === p) {
      closeBtn.style.transition = `0s`
      closeBtn.style.transform = `translate(${x}px,${y}px) scale(0.2)`
      closeBtn.style.transition = `.25s`
      return
    }
    let w = closeBtn.offsetWidth
    let h = closeBtn.offsetHeight
    if(onControler === true){
      closeBtn.style.transform = `translate(${x - w}px,${y - h}px) scale(0.2)`
      closeBtn.style.transition = `.25s`
    } else {
      closeBtn.style.transform = `translate(${x - (w / 2)}px,${y - (h / 2)}px) scale(1)`
      closeBtn.style.transition = `.1s`
    }
  }

  const setProgressBar = () => {
    const range = (videoRef.current.currentTime / videoRef.current.duration) * 100
    getRange(range)
  }

  const controllMove = (x) => {
    if(!clicked) return
    let start = rangeRef.current.getBoundingClientRect().left
    let rangePosition = (x - start)
    let range =  (rangePosition / rangeRef.current.offsetWidth) * 100

    getRange(range)
    videoRef.current.currentTime = range * (videoRef.current.duration / 100)
  }

  const getRange = (range) => {
    progressControlRef.current.style.left = range + '%'
    rangePassedRef.current.style.width = range + '%'
  }


  useEffect(() => {
    closeBtn = closeBtnRef.current
  },[onControler,showControl])

  useEffect(() => {
    play === true ? videoRef.current.play() : videoRef.current.pause()
  },[play])

  useEffect(() => {
    videoRef.current.muted = audioMute
  },[audioMute])

  return(
    <section className="index-section-01">
      <div className="index-section01-videoWrapper">
        <div className="index-section01-video">
          <video 
            ref={videoRef}
            loop
            autoPlay
            onTimeUpdate={() => setProgressBar()}
            >
            <source  
            src={video} type="video/mp4"></source>

          </video>
        </div>
        
        <div 
        className = {`index-section01-Control 
          ${showControl === true
            ? 'hide'
            : ''
          }`
        }
        >
          <div className = "index-section01--textWrapper">
            <div className = 'index-section01--welcome'>
              <p>welcome to the site</p>
            </div>
            <div className='index-section01--title'>
              <h3>the trick of web publish</h3>
            </div>
          </div>
          <div
            className='index-section01--videoControls--OpenWrapper'
          >
            <div 
              className='index-section01--openBtnWrp'
            >
              <div className='index-section01--openBtnContainer'>
                <button 
                  className='index-section01--openBtn'
                  onClick={(e)=> {
                    setShowControl(true)
                  }}
                  ></button>
              </div>
              <div className='index-section01--openBtnSide'></div>
              <div className='index-section01--openBtnSide'></div>
              <div className='index-section01--openBtnSide'></div>
              <div className='index-section01--openBtnSide'></div>
            </div>
            <div className='index-section01--creator'>create by huck</div>      
          </div>
          <div className='index-section01--howToUse'>
            <div className='index-section01-scrollIcon'></div>
          </div>
        </div>

        <div className={`index-section01--videoControlsWrapper
           ${showControl === true
            ? ''
            : 'hide'
          }`}
          onMouseMove ={(e) => {
            moveCloseBtn(e.clientX,e.clientY)
          }}
          >
          <div 
            className='index-section01--detailControls'
            onMouseEnter={() => {setOnControler(true)}}
            onMouseLeave={() => {setOnControler(false)}}
            onMouseMove={(e) => {controllMove(e.clientX)}}
            onMouseUp={() => {
              clicked = false
              progressControlRef.current.style.transition = '.1s'
              rangePassedRef.current.style.transition = '.1s'

              if(play === true){
                videoRef.current.play()
              }

            }}
          >
            <div className='index-section01--controls--videoRangeWrapper'>
              <div className='index-section01--controls--rangeLow'>
                <div 
                  className='index-section01--controls--range'
                  ref={rangeRef}
                ></div>
                <div 
                  className='index-section01--controls--rangePass'
                  ref={rangePassedRef}
                ></div>
                <div 
                  className='index-section01--controls--rangeControl'
                  ref={progressControlRef}
                  onMouseDown={() => {
                    videoRef.current.pause()
                    clicked = true
                    progressControlRef.current.style.transition = '0s'
                    rangePassedRef.current.style.transition = '0s'
                  }}

                ></div>
              </div>
            </div>
            <div 
              className='index-section01--controls--BtnWrapper'
            >
              <div 
                className={`index-section01--controls--Btn ${
                  play === true
                  ? 'play'
                  : 'pause'
                }`}
                onClick={() => { setPlay(!play)}}
              >
                <span></span>
                <span></span>
              </div>
              <div className='index-section01--controls--Btn--mute'>
                <div className={`index-section01--controls--Btn--effect
                  ${
                    audioMute === true
                    ? 'mute'
                    : ''
                  }`}>
                </div>
                <button
                  onClick={() => {setAudioMute(!audioMute)}}
                >
                  <span>mute</span>
                </button>
              </div>
            </div>
          </div>
          <div className={`index-section01--controls--closeBtn
            ${
              onControler === true
              ? 'hide'
              : ''
            }`
            }
            ref = {closeBtnRef}>
              <button
              onClick={() => {setShowControl(false)}}
              ><span>x</span>
              </button>
          </div>
        </div>
      </div>
    </section>
  )
}


function SectionSecond (){
  const [textShowed, setTextShowed] = useState([false,false,false])
  const [contents, setContents] = useState(null)
  const [images, setImages] = useState(null)
  const [direction, setDirection] = useState('top')
  const [selected, setSelected] = useState(0)
  const [duration, setDuration] = useState(.5)
  const [inOut, setInout] = useState('inOut')
  const [power, setPower] = useState('power4')
  const titleH2Ref = useRef(null)
  const titleSpanWrapRef = useRef(null)
  const textRef = useRef([])
  const LargeBoxRef = useRef(null)
  

  useEffect(()=>{
    
    const content = async () => {
      Promise.all([
        axios.get('https://raw.githubusercontent.com/gangsuuu/trick/main/src/assets/json/index.json')
        ,axios.get('https://raw.githubusercontent.com/gangsuuu/trick/main/src/assets/json/index02.json')
      ]).then((r) => {
        if(r[0] == null || r[1] == null){
          return;
        }
        setContents(r[0].data)
        setImages(r[1].data)
      })
    }
    content()
    getTitleSpan(titleH2Ref.current, titleSpanWrapRef.current)
  },[])

  useEffect(() =>{
    if(images == null) return

    const large = document.createElement('div')
    large.classList.add('index-section02--imageLarge')
    const newImage = document.createElement('img')
    newImage.src = images[selected].url

    large.appendChild(newImage)
    LargeBoxRef.current.appendChild(large)
    switch(direction){
        case 'top':
          large.style.transform = `translateY(${large.offsetHeight}px)`
          break;
        case 'right':
          large.style.transform = `translateX(${large.offsetWidth * -1}px)`
          break;
        case 'left':
          large.style.transform = `translateX(${large.offsetWidth}px)`
          break;
        case 'bottom':
          large.style.transform = `translateY(${large.offsetHeight * -1}px)`
          break;
      }
      
      var ease = power+inOut
      gsap.to(large, {
        x: 0,
        y: 0,
        duration : duration,
        ease: ease,
        onComplete : () => {
          LargeBoxRef.current.firstChild.remove()
        }
      })
  },[selected,direction])



  const getTitleSpan = (h2, wrap) => {
    // const texts = h2.innerHTML.split('')
    h2.innerHTML.split('').map((t) => {
      const span = document.createElement('span')
      span.innerHTML = t
      if(t === ' '){
        span.classList.add('space')
      }
      wrap.appendChild(span)
    })

    ScrollTrigger.create({
      trigger:wrap,
      start:'start center',
      end:'bottom center',
      onEnter: () => {
        gsap.to(wrap.children,{
          y:0,
          duration: .4,
          stagger: 0.05,
          ease: 'power4.inOut' 
        })
      }
    })
  }

  const showText = (target,i) => {
    const ary = [...textShowed]
    ary[i] = !ary[i]

    ary[i] === true
    ? target.style.height = (textRef.current[i].offsetHeight + 10) + 'px'
    : target.style.height = '0px'

    setTextShowed(ary)
  }

  const changeDuration = (e) => {
    var gradient_value = 100 / e.attributes.max.value;

    e.style.background = 'linear-gradient(to right, #FFE283 0%, #FFE283 '+gradient_value * e.value +'%, rgb(236, 236, 236) ' +gradient_value *  e.value + '%, rgb(236, 236, 236) 100%)';
    setDuration(e.value);
  }
  return(
    <section className="index-section-02">
      <div className="index-section02--wrapper">
        <div className='index-section02--title'>
          <h2 ref={titleH2Ref}>what i made in</h2>
          <div className='index-section02--titleSpans' ref={titleSpanWrapRef}>

          </div>
        </div>
        <div className='index-section02--textWrappers'>
          {
              contents ===  null
              ? ''
              :contents.map((c,i) =>{
                return (
                  <div className={`index-section02--textWrapper
                    ${textShowed[i] === true ? 'open' : ''}
                    `}
                    onClick={(e) => 
                      showText(e.currentTarget.children[1],i)
                    }
                    key={i}
                  >
                    <p className={`index-section02--subTitle ${
                      textShowed[i] === true ? 'show' : ''
                    }`}>{c.subtitle}</p>
                    <div className='index-section02--subWrapper'>
                      <p className='index-section02--content'
                      ref={(e) =>{textRef.current[i] = e}}
                      >{c.content}</p>
                    </div>
                    <div className='index-section02--showIconWrapper'>
                      <div className={`index-section02--showText
                        ${textShowed[i] === true ? 'open' : ''}
                      `}>
                        <p>{textShowed[i] === true ? '닫기' : '보기'}</p>
                      </div>
                      <div className='index-section02--icon'>
                      {textShowed[i] === true ? 
                      (<>
                        <p className='index-section02--arrowIcon arrowOne'>⬈</p>
                        <p className='index-section02--arrowIcon arrowTwo'>⬈</p>
                      </>) 
                      : (<>
                        <p className='index-section02--arrowIcon arrowOne'>⬊</p>
                        <p className='index-section02--arrowIcon arrowTwo'>⬊</p>
                      </>) 
                      }
                      </div>
                    </div>
                  </div>
                )
              })
          }
        </div>
        <div className='index-section02--imagesWrapper'>
          <div className='index-section02--imageLargeBoxWrapper'>
            <div className='index-section02--imageLargeBox'
                 ref={LargeBoxRef}
            >
              <div className='index-section02--imageLarge'>
                {
                   <img src={
                    images == null
                    ?''
                    : images[selected].url
                   } />
                }
              </div>
            </div>
            <div className='index-section02--animationControll'>
              <div className='index-section02--directions'>
                <div className={`index-section02--top ${direction === 'top'? 'selected' : ''}`}
                  onClick={() => setDirection('top')}
                > </div>
                <div className={`index-section02--left ${direction === 'left'? 'selected' : ''}`}
                  onClick={() => setDirection('left')}
                > </div>
                <div className={`index-section02--right ${direction === 'right'? 'selected' : ''}`}
                  onClick={() => setDirection('right')}
                > </div>
                <div className={`index-section02--bottom ${direction === 'bottom'? 'selected' : ''}`}
                  onClick={() => setDirection('bottom')}
                > </div>
              </div>
              <div className='index-section02--stateControl'>
                <div className='index-section02--duration'>
                  <div>Duration</div>
                  <div className='index-section02-durationBox'>
                    <input type='range'
                      max="1" min="0" step="0.01"
                      onChange={(e) => {
                        changeDuration(e.target)
                      }}
                    /> <span>{duration}</span>
                  </div>
                </div>
                <div className='index-section02--ease'>
                  <div>Ease</div>
                  <div className='index-section02--easeOption'>
                    <select onChange={(e) => { setPower(e.target.value)}}>
                      <option value='power1'>1</option>
                      <option value='power2'>2</option>
                      <option value='power3'>3</option>
                      <option value='power4'>4</option>
                    </select>
                    <select onChange={(e) => {setInout(e.target.value)}}>
                      <option value='.in'>In</option>
                      <option value='.out'>Out</option>
                      <option value='.inOut'>InOut</option>
                    </select>
                    </div>
                </div>
              </div>
            </div>
          </div>
          <div className='index-section02--imageSlides'>
              {
                images == null
                ? ""
                : images.map((c,i) => {
                  return(
                    <>
                  <div className={`index-section02--imageSlide
                      ${
                        i === selected
                        ? 'selected'
                        : ''
                      }`
                    }
                    onClick={() => {setSelected(i)}}
                    key={i}
                  >
                    <img src={c.url}></img>
                    <div className='index-section02--imageCover'>
                    </div>
                  </div>
                  </>
                )})
              }
          </div>
        </div>
      </div>
    </section>
  )
}

function SectionThird (){
  const grayRef = useRef(null)
  const blackRef = useRef(null)


  useEffect(() => {
    const words = blackRef.current.firstChild.innerHTML.split(' ')
    let pG = document.createElement('p')
    let pB = document.createElement('p')
    
    blackRef.current.firstChild.innerHTML = ''
    
    // blackRef.current.appendChild(divB)
    // grayRef.current.appendChild(divG)
    grayRef.current.appendChild(pG)
    blackRef.current.appendChild(pB)
    
    
    words.map((w,i) => {
      const spanG = document.createElement('span')
      const spanB = document.createElement('span')
      let prevWord, prevBottom, prevTop, lastChildB, lastChildG
      spanG.innerHTML = w + '&nbsp'
      spanB.innerHTML = w + '&nbsp'
      if(pG.children.length !== 0){
        lastChildG = pG.lastChild 
        lastChildB = pB.lastChild 
        prevWord = lastChildG.innerHTML.split('&')
        prevWord = lastChildB.innerHTML.split('&')
        prevBottom = Math.floor(lastChildG.getBoundingClientRect().bottom)
        prevTop = Math.floor(lastChildG.getBoundingClientRect().top)
      }
      pG.appendChild(spanG)
      pB.appendChild(spanB)
      const top = Math.floor(spanG.getBoundingClientRect().top)
      const bottom = Math.floor(spanG.getBoundingClientRect().bottom)
      

      // 가장 첫번 째 아이템
      if(pG.children.length === 1 && pB.children.length === 1){ 
        return
      }

      // 이전 생성된 아이템과 탑과 바텀이 서로 일치하는지 비교한다

      

      if(top === prevTop && bottom === prevBottom) return
      
      lastChildG.innerHTML = prevWord[0] + `\n`
      lastChildB.innerHTML = prevWord[0] + `\n`


      pG.lastChild.remove()
      pB.lastChild.remove()


      pG = document.createElement('p')
      pB = document.createElement('p')
      grayRef.current.appendChild(pG)
      blackRef.current.appendChild(pB)

      pG.appendChild(spanG)
      pB.appendChild(spanB)
    })
    



    let blackText = blackRef.current.children
    let count = blackText.length

    ScrollTrigger.create({
      trigger: blackRef.current,
      start:'top 70%',
      end:'top 25%',
      onUpdate: (e) => {
        const progress = Math.floor((e.progress)*100)
        const currentNum =   Math.floor(progress / (100 / count));
        let currentTarget =  blackText[currentNum];
        if(currentTarget != null){
          for(let i = 0; i <= currentNum; i++){
            blackText[i].style.clipPath = 'polygon(0 0, 0 100%, 100% 100%, 100% 0%)';
          }
        }

      }
    })

  },[])


  return(
    <section className="index-section-03">
      <div className='index-section03--wrapper'>
        <div className='index-section03--reasonFirst'>
          <div className='index-section03--whatIsAnimation'>
            <div className='index-section03--whatIsAnimation-gray'
            ref={grayRef}>
            </div>
            <div className='index-section03--whatIsAnimation-black'
              ref={blackRef}>
              <div className='textRef'>웹페이지는 사용자가 브랜드에 접근할 수 있게 해주는 매개체로서 역할만 수행한다고 생각하지 않습니다.
                브랜드결과 일치하며, 목적에 맞는 UI디자인으로 만들어진 웹페이지는 단순한 홈페이지가 아닌 브랜드의 가치를 대변하는 수단입니다.
                애니메이션 요소는 웹에 에너지를 불어넣고, 사용자가 홈페이지와 상호작용하고 있음을 알려줍니다.
                잘 만들어진 애니메이션은 사용자의 이목을 집중시킬 수 있으며 브랜드 경험을 만들어 줄 것 입니다.
              </div>
            </div>



          </div>
          <div className='index-section03--experienceAni'>
          </div>      
          <div className='index-section03--titleWrapper'>
            <div className='index-section03--titles'>
              <div><p>What Is Animation</p></div>
              <div><p>Animation</p></div>
              <div><p>Why Do I Made</p></div>
            </div>
          </div>
        </div>
        <div className='index-section03--reasonSecond'>

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