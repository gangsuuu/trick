export default function TrickComponent(props){
  if(props.contents.length != 0){
  } 
  return(
    <div className="trickWrapper">
      <div className="trick"
        onMouseLeave={(e) => {
          let video = e.target.id === 'video'
          ? e.target
          : e.target.closest('.trick').querySelector('video#video')
          if(video == null) return;

          if(video.id !== 'video noChannel' || video != null){
              video.pause()
           }
        }}
        onMouseEnter={(e) => {
          let video = e.target.id === 'video'
          ? e.target
          : e.target.querySelector('video#video')
          if(video == null) return;
          if(video.id !== 'video noChannel' || video != null){
              video.play()
           }
        }}
      >
        <div className='trick-video--Wrapper'>
          <div className="trick-video--video">
            <video id={`video${props.contents.length===0?' noChannel': props.index < props.contents.length?'':' noChannel'}`} muted loop preload=""
              src={
                props.contents.length === 0
                ? ''
                : props.index < props.contents.length
                 ? (props.contents[props.index] && props.contents[props.index].src) || ''
                 : ''
              }
            >
            </video>
          </div>
          <div className="trick-video--controllWrapper">
            <div className="trick-video--play"></div>
            <div className="trick-video--pause"></div>
            <div className="trick-video--full"></div>
          </div>
        </div>
        <div className="trick-content--Wrapper">
          <div className="trick-content--title">
            <h2>
              {
                props.contents.length === 0
                ? '로딩중....'
                : props.index < props.contents.length
                  ? (props.contents[props.index] && props.contents[props.index].title) || '제목이 없습니다.'
                  : 'Coming Soon'
              }
            </h2>
          </div>
          <div className="trick-content--infos">
            <div className="trick-content--left">
            <div className="trick-content--skills">
              {
                props.contents.length === 0
                ? <span>로딩중....</span>
                : props.index < props.contents.length
                  ? (Array.isArray(props.contents[props.index].skills) 
                      ? props.contents[props.index].skills.map((s, index) => {
                          return (
                            <span key={index}>{s} </span>
                          );
                        })
                      : <span>스킬 데이터가 유효하지 않습니다.</span>
                    )
                  : <span></span>
              }
              <span>{
                  props.contents.length === 0
                  ? '로딩중....'
                  : props.index < props.contents.length
                    ? (props.contents[props.index] && props.contents[props.index].type) || '타입이 없습니다.'
                    :<span>계속 공부할 예정입니다.</span>
              }</span>
              </div>
            </div>
            <div className="trick-content--right">
              {
                props.index < props.contents.length
                ? <div className="trick-content--OpenDetailBtn">
                    <button>Detail</button>
                  </div>
                :''
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}