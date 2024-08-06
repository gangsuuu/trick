
import { useRef,useEffect, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useSelector } from 'react-redux'

export default function Footer(){
  gsap.registerPlugin(ScrollTrigger)
  let footerRef = useRef(null)
  let infomationRef = useRef(null)
  let imageRef = useRef(null)
  let WrapperRef = useRef(null)

  const state = useSelector((state) => {return state})

  useEffect(() => {
    if(state.pageSize ==='') return
    animate()
    return () => {
    }
  },[state])

  



  function animate (){
    let top
    if(state.pageSize === 'mobile' || state.pageSize === 'tablet'){
      top = '20'
    } else {
      top = '300'
    }

    ScrollTrigger.create({
      trigger:WrapperRef.current,
      start: '95% bottom',
      scrub: true,
      // markers: true,
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
          top: top,
          duration: .66,
          ease: 'power4.inOut'
        })
      }
    })

    ScrollTrigger.create({
      trigger:WrapperRef.current,
      start: '95% bottom',
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

  }

  return(
    <footer>
      <div className="footer-imagesContent" ref={imageRef}>
        <img src='https://image-cdn.hypb.st/https%3A%2F%2Fkr.hypebeast.com%2Ffiles%2F2022%2F11%2Fhypebeast-editor-job-opening-2022-1.jpg?cbr=1&q=90' />
      </div>
      <div className="footer-infomation--Wrapper" ref={WrapperRef}>
        <div className="footer-infomation" ref={infomationRef}>
          <div className="footer-left">
            <div className="footer-title">
            <p aria-label='infomation how to contact with me'>ContactWithMe</p>
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
                  <p aria-label='phone number'>82+ 10-5400-6870</p>
                </div>
              </div>
              <div className="footer-info--addressWra">
                <div className="footer-info--address">
                  <p aria-label='addres'>
                    대한민국 수원시 탑동로 11번길
                  </p>
                  <p aria-label='left addres'>
                    58-5 탑캐슬아파트 602호
                  </p>
                </div>
              </div>
            </div>
            <div className="footer-info--seconde">
              <div className="footer-info-secondeUp">
                <div className="footer-info--emailWrp">
                  <p>email</p>
                  <p aria-label='email'className="footer-info-email">gangsuuu02@gmail.com</p>
                </div>
                <div className="footer-info--SNS">
                    <a role='link' aria-label='instargram link' href='https://www.instagram.com/'>INSTAGRAM</a>
                    <a role='link' aria-label='tistory page' href='https://huckcent.tistory.com/'>TSTORY</a>
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