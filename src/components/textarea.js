import React ,{useState} from "react";
// import axios from 'axios';
import copy from "copy-to-clipboard";

export default function Textarea(props){
 const uppercase=()=>{
  // console.log("each word has been captalized");
  let newText=text.toUpperCase();
  setText(newText);

  }
  const lowercase=()=>{
    // console.log("each word has been captalized");
    let newText=text.toLowerCase();
    setText(newText);
  
    }
    const clear=()=>{
      
      let newText="";
      setText(newText);
    }

    const encode=()=>{
     
     
     let newText=btoa(text);
     setText(newText);

    }
    const decode=()=>{
      // console.log("each word has been captalized");
     
     let newText=atob(text);
     setText(newText);
    }

    // copy function
    const copybtn=()=>{
     
        copy(text);
        alert(`Copied to Clipboard`);
    }
    const Remove=()=>{
      
      const removeExtraSpace = (s) => s.trim().split(/ +/).join(' ');

        let newText=removeExtraSpace(text);
        setText(newText);
    }
   

    //counting words
    const getWordCount = () => {
      // Split the text by whitespace and filter out empty strings
      const words = text.trim().split(/\s+/).filter(Boolean);
      return words.length;
  };
    
  const Captalizeon=(event)=>{
    // console.log("on changed");
    setText(event.target.value);
  }
  const [text, setText] = useState("");
    return(

     <><div className="container my-3">

        <div className="mb-3 my-2">
          <br></br>
          <h3 className=" mb-3 my-2 ">TextExplorer - Word Counter,Encoder,Decoder,Remove Extra Spaces</h3>
          {/* <label htmlFor="exampleFormControlTextarea1" className="form-label">{props.title}</label> */}
          <textarea className="form-control" onChange={Captalizeon} value={text} id="Textarea1" rows={6} />
          <button type="button" onClick={uppercase} className="btn btn-success my-3 mx-3">{props.button1}</button>
          <button type="button" onClick={lowercase} className="btn btn-success my-3 mx-3">{props.button2}</button>
          <button type="button" onClick={clear} className="btn btn-success my-3 mx-3">{props.button3}</button>
          
          <button type="button" onClick={encode} className="btn btn-success my-3 mx-3">{props.button4}</button>
          <button type="button" onClick={decode} className="btn btn-success my-3 mx-3">{props.button5}</button>
          <button type="button" onClick={copybtn} className="btn btn-success my-3 mx-3">{props.button6}</button>
          <button type="button" onClick={Remove} className="btn btn-success my-3 mx-3">{props.button7}</button>

 
        </div> </div><div className="container my-3">
           <h3> Summary of your text</h3>
           <h4>Preview</h4>
           <p>{text.length>0?text:"Enter something to preview"}</p>
           <p>
             
            Your text have {getWordCount()} words and {text.length} characters
           </p>

 
        </div></>      

      
      
      );
}