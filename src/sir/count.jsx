import React,{useState} from "react";
export default function HookExampple1(){
    const [data,setCount]=useState(0);
    const [name,setName]=useState("");
    const [selected,setSelected]=useState(false);
    return(
        <>
        <h1 style={{color:data>0?"green":data<0?"red":"black"}}>Count: {data}</h1>
        <h2>Your Name is : {name}</h2>
        <button onClick={()=>setCount(data+1)} >Increment</button>
        <br></br>
        <br></br>
        <button onClick={()=>setCount(data-1)}>Decrement</button>
        <input type="text" 
        placeholder="Name"
        onChange={(e)=>setName(e.tareget.value)}
        />
        <br></br>
        {"Selected value is"}:{selected?"True":"False"}
        <input 
        type="checkbox"
        onChange={(e)=>setSelected(e.target.checked)}
        />
        
        </>
    )
}