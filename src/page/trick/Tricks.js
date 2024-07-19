import TricksComponent from "../../components/TricksList";

export default function Tricks (first){
  return(
    <div className="tricksList">
      <div className="tricksWrapper">
        <div className="tricksGrid">
          <div className="tricks-list--entrance">
            <div className="ticks-list--title">
              <h1>Tricks</h1>
            </div>
            <div className="ticks-list--whatIs"></div>
          </div>
          {
          Array(10).fill(
            <TricksComponent></TricksComponent>
          )
          }
        </div>
      </div> 
    </div>
  )
}