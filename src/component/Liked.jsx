import * as React from 'react';

import { FavChild } from './favChild';
import { useSelector } from 'react-redux';

export default function Liked() {
const data=useSelector(state=>state.Data)
const{Fav}=data

  return (
    <div style={{display:"flex",justifyContent:"space-evenly",flexWrap:"wrap",flexDirection:"row"}}>
      
        {Fav && Fav.map((item,index)=> 
        <FavChild item={item}/>
        )}
    </div>
  
  );
}