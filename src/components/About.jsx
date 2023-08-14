import React, { useState } from 'react'

export default function About(props) {

  const [myStyle, setMyStyle] = useState({
    color: 'black',
    backgroundColor: 'white'
  })
  const toggleStyle = () => {
    if(myStyle.color === 'white') {
      setMyStyle({
        color: 'black',
        backgroundColor: 'white'
      })
    }
    else {
      setMyStyle({
        color: 'white',
        backgroundColor: 'black'
      })
    }
  }


  return (
    <>
      <div className='container' style2={myStyle} style={{backgroundColor:props.mode==='dark'? '#4545af':'white', color:props.mode==='light'? 'black':'white'}}  >
        <div  className="accordion" id="accordionExample" style2={myStyle} style={{backgroundColor:props.mode==='dark'? '#4545af':'white', color:props.mode==='light'? 'black':'white'}}>
          <h2 className="mx-1">{props.heading}</h2>
          <div  className="accordion-item" style2={myStyle} style={{backgroundColor:props.mode==='dark'? '#4545af':'white', color:props.mode==='light'? 'black':'white'}}>
            <h2  className="accordion-header">
              <button  className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style2={myStyle} style={{backgroundColor:props.mode==='dark'? '#4545af':'white', color:props.mode==='light'? 'black':'white'}}>
                Accordion Item #1
              </button>
            </h2>
            <div id="collapseOne"  className="accordion-collapse collapse show" data-bs-parent="#accordionExample"  style2={myStyle} style={{backgroundColor:props.mode==='dark'? '#4545af':'white', color:props.mode==='light'? 'black':'white'}} >
              <div  className="accordion-body"  style2={myStyle} style={{backgroundColor:props.mode==='dark'? '#4545af':'white', color:props.mode==='light'? 'black':'white'}}>
                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style2 each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
          <div  className="accordion-item" style2={myStyle}style={{backgroundColor:props.mode==='dark'? '#4545af':'white', color:props.mode==='light'? 'black':'white'}}>
            <h2  className="accordion-header" style2={myStyle} style={{backgroundColor:props.mode==='dark'? '#4545af':'white', color:props.mode==='light'? 'black':'white'}}>
              <button  className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"  style2={myStyle} style={{backgroundColor:props.mode==='dark'? '#4545af':'white', color:props.mode==='light'? 'black':'white'}} >
                Accordion Item #2
              </button>
            </h2>
            <div id="collapseTwo"  className="accordion-collapse collapse" data-bs-parent="#accordionExample"   style2={myStyle}style={{backgroundColor:props.mode==='dark'? '#4545af':'white', color:props.mode==='light'? 'black':'white'}}>
              <div  className="accordion-body" style2={myStyle}style={{backgroundColor:props.mode==='dark'? '#4545af':'white', color:props.mode==='light'? 'black':'white'}}>
                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style2 each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
          <div  className="accordion-item" style2={myStyle}style={{backgroundColor:props.mode==='dark'? '#4545af':'white', color:props.mode==='light'? 'black':'white'}}>
            <h2  className="accordion-header">
              <button  className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"  style2={myStyle}style={{backgroundColor:props.mode==='dark'? '#4545af':'white', color:props.mode==='light'? 'black':'white'}} >
                Accordion Item #3
              </button>
            </h2>
            <div id="collapseThree"  className="accordion-collapse collapse" data-bs-parent="#accordionExample" style2={myStyle}style={{backgroundColor:props.mode==='dark'? '#4545af':'white', color:props.mode==='light'? 'black':'white'}}>
              <div  className="accordion-body" style2={myStyle}style={{backgroundColor:props.mode==='dark'? '#4545af':'white', color:props.mode==='light'? 'black':'white'}}>
                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style2 each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
          <button onClick={toggleStyle} type="button" className="btn btn-primary">Dark Mode</button>
        </div>
      </div>

    </>
  )
}
