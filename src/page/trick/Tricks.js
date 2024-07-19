import TricksComponent from "../../components/TricksList";

export default function Tricks (first){
  return(
    <div className="tricksList">
      <div className="tricksWrapper">
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
                (50)
              </div>
            </div>
          </div>
          {
          Array(10).fill(
              <div className="tricks-list-row">
                { 
                  Array(5).fill(
                  <TricksComponent></TricksComponent>
                  )
                }
              </div>
           
          )
          }
      </div> 
    </div>
  )
}