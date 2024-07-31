import axios from "axios"
import gsap from "gsap"
import { useEffect, useState } from "react"
import { useLocation, useNavigate, useParams } from "react-router-dom"



export default function TrickDetail (){
  let [data,setData] = useState([]) 
  let [colors,setColors] = useState(['#FFBE98','#FFA750','#E781A6','#CE3375','#62C8B3','#299C9F','#6EA2D4','#1D5091'])
  let [color,setColor] = useState()
  let [played, setPlayed] = useState(false)
  let [entered, setEntered] = useState(false)
  let [current,setCurrent] = useState(null)

  let location = useLocation()
  let navigate = useNavigate()
  let { number } = useParams()
  let animated = false;
  
  useEffect(()=> {

    axios.get('https://raw.githubusercontent.com/gangsuuu/trickJson/main/Items.json')
    .then(r => {
      setData(r.data)
      setColor(colors[Math.floor(Math.random() * (colors.length - 0 + 1) + 0)])
    })
    .catch((e) => {
    })

    
  },[])
  useEffect(() => {
    return() => {
      window.removeEventListener('wheel',wheelEvent)
    }
  },[current])


  useEffect(() => {
    window.addEventListener('wheel',wheelEvent)
    return () => {
      window.removeEventListener('wheel',wheelEvent)
    }
  },[data])
  


  const wheelEvent = (e) => {
    console.log(location.state.num);
    
    if (animated === true) return
    animated = true
    if (data.length === 0) return
    let dir, nextNum
    
    if(e.deltaY >= 100){
      dir = 1
    } else if (e.deltaY <= 0){
      dir = -1
    }
    
    nextNum =  parseInt(number) + dir;
    if (nextNum === -1) {
      nextNum = data.length - 1
    }else if(nextNum > data.length-1) {
      nextNum = 0
    }
    movePage(nextNum)
  }

  function movePage (nextNum) {
    const body = document.querySelector('body')
    const toDetailWrapper = document.createElement('div')
    const count = 5
  
    toDetailWrapper.classList.add('moveDetail')
    toDetailWrapper.classList.add('movePage')
  
    for(let i = 0; i < count;i++){
      const block  = document.createElement('div')
      block.classList.add('block')
      toDetailWrapper.appendChild(block)
    }
  
    body.appendChild(toDetailWrapper)
    const blocks = toDetailWrapper.querySelectorAll('.block')
    gsap.to(blocks,{
      clipPath: 'polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%)',
      stagger: .03,
      duration: .8,
      ease:'power4.inOut',
      onComplete : () => {
        setTimeout(() => {
          setColor(colors[Math.floor(Math.random() * (colors.length - 0 + 1) + 0)])
        },200)
        navigate(`/tricks/${nextNum}`, {state:{num:nextNum}})
        gsap.to(blocks,{
          clipPath: 'polygon(0% 0%, 0% 100%,0% 100%, 0% 0%)',
          stagger: .03, 
          duration: .8,
          delay:.3,
          ease:'power4.inOut',
          onComplete:() => {
            animated = false
            toDetailWrapper.remove()
          }
        })
      }
    })
  } 

  function playOrPause (){
    const videos = document.querySelectorAll('video')
    played === true
    ? videos.forEach(v => v.pause())
    :  videos.forEach(v => v.play())
    setPlayed(!played)
  }

  function moveMouse (x,y){
    const mouse = document.querySelector('.trickDetail-content--videoStateWrap')
    gsap.to(mouse,{
      x:x,
      y:y,
      duration:.2,
    })
  }



  return(
    <div className="trickDetail"
    style={{'backgroundColor': color}}
    >
      <div className="trickDetail--wrapper"
      >
        <div className="trickDetail-content--left">
          <div className="trickDetail-content--title">
           <h2>
            {
              data.length === 0
              ? '데이터 찾는 중' 
              : data[number].title || '데이터 못찾음'
            }
           </h2>
          </div>
          <div className="trickDetail-content--skills">
          {
              data.length === 0
              ? <span>데이터 찾는 중</span>
              : (data[number].skills.map((t) => {
                return (
                  <span>{t}</span>
                )
              }))
            }
          </div>
          <div className="trickDetail-content--date">
            <div>
              <span>제작날짜</span>
              <span>
                {
                data.length === 0
                  ? '데이터 찾는 중' 
                  : data[number].date
                }
              </span>
            </div>
          </div>
          <div className="trickDetail-content--goal">
            <div>
              <span>제작목표 : </span>
              <span> {
                data.length === 0
                  ? '데이터 찾는 중' 
                  : data[number].goal
                }</span>
            </div>
          </div>
          <div className="trickDetail-content--explanation">
            <div>
              <p>트릭방식</p>
              <p> {
                data.length === 0
                  ? '데이터 찾는 중' 
                  : data[number].explanation
                }</p>
            </div>
          </div>
        </div>
        <div className="trickDetail-content--right"
          onMouseEnter={()=>{setEntered(true)}}
          onMouseLeave={()=>{setEntered(false)}}
          onMouseMove={(e)=>{moveMouse(e.clientX,e.clientY)}}
        >
          <div className="trickDetail-content--videoWrapper">
            <div className="trickDetail-content-videoBackground">
              <video id={`video${data.length===0?' noChannel':number <data.length?'':' noChannel'}`} muted loop preload=""
              src={
                data.length === 0
                ? ''
                : (data[number] && data[number].src) || ''
              }
            >
            </video>
            </div>
            
            <div className="trickDetail-content-video"
              onClick={() => {
                playOrPause()
              }}
            >
            <video id={`video${data.length===0?' noChannel':number <data.length?'':' noChannel'}`} muted loop preload=""
              src={
                data.length === 0
                ? ''
                : (data[number] && data[number].src) || ''
              }
            >
            </video>
            </div>
          </div>
          <div className={`trickDetail-content--videoStateWrap ${entered===true?'show':'hide'}`}>
              <div className="trickDetail-content--videoState">
                <span>{played===true?'play':'pause'}</span>
              </div>
          </div>
          
       </div>
      </div>
    </div>
  )
}