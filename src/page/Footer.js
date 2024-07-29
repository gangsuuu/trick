
import { useRef,useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

export default function Footer(){
  gsap.registerPlugin(ScrollTrigger)
  let footerRef = useRef(null)
  let infomationRef = useRef(null)
  let imageRef = useRef(null)
  let WrapperRef = useRef(null)
  

  useEffect(() => {
    ScrollTrigger.create({
      trigger:footerRef.current,
      start: 'top 90%',
      scrub: true,
      onEnter: () => {
        gsap.to(infomationRef.current,{
            top: 0,
            duration: .66,
            ease: 'power4.inOut'
          })
        },
      onLeave: () => {
      },
      onEnterBack: () => {
        
      },
      onLeaveBack : () => {
        gsap.to(infomationRef.current,{
          top: 300,
          duration: .66,
          ease: 'power4.inOut'
        })
      }
    })

    ScrollTrigger.create({
      trigger:WrapperRef.current,
      start: 'bottom bottom',
      scrub: true,
      onEnter: () => {
        gsap.to(imageRef.current,{
          clipPath: 'polygon(0 0, 0 100%, 100% 100%, 100% 0)',
          duration: 1,
          ease: "power4.inOut",
        })
      },
      onLeave: () => {
      },
      onEnterBack: () => {
      },
      onLeaveBack: () => {
        gsap.to(imageRef.current,{
          clipPath: 'polygon(0 0, 0 0%, 100% 0%, 100% 0)',
          duration: .36,
          ease: 'power4.inOut'
        })
      }
    })



  },[])

  return(
    <footer
    ref={footerRef}
    >
      <div className="footer-imagesContent" ref={imageRef}></div>
      <div className="footer-infomation--Wrapper" ref={WrapperRef}>
        <div className="footer-infomation" ref={infomationRef}>
          <div className="footer-left">
            <div className="footer-title">
            <p>ContactWithMe</p>
            </div>
            <div className="footer-navToFrist">
              <a>처음으로</a>
            </div>
          </div>
          <div className="footer-right">
            <div className='footer-info--first'>
              <div className="footer-info--phone">
                <p>Number</p>
                <div className="footer-info--number">
                  <p>82+ 10-5400-6870</p>
                </div>
              </div>
              <div className="footer-info--addressWra">
                <div className="footer-info--address">
                  <p>
                    대한민국 수원시 탑동로 11번길
                  </p>
                  <p>
                    58-5 탑캐슬아파트 602호
                  </p>
                </div>
              </div>
            </div>
            <div className="footer-info--seconde">
              <div className="footer-info-secondeUp">
                <div className="footer-info--emailWrp">
                  <p>email</p>
                  <p className="footer-info-email">gangsuuu02@gmail.com</p>
                </div>
                <div className="footer-info--SNS">
                  <p>INSTAGRAM</p>
                  <p>TSTORY</p>
                </div>
              </div>
              <div className="footer-info-secondeDown">
                <p>Web Publisher Huck</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </footer>
  )
}