import { Appbar } from "../components/Appbar"
import {Users} from "../components/User"
import { Balance } from "../components/Balance"
import { useEffect, useState } from "react"
import axios from "axios"




export const Dashboard =()=> {

const [balance, setBalance] = useState(0);
const [name, setName] = useState("User");


useEffect( ()=>{
  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: 'http://localhost:3000/api/v1/account/balance',
    headers: { 
      'Authorization':"Bearer " + localStorage.getItem("token"), 
      'Content-Type': 'application/json'
    },
  };
  
  axios.request(config)
  .then((response) => {
    setBalance((response.data.balance).toFixed(2));
    setName(response.data.firstName);
  
  })
  .catch((error) => {
    console.log(error);
  });
                       

},[])



  return (
    <div>
      <Appbar name={name}/>
      <div className="m-8">
        <Balance value={balance}/>
        <Users/>
      </div>
    </div>
  )
}

