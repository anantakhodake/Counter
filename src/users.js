import React,{useState} from 'react';
function Users(){
    const[data,setData]= useState(0)
    return(
        <div>
            <h1>{data}</h1>
            <button onClick={()=>setData(data+1)}>Add</button><br/><br/>
            <button onClick={()=>setData(data-1)}>Sub</button>
        </div>
    )
}
export default Users;
