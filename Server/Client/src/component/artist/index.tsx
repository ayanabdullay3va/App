import React, { useEffect ,useState} from 'react'
import axios from 'axios';

type Props = {}
function index({}: Props) {
const [data , setData]=useState("")
    
    useEffect(()=>{
axios("http://localhost:3000/Singer").then((res)=>{
setData(res.data)
})
    },[])
    console.log(data);
    
  return (
    <div>
<div className='box'>
    
<div className='card' style={{width:"10%",height:"400px" ,border:"1px solid black",boxSizing:"border-box"}}>

    <img src="" alt="" />
    <p>name</p>
    <p>age</p>
</div>
</div>
    </div>
  )
}

export default index