export default function Footer(){
  return(
    <footer>
      <div className="footer-imagesContent"></div>
      <div className="footer-infomation">
        <div className="footer-left">
          <div className="footer-title">
           <p>ContactWithMe</p>
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
                <p>82+ 10-5400-6870</p>
              </div>
            </div>
            <div className="footer-info--addressWra">
              <div className="footer-info--address">
                <p>
                  대한민국 수원시 탑동로 11번길
                </p>
                <p>
                  58-5 탑캐슬아파트 602호
                </p>
              </div>
            </div>
          </div>
          <div className="footer-info--seconde">
            <div className="footer-info-secondeUp">
              <div className="footer-info--emailWrp">
                <p>email</p>
                <p className="footer-info-email">gangsuuu02@gmail.com</p>
              </div>
              <div className="footer-info--SNS">
                <p>INSTAGRAM</p>
                <p>TSTORY</p>
              </div>
            </div>
            <div className="footer-info-secondeDown">
              <p>Web Publisher Huck</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}