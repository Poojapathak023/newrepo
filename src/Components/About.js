import React,{useState} from 'react'


export default function About(props) {
    //
    const handleOnChange = (event) =>{
        //  console.log("changes Click" + text);
          setText(event.target.value);
          
      }
      const handleUpOnClick = () =>{
         // console.log(text);
          let newText = text.toUpperCase();
          setText(newText);
      }
      const handleDownOnClick = () =>{
          // console.log(text);
           let newText = text.toLowerCase();
           setText(newText);
       }
       const handleCapOnClick = () =>{
          // console.log(text);
          let newText = text.toLowerCase().split(" ");
          for(let i=0 ; i< newText.length; i++){
              newText[i]=newText[i][0].toUpperCase() + newText[i].slice(1);
            //  console.log(newText[i][0]);
             // console.log(newText[i].slice(1));
            //  console.log(newText[i]);
          }
      
          
          let newTextsen =newText.join(" ")
          setText(newTextsen);
       }
           
       const handleSenOnClick = () =>{
          // console.log(text);
          let newText = text.toLowerCase().split(" ");
          for(let i=0 ; i < 1; i++){
              newText[i]=newText[i][0].toUpperCase() + newText[i].slice(1);
            //  console.log(newText[i][0]);
             // console.log(newText[i].slice(1));
            //  console.log(newText[i]);
          }
          let newTextsen =newText.join(" ")
          setText(newTextsen);
      }
       const handleClearOnClick = () =>{
          // console.log(text);
           let newText = "";
           setText(newText);
       }
       const handleCopyOnClick = () =>{
          var text = document.querySelector('#textarea1');
          text.select()
          navigator.clipboard.writeText(text.value);
         // setText(newText);
       }
  // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);
    const [text, setText] = useState("");
    const [ myStyle, setmyStyle ] =useState(
        {
      backgroundColor: "white",
      color:"black",
      height:"100vh",
  
      }
  
    )
    const [btnTxt,setbtnTxt] = useState('Enable Dark Mode');
    const handleModeChange = () =>{
      if( myStyle.color === "black"){
          setmyStyle({
              backgroundColor: "black",
              color:"white",  
          }
          )
          setbtnTxt('Enable Light Mode');
      }
      else{
          setmyStyle({
              backgroundColor: "white",
              color:"black"  
          }
           )
          setbtnTxt('Enable Dark Mode');
      }
    }
  
      return (
          <div>
          <div className='container-fluid' style={ myStyle }> 
          <div className="form-check form-switch py-5">
              <input className="form-check-input" onChange={ handleModeChange } type="checkbox" role="switch" id="flexSwitchCheckDefault" />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{btnTxt}</label>
          </div>
              <div className="pb-3 container">
                  <label htmlFor="exampleFormControlTextarea1" className="form-label mx-10">{props.heading2} </label>
                  <input className="form-control" readOnly value={count} />
                  <button className="btn btn-primary my-4 " onClick={() => setCount(count-1) }>-</button> 
                  <button className="btn btn-primary my-4 mx-2" onClick={() => setCount(count+1) }>+</button>
                  <h2 className="form-label mx-10">{props.heading} </h2>
                  <textarea className="form-control" onChange={handleOnChange} value={text} id="textarea1" rows="3"></textarea>
                  <button className="btn btn-primary my-4 mx-1" onClick={handleUpOnClick} >Convert to UpperCase</button>
                  <button className="btn btn-primary my-4 mx-1" onClick={handleDownOnClick} >Convert to LowerCase</button>      
                  <button className="btn btn-primary my-4 mx-1" onClick={handleCapOnClick} >Convert to Capitalize</button>
                  <button className="btn btn-primary my-4 mx-1" onClick={handleSenOnClick} >Convert to Capitalize</button>
                  <button className="btn btn-primary my-4 mx-1" onClick={handleClearOnClick} >Clear</button>
                  <button className="btn btn-primary my-4 mx-1"  onClick={handleCopyOnClick}>Copy Text</button>
                  <p>{ text.split(" ").filter( e => e.trim().length > 0).length } Words and { text.split(" ").join("").length } Characters</p>
                  <h3 className="py-4">Preview</h3>
                  <p>{text}</p>
              </div>
  
          </div>
          </div>
          
      )
}
