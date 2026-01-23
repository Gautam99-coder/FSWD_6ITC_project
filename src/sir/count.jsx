import React,{useState} from "react";
export default function HookExampple1(){
    const [data,setCount]=useState(0);
    return(
        <>
        <h1 style={{color:data>0?"green":data<0?"red":"black"}}>Count: {data}</h1>
        <button onClick={()=>setCount(data+1)} >Increment</button>
        <br></br>
        <br></br>
        <button onClick={()=>setCount(data-1)}>Decrement</button>
        </>
    )
}