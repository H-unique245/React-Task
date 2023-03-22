import axios from  "axios";
import { ERROR_DATA, LOADING_DATA, SUCCESS_DATA } from "./actionType";


export const getData=()=>async(dispatch)=>{
    dispatch({type:LOADING_DATA})
   try{
     let res = await axios.post('http://3.7.252.58:4001/product/getAllProduct', {
     limit: 100,
     page: 0,
     search: ''
   }, {
     headers: {
       'Content-Type': 'application/json',
       'Cookie': 'connect.sid=s%253AC9UlQ9M1W1aslddIqBNrrk68Yx4GleaF.OyLqPkC%252FpbJKf070EG6KIJoS70bHaP5GOYxBXBV6hG8'
     }})
//    console.log(res.data)
     dispatch({type:SUCCESS_DATA, payload:res.data})
   }
   catch(err){
    dispatch({type: ERROR_DATA})
   }
}

