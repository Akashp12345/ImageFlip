import { createSlice } from "@reduxjs/toolkit";
const data = {
    Fav: [],
    search:""
}
const ImageSlice = createSlice({
    name: "data",
    initialState: data,
    reducers: {
      
        setMyFav(state, action) {
            state.Fav.push(action.payload)
        },
        removeFav(state, action) {
          let ind=0
          state.Fav.map((item,index)=>{
            if(item.id==action.payload){
                ind=index
                return true
            }
            else{
                return false
            }
          })
          state.Fav.splice(ind,1)
        },
        Searchdata(state,action){
            state.search=action.payload
        }
    }
})
export const { setImageData, setMyFav, removeFav ,Searchdata} = ImageSlice.actions
export default ImageSlice.reducer