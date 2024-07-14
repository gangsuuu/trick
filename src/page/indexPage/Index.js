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
          <div className='index-section01--openBtn'></div>
          <div className='index-section01--creater'>create by huck</div>
          <div className='index-section01--detailControls'></div>
        </div>
        <div className='index-section01--howToUse'></div>
      </div>
    </section>
  )
}

function SectionSecond (){
  return(
    <section className="index-section-02">
      <div>
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