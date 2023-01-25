import * as React from 'react';
import axios from 'axios';
import { Child } from './child';
import { useSelector } from 'react-redux';

export default function Home() {
 const[Data,setData]=React.useState([])
 const[Searched,setSerach]=React.useState([])
 const data=useSelector(state=>state.Data)
 const {search}=data
    React.useEffect(()=>{
          axios.get("https://rickandmortyapi.com/api/character")
          .then(res=>setData(res.data.results))
          .catch(err=>console.log(err))

    },[])
React.useEffect(()=>{
   let f=Data.filter((item)=>item.name.toLowerCase().includes(search.toLowerCase()) || item.gender.toLowerCase().includes(search.toLowerCase())||item.species.toLowerCase().includes(search.toLowerCase()))
   setSerach(f)
},[search])


  return (
    <div style={{display:"flex",justifyContent:"space-evenly",flexWrap:"wrap",flexDirection:"row"}}>
         {search.length>0 ? Searched.length>0?Searched.map((item,index)=> 
        <Child item={item}/>
        ):<div style={{verticalAlign:"center"}}>
            <h2>No Data Available</h2>
        </div>:Data && Data.map((item,index)=> 
        <Child item={item}/>
        )}
        
    </div>
  
  );
}