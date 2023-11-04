import React,{useState} from 'react'

export default function Textform(props) {
  const handleUpClick=()=>{
    /* console.log("Uppercase was clicked" + text);*/
     let newText= text.toUpperCase();
     setText(newText)
     props.showAlert("convertd to uppercase","success");
   
 
    
   
   }
   const handleLowClick=()=>{
    let newText= text.toLowerCase();
    setText(newText)
    props.showAlert("convertd to lowercase","success");

}
const handleClearClick=()=>{
 let newText= '';
 setText(newText)
 props.showAlert("text cleard", "success")
}
 const handleExtraSpace=()=>{
   let newText= text.replace(/\s+/g, ' ');
   setText(newText)
   props.showAlert("Handle extra spaces", "success")
 }


 const handleOnChange=(event)=>{
  /* console.log("on change");*/
   setText(event.target.value)
}
const[text, setText]= useState('');
   return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
      <h1>{props.heading}</h1>
<div className="mb-3">
      <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'black'}} id="mybox" rows="6"></textarea>
</div>
<button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
<button className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to Lowercase</button>
<button className='btn btn-primary mx-1 my-1' onClick={handleClearClick}>Clear</button>
<button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpace}>Remove ExtraSpace</button>

    </div>
    <div className="container" my-3  style={{color:props.mode==='dark'?'white':'black'}}>
      <h1>Your Text Summary</h1>
      <p>{text.split(" ").filter(w=>w !== "").length} words and {text.length} characters </p>
      <p>{0.008*text.split("").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Nothing to preview"}</p>
    </div>
    </>
  )
}
  
