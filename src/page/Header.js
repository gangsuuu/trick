import gsap from "gsap"
import { useNavigate } from "react-router-dom"
export default function Header(){
  const navigate = useNavigate()

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
    leftText.innerHTML = page
    rightText.innerHTML = page
    leftText.classList.add('left-text')
    rightText.classList.add('right-text')
  


    leftInner.appendChild(leftText)
    rightInner.appendChild(rightText)
    leftDiv.appendChild(leftInner)
    rightDiv.appendChild(rightInner)
    moveWrapper.appendChild(leftDiv)
    moveWrapper.appendChild(rightDiv)
    body.appendChild(moveWrapper)


    gsap.to(moveWrapper.children,{
      clipPath: 'polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%)',
      duration:.5,
      ease: 'power4.inOut',
      onComplete: () => {
        navigate(page)
        gsap.to(moveWrapper.children, {
          clipPath: (i) => clipPath[i],
          duration:.5,
          delay:.2,
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
        <div className="headerLogoWrapper">
          <div className="headerLogo">
            
          </div>
        </div>
        <div className="headerNavWrapper">
          <div className="headerNav">
            <a
              onClick={() =>movePage('index')}
            ><span>●</span>Index</a>
          </div>
          <div className="headerNav">
            <a
              onClick={() =>movePage('tricks')}
            ><span>●</span>Tricks</a>
          </div>
          <div className="headerNav">
            <a
              onClick={() =>movePage('about')}
            ><span>●</span>About</a>
          </div>
        </div>
      </div>
    </header>
  )
}