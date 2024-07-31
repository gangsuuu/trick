import axios from "axios";
import TrickComponent from "../../components/TrickComponent";
import { useEffect, useState } from "react";



export default function Tricks (first){
  let [contents,setContents] = useState([])
  let [pages,setPages] = useState(18)
  let [row,setRow] = useState(4)
  let [limite,setLimite] = useState(false)

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
      <div className="tricksWrapper">
            {
              contents.length === 0 
              ? 
                Array.from({length:row},(_,i) =>{
                  return(
                    i === 0
                    ?  <div className="tricks-list--row">
                        <Entrance length={'Loading...'}></Entrance>
                        <TrickComponent type={'skeleton'} contents={[]}></TrickComponent>
                        <TrickComponent type={'skeleton'} contents={[]}></TrickComponent>
                        <TrickComponent type={'skeleton'} contents={[]}></TrickComponent>
                      </div>
                    : <div className="tricks-list--row">
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
                      i === 0
                      ?  <div className="tricks-list--row">
                          <Entrance length={contents.length}></Entrance>
                          <TrickComponent type={'content'} contents={contents} index={0}></TrickComponent>
                          <TrickComponent type={'content'} contents={contents} index={1}></TrickComponent>
                          <TrickComponent type={'content'} contents={contents} index={2}></TrickComponent>
                        </div>
                      : <div className={`tricks-list--row ${i < 4 ?'':'close'}`}>
                          <TrickComponent type={'content'} contents={contents} index={(i * 5) - 2}></TrickComponent>
                          <TrickComponent type={'content'} contents={contents} index={(i * 5) - 1}></TrickComponent>
                          <TrickComponent type={'content'} contents={contents} index={(i * 5) }></TrickComponent>
                          <TrickComponent type={'content'} contents={contents} index={(i * 5) + 1}></TrickComponent>
                          <TrickComponent type={'content'} contents={contents} index={(i * 5) + 2}></TrickComponent>
                        </div>
                  )})
            }
      </div>

      <div className="trick-showMore">
        <div className="trick-showMore-BtnBox">
          {
            limite === false
            ?<button
              onClick={() => {
                addRow()
              }}
              >
                <span>더보기</span>
              </button>
            : <p className="trick-showMore--end">공부는 계속됩니다.</p>
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
        <h1>Tricks</h1>
      </div>
      <div className="tricks-list--whatIs">
        <div className="tricks-list--intro">
          <p>
            연습으로 만들어본 css,js 트릭들을 확인해보세요
          </p>
        </div>
        <div className="tricks-list--count">
          ({
            length === 0 ? 'counting...' : length
          })
        </div>
      </div>
    </div>
  )
}