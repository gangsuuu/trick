export default function TricksComponent(){
  return(
    <div className="trickWrapper">
      <div className="trick">
        <div className='trick-video--Wrapper'>
          <div className="trick-video--video">
          </div>
        </div>
        <div className="trick-content--Wrapper">
          <div className="trick-content--title">
            <h2>제목입니다</h2>
          </div>
          <div className="trick-content--infos">
            <div className="trick-content--left">
            <div className="trick-content--skills">
                <span>GSAP,</span>
                <span>KEYFRAME</span>
              </div>
            </div>
            <div className="trick-content--right">
              <div className="trick-content--OpenDetailBtn">
                <button>Detail</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}