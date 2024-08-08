import gsap from "gsap"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
export default function Header(){
  const [menuOpened,setMenuOpened] = useState(false)
  
  
  const navigate = useNavigate()
  let state = useSelector((state) => {return state})
  let [tl,setTl] = useState()

    useEffect(()=>{
      if(state.pageSize === '') return 
      const target = document.querySelector('.headerNavWrapper')
      const create = document.querySelector('.headerCreate')
      let timeline = gsap.timeline({ paused: true })

      timeline.to(target, {
        clipPath: 'polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%)',
        duration: 0.5,
        ease: 'power4.inOut'
      },"<")
      timeline.to(target.children,{
        opacity:1,
        top:0,
        left:0,
        duration:.3,
        stagger:0.1
      },'<.5')
      if(create) {
        timeline.to(create,{
          opacity:1,
          duration:.3,
          ease:'power4.inOut'
        },'<=')
      }
      setTl(timeline)

      return () => {
      }
    },[state])

  function menuHover() {
    const target = document.querySelector('.headerNavWrapper')
    if(menuOpened){
      tl.play()
    } else {
        tl.reverse()
    }
    setMenuOpened(!menuOpened)
  }


  




  function movePage(page){
    let clipPath = ['polygon(0% 0%, 0% 100%,0% 100%, 0% 0%)','polygon(100% 0%, 100% 100%, 100% 100%, 100% 0%)']
  

    const body = document.querySelector('body')
    const moveWrapper = document.createElement('div')
    const leftDiv = document.createElement('div')
    const rightDiv = document.createElement('div')
    moveWrapper.classList.add('moveOther')
    moveWrapper.classList.add('movePage')
    leftDiv.classList.add('left')
    rightDiv.classList.add('right')
    
    const leftInner = document.createElement('div')
    const rightInner = document.createElement('div')
    leftInner.classList.add('left-Inner')
    rightInner.classList.add('right-Inner')
    
    
    const rightText = document.createElement('p')
    const leftText = document.createElement('p')
    leftText.innerHTML = page === '' ? 'index' : page
    rightText.innerHTML = page === '' ? 'index' : page
    leftText.classList.add('left-text')
    rightText.classList.add('right-text')
  


    leftInner.appendChild(leftText)
    rightInner.appendChild(rightText)
    leftDiv.appendChild(leftInner)
    rightDiv.appendChild(rightInner)
    moveWrapper.appendChild(leftDiv)
    moveWrapper.appendChild(rightDiv)
    body.appendChild(moveWrapper)


    if(state.pageSize === 'mobile'){
      menuHover()
    }

    gsap.to(moveWrapper.children,{
      clipPath: 'polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%)',
      duration:.5,
      ease: 'power4.inOut',
      onComplete: () => {
        navigate(page)
        gsap.to(moveWrapper.children, {
          clipPath: (i) => clipPath[i],
          duration:.5,
          delay:.5,
          ease: 'power4.inOut',
          onComplete: () => {
            moveWrapper.remove()
          }
        })
      }
    })

  }


  return(
    <header>
      <div className="headerWrapper">
      {
        state.pageSize === 'mobile'
        ? <div className="headerMenu">
            <div 
              aria-label="open link menu bar"
              role='button'
              onClick={() => { menuHover()}}><button>menu</button></div>
          </div>
        :  <div className="headerLogoWrapper">
            <div className="headerLogo"></div>
          </div>
      }

        <nav className="headerNavWrapper">
          <div className="headerNav">
            <a
              href="#"
              aria-label="link to index page"
              onClick={() =>movePage('')}
            ><span>●</span>Index</a>
          </div>
          <div className="headerNav">
            <a
              href="#"
              aria-label="link to index tricks"
              onClick={() =>movePage('tricks')}
            ><span>●</span>Tricks</a>
          </div>
          <div className="headerNav">
            <a
              href="#"
               aria-label="link to index about"
              onClick={() =>movePage('about')}
            ><span>●</span>About</a>
          </div>
        </nav>
        {
        state.pageSize === 'mobile'
        ? <div className="headerCreate">
            <div
              aria-label="this page creates by hyuck"

            ><p>Create by Hyuck</p></div>
          </div>
        : ''
        }
      </div>
    </header>
  )
}