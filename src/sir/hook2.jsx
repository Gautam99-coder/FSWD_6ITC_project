import React,{useState} from "react";
export default function HookExample2(){
    const [user,setUser]=useState({
        name:"",
        aga:0,
        male:false,
        email:"",
        city:""
    })
    return (
        <>
        <h1>User Infomrantaion</h1>
        <h2>Name:{user.name}</h2>
        <h2>Age:{user.age}</h2>
        <h2>Gender:{user.male?"Male":"Female"}</h2>
        <h2>Email:{user.email}
        <h2>City: {user.city}</h2>

        </h2>
        <input type="text"
        placeholder="Name"
        onChange={(e)=>setUser({...user,name:e.target.value})}
        />
        <br></br>
        <input type="number"
        placeholder="Age"
        onChange={(e)=>setUser({...user,age:e.target.value})}
        />
        <br></br>
        <label>Male</label>
        <input type="checkbox"
        onChange={(e)=>setUser({...user,male:e.target.checked})}
        />
        <br></br>
        <input type="email"
        placeholder="Email"
        onChange={(e)=>setUser({...user,email:e.target.value})}
        />
        <br></br>
        <select onChange={(e)=>setUser({...user,city:e.target.value})}>
            <option value="">Select City</option>
            <option value="New York">New York</option>
            <option value="Los Angeles">Los Angeles</option>
            <option value="Chicago">Chicago</option>
            <option value="Houston">Houston</option>
            <option value="Phoenix">Phoenix</option>
        </select>
        <br></br>
        <button onClick={()=>console.log(user)}>Submit</button>
        </>
    )
}