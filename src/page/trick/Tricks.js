import axios from "axios";
import TrickComponent from "../../components/TrickComponent";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";



export default function Tricks (first){
  let [contents,setContents] = useState([])
  let [pages,setPages] = useState(18)
  let [row,setRow] = useState(4)
  let [limite,setLimite] = useState(false)

  let state = useSelector((state) => {return state})
  useEffect(() => {
    axios.get('https://raw.githubusercontent.com/gangsuuu/trickJson/main/Items.json')
    .then((r) => {
      let items = [...r.data]
      setContents(items)
    })
    .catch((e) => {
    })
  },[])

  useEffect(() => {
    const closes = document.querySelectorAll('.close')
    if(!closes) return
    closes.forEach(e => {
      setTimeout(() => {
        e.classList.remove('close')
      },100)
    })
  },[row])

  useEffect(()=>{
    if(state.pageSize === 'tablet'){
      setPages(row*2)
    }
  },[state])

  const addRow =() => {
    setRow(row + 1)
    setPages(pages + 5)
    if((row * 5) >= contents.length){
      setPages(contents.length)
      setLimite(true)
      return
    }
  }

  return(
    <div className="tricksList">
      <h1>혁의 트릭 리스트 페이지</h1>
      <div className="tricksWrapper"
        aria-label='trick lists'
        role='main'
      >
            {
              contents.length === 0 
              ? 
                Array.from({length:row},(_,i) =>{
                  return(
                    state.pageSize === 'tablet'
                     ? i === 0
                      ? <div colorlassName="tricks-list--row">
                          <Entrance length={'Loading...'}></Entrance>
                        </div>
                      : <div className="tricks-list--row">
                          <TrickComponent type={'skeleton'} contents={[]}></TrickComponent>
                          <TrickComponent type={'skeleton'} contents={[]}></TrickComponent>
                        </div>
                     : i === 0
                      ? <div 
                          aria-label={`tirck list number${i}row`}
                          role='row'
                          className="tricks-list--row">
                          <Entrance length={'Loading...'}></Entrance>
                          <TrickComponent type={'skeleton'} contents={[]}></TrickComponent>
                          <TrickComponent type={'skeleton'} contents={[]}></TrickComponent>
                          <TrickComponent type={'skeleton'} contents={[]}></TrickComponent>
                        </div>
                      : <div 
                          aria-label={`tirck list number${i}row`}
                          role='row'
                          className="tricks-list--row"
                        >
                        <TrickComponent type={'skeleton'} contents={[]}></TrickComponent>
                        <TrickComponent type={'skeleton'} contents={[]}></TrickComponent>
                        <TrickComponent type={'skeleton'} contents={[]}></TrickComponent>
                        <TrickComponent type={'skeleton'} contents={[]}></TrickComponent>
                        <TrickComponent type={'skeleton'} contents={[]}></TrickComponent>
                      </div>
                )})
              : 
                  Array.from({length:row},(_,i) =>{
                    return(
                      state.pageSize === 'tablet'
                        ? i === 0
                          ? <div className="tricks-list--row">
                              <Entrance length={contents.length}></Entrance>
                            </div>
                          : <div className={`tricks-list--row ${i < 4 ?'':'close'}`}>
                              <TrickComponent type={'content'} contents={contents} index={(i * 2) - 1}></TrickComponent>
                              <TrickComponent type={'content'} contents={contents} index={i*2}></TrickComponent>
                            </div>
                        : i === 0
                          ? <div 
                              aria-label={`tirck list number${i}row`}
                              role='row'
                              className="tricks-list--row">
                              <Entrance length={contents.length}></Entrance>
                              <TrickComponent type={'content'} contents={contents} index={0}></TrickComponent>
                              <TrickComponent type={'content'} contents={contents} index={1}></TrickComponent>
                              <TrickComponent type={'content'} contents={contents} index={2}></TrickComponent>
                            </div>
                          : <div 
                              aria-label={`tirck list number${i}row`}
                              role='row'
                              className={`tricks-list--row ${i < 4 ?'':'close'}`}>
                              <TrickComponent type={'content'} contents={contents} index={(i * 5) - 2}></TrickComponent>
                              <TrickComponent type={'content'} contents={contents} index={(i * 5) - 1}></TrickComponent>
                              <TrickComponent type={'content'} contents={contents} index={(i * 5) }></TrickComponent>
                              <TrickComponent type={'content'} contents={contents} index={(i * 5) + 1}></TrickComponent>
                              <TrickComponent type={'content'} contents={contents} index={(i * 5) + 2}></TrickComponent>
                            </div>
                    )
                  }
                )
            }
      </div>
      <div className="trick-showMore">
        <div className="trick-showMore-BtnBox">
          {
            limite === false
            ?<button
            aria-label='get next row'
              onClick={() => {
                addRow()
              }}
              >
                <span>더보기</span>
              </button>
            : <p 
              aria-label="that's last row"
              className="trick-showMore--end">공부는 계속됩니다.</p>
          }
        </div>
      </div>

    </div>

  )
}

function Entrance ({length}){
  return (
    <div className="tricks-list--entrance">
      <div className="tricks-list--title">
        <h1 aria-label='page titles'>Tricks</h1>
      </div>
      <div className="tricks-list--whatIs">
        <div className="tricks-list--intro">
          <p aria-label='what is this page'>
            연습으로 만들어본 css,js 트릭들을 확인해 보세요
          </p>
        </div>
        <div className="tricks-list--count">
          {
            length === 0 ? ('counting...') : <p aria-label='content count'>({length})</p>
          }
        </div>
      </div>
    </div>
  )
}