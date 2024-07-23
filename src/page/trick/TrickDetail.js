export default function TrickDetail (){
  return(
    <div className="trickDetail">
      <div className="trickDetail--wrapper">
        <div className="trickDetail-content--left">
          <div className="trickDetail-content--title">
           <h2>제목입니다</h2>
          </div>
          <div className="trickDetail-content--skills">
            <span>GSAP</span>
            <sapn>GSAPScroll</sapn>
            <sapn>Polygon</sapn>
          </div>
          <div className="trickDetail-content--date">
            <div>
              <p>2024_00_00</p>
            </div>
          </div>
          <div className="trickDetail-content--goal">
            <div>
              제작목표
              <span>00기술 구현</span>
            </div>
          </div>
          <div className="trickDetail-content--explanation">
            <div>
              <p>트릭방식</p>
              <p>gsap의 tl을 이용하여 이러쿵 저러쿵해서 저렇게 구현한다</p>
            </div>
          </div>
        </div>
        <div className="trickDetail-content--right">
          <div className="trickDetail-content--videoWrapper">
            <div className="trickDetail-content-video"></div>
          </div>
          <div className="trickDetail-content--videoController-wrapper">
            <div className="trickDetail-content--videoController">
              <div className="trickDetail-content-video--play"></div>
              <div className="trickDetail-content-video--Pause"></div>
              <div className="trickDetail-content-video--prev5S"></div>
              <div className="trickDetail-content-video--next5S"></div>
            </div>
            <div className="trickDetail-content-video--imageWrapper">
              <div className="trickDetail-content-video--content">
              </div>
            </div>
          </div>
       </div>
      </div>
    </div>
  )
}