import React, { useEffect } from 'react'
import { Axios } from '../Mainrouter'
import toast from 'react-hot-toast'
import { Link } from 'react-router-dom'

const SuccessPage = () => {
    useEffect(()=>{
Axios.post("/user/success",
    {},{ withCredentials: true }
)
.then((response)=>toast.success(response.data.message))
.catch((error)=>{
    console.log(error)
})
    },[])
  return (

<div>
    <h1>Payment successfully compleated</h1>

    <Link to={'/'}>Home</Link>
</div>
  )
}

export default SuccessPage