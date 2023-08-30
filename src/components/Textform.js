import React, {useState} from 'react';


//here text = Enter text here
// setText = function to update given value..

//useState => hooks in react
// hooks aapko bina class banaye class ke features use karne me help karte hai..!

export default function Textform(props) {

      // function to convert into upperCase.
    const handleUpperCase = () => {
        //console.log("handleUpperCase button was clicked..!" );
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Converted to Uppercase','success');

    }

    // function to convert into LowerCase.
    const handleLowerCase = () => {
        //console.log("handleUpperCase button was clicked..!" );
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Converted to Lowercase','success');

    }

    //To clear the text 
    const handleClearCase = () => {
        //console.log("handleUpperCase button was clicked..!" );
        let newText ='';
        setText(newText);
        props.showAlert('text has been cleared','success');
    }

      //To clear the text 
      const handleCopy = () => {
        //console.log("handleUpperCase button was clicked..!" );
        let text = document.getElementById('textArea');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert('text copied successfully','success');

    }

    const handleOnChange = (event) => {
        console.log("Handle On change");
        setText(event.target.value);
    }

    const[text, setText] = useState('');
  //  text = "newText"; // wrong-way to change text

  return (
    <>
    <div className="container">
        <h2>{props.heading}</h2>
        <div className="mb-3">
        <textarea className="form-control" value={text} id="textArea" rows="8" onChange={handleOnChange}></textarea>
        </div>
   <button className="btn btn-primary mx-1" onClick={handleUpperCase}>Convert to Uppercase</button>
   <button className="btn btn-primary mx-1" onClick={handleLowerCase}>Convert to Lowercase</button>
   <button className="btn btn-primary mx-1" onClick={handleClearCase}>Clear</button>
   <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy text</button>
    </div>

    <div className="container my-3">
    <h1>Your text summary</h1>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <p>{0.008 *text.split(" ").length } minutes read</p>
    </div>
    </>

        //In JavaScript, the split() method is used to split a string into an array of substrings based on a specified delimiter 
  )
}
