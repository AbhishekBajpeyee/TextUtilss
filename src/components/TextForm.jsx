import React, { useState } from 'react' //importng Reactand  useState from react , useState is a hook

export default function TextForm(props) {


    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.showalert('Text Changed to UpperCase', "success")
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showalert('Text Changed to LowerCase', "success")

    }
    const handleClearClick = () => {
        let newText = ''
        setText(newText)
        props.showalert('Text Cleared ', "warning")

    }
    const handleOnChange = (event) => {
        setText(event.target.value) //here we are setting the new text which user enter in text are to the Value= {text} so that user can write otherwise user cant write anything bcz text is set to be a fixed value now we are targetting it with the help of event firing
    }
    const [text, setText] = useState(''); //text is a variable inside which we stored  "Enter Text Here" and whenever it updated then it goes to setText state
    // text="new text"             //wrong way to change the text
    // setText="new Text"         //correcct way is

    const handleCopy = () => {
        navigator.clipboard.writeText(`${text}`);
        props.showalert('Text Copied to Clipboard ', "success")


    }
    const removeExtraSpace = () => {
        let newText = text.split(/[  ]+/);
        setText(newText.join(" "))
        props.showalert('Extra Spaces Removed', "success")

    }


    return (

        <>

            <div className='container'   >
                <div className="mb-3 my-3"  >
                    <label htmlFor="myBox" className="form-label"     ><h3>{props.Title}</h3></label>
                    <textarea className="form-control" id="myBox" rows="8" placeholder={props.heading} value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? '#85735c' : 'white', color: props.mode === 'light' ? 'black' : 'white', }}    ></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert To Upper Case</button>
                <button disabled={text.length===0}  className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert To Lower Case</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
                <button className="btn btn-primary mx-1 my-1 " onClick={handleCopy}>Copy Text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1 " onClick={removeExtraSpace}>Remove Extra spaces</button>


            </div>
            <div className="container my-3"   >
                <h2>Your Text Summary</h2>
                {/* filter taking a function and if that function returns tru only when taht element can be inside of the array  here meansyadi element ki length 0 hai to vo element array ,e nahi rhega otherwise rhega*/}
                <p>Characters in Your Text: {text.length} <br /> </p>
                <p>Words in Your Text: {text.split(" ").filter((element) => { return element.length !== 0 }).length} <br /></p>
                <p>Minutes to Read: {0.08 * text.split(" ").filter((element) => { return element.length !== 0 }).length} <br /> </p>
                <h4>Preview:</h4> {text.length>0 ? text : "nothing to preview"}




            </div>
        </>
    )
}
