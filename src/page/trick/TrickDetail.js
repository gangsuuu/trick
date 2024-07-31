import axios from "axios"
import { useEffect, useState } from "react"
import { useLocation, useParams } from "react-router-dom"



export default function TrickDetail (){
  let [asd,setProps] = useState([]) 
  let [colors,setColors] = useState(['#FFBE98','#FFA750','#E781A6','#CE3375','#62C8B3','#299C9F','#6EA2D4','#1D5091'])
  let [color,setColor] = useState()
  let { number } = useParams()

  useEffect(()=> {

    axios.get('https://raw.githubusercontent.com/gangsuuu/trickJson/main/Items.json')
    .then(r => {
      setProps(r.data)
      setColor(colors[Math.floor(Math.random() * (colors.length - 0 + 1) + 0)])
    })
    .catch((e) => {

    })
  },[])




  return(
    <div className="trickDetail"
    style={{'backgroundColor': color}}
    >
      <div className="trickDetail--wrapper"
      >
        <div className="trickDetail-content--left">
          <div className="trickDetail-content--title">
           <h2>
            {
              asd.length === 0
              ? '데이터 찾는 중' 
              : asd[number].title || '데이터 못찾음'
            }
           </h2>
          </div>
          <div className="trickDetail-content--skills">
          {
              asd.length === 0
              ? <span>데이터 찾는 중</span>
              : (asd[number].skills.map((t) => {
                return (
                  <span>{t}</span>
                )
              }))
            }
          </div>
          <div className="trickDetail-content--date">
            <div>
              <p>
                {
                asd.length === 0
                  ? '데이터 찾는 중' 
                  : asd[number].date
                }
              </p>
            </div>
          </div>
          <div className="trickDetail-content--goal">
            <div>
              제작목표
              <span> {
                asd.length === 0
                  ? '데이터 찾는 중' 
                  : asd[number].goal
                }</span>
            </div>
          </div>
          <div className="trickDetail-content--explanation">
            <div>
              <p>트릭방식</p>
              <p> {
                asd.length === 0
                  ? '데이터 찾는 중' 
                  : asd[number].explanation
                }</p>
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