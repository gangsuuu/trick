

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
  return(
    <section className="index-section-01">
      <div>
        섹션1
      </div>
    </section>
  )
}

function SectionSecond (){
  return(
    <section className="index-section-02">
      <div>
        섹션2
      </div>
    </section>
  )
}

function SectionThird (){
  return(
    <section className="index-section-03">
      <div>
        섹션3
      </div>
    </section>
  )
}