import React, { useState } from "react";

//Hooks let us use react class features without writing them

// const[count, setCount] = useState(0);
export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Text typed : "+ text)
    // setText();
    let newText = text.toUpperCase();
    // console.log("Uppercase text : " + newText);
    setText(newText);
    props.showAlert("! Converted to Uppercase", "success");
  };
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("! Converted to Lowercase", "success");
  };
  const handleOnChange = (event) => {
    // console.log("Handle on Change");
    setText(event.target.value); //to provide the value in the text area
  };
  const speak = () =>{
    let message = new SpeechSynthesisUtterance();
    message.text = text;
    window.speechSynthesis.speak(message);
  }

  const handleFind = (event) => {
    setfindWord(event.target.value);
  }
  const handleReplace = (event) => {
    setReplaceWord(event.target.value);
  }
  const findReplace = () => {
    let newText = text.replaceAll(findWord,replaceWord);
    setText(newText);
  }
  const clearText = () =>{
    setText("");
    props.showAlert("! Text cleared", "success");
  }




  //State Declaration
  const [text, setText] = useState("Enter text here");
  const [findWord, setfindWord] = useState("Find");
  const [replaceWord, setReplaceWord] = useState("Replace");
  // text = "New text here"; //wrong way to change state
  // setText("Enter Text")
  return (
    <>
      <div className="container " 
      style={{backgroundColor: props.mode === 'dark' ? props.color : 'white',
        color : props.mode === 'dark' ? 'white' : 'black'
  }}>
        <h1>{props.heading}</h1>
        <textarea
          className="form-control"
          id="myBox"
          rows="8"
          value={text} //var name of state
          onChange={handleOnChange} //function name of state
          style={{backgroundColor: props.mode === 'dark'? props.color : 'white',
                color : props.mode === 'dark' ? 'white' : 'black'
          }}
        ></textarea>
        <button className="btn btn-primary my-3 mx-2" onClick={handleUpClick}>
          Convert to Uppertext
        </button>
        <button className="btn btn-primary my-3 mx-2" onClick={handleLowClick}>
          Convert to Lowertext
        </button>
        <button className="btn btn-primary my-3 mx-2" onClick={clearText}>
          Clear Text
        </button>
        <button className="btn btn-primary my-3 mx-2" onClick={speak}>
          Speak
        </button>
        
      </div>
      <textarea 
        className="mx-3"
        name="" 
        id="replaceText"
        value={findWord}
        onChange={handleFind}
        rows={3}
        style={{backgroundColor: props.mode === 'dark'? props.color : 'white',
                color : props.mode === 'dark' ? 'white' : 'black'
        }}
        >
        </textarea>
        <textarea 
        className="mx-3"
        name="" 
        id="replaceText"
        value={replaceWord}
        onChange={handleReplace}
        rows={3}
        style={{backgroundColor: props.mode === 'dark'? props.color : 'white',
                color : props.mode === 'dark' ? 'white' : 'black'
        }}
        >
        </textarea><br></br>
        <button className="btn btn-success mx-3" onClick={findReplace}>
          Replace
        </button>
      <div className="container my-3" style={{backgroundColor: props.mode === 'dark'? props.color : 'white',
                color : props.mode === 'dark' ? 'white' : 'black'
          }}>
        <h1>Your text summary</h1>
        <p>
          <b>{text.split(" ").filter((element) => {return element.length !== 0}).length}</b> words and <b>{text.length} </b>{" "}
          characters
        </p>
        <p>
          Normal time to read this text :{" "}
          {(text.split(" ").filter((element) => {return element.length !== 0}).length * 0.008).toFixed(3)} minutes
        </p>
        <h2>Preview:</h2>
        <p>{text.length > 0 ? text : "Enter some text to preview here!"}</p>
      </div>
    </>
  );
}
