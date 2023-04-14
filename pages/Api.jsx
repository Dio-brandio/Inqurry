import axios from 'axios'
import React,{useState} from 'react'

const Api = () => {
    const [ApiKey, setApiKey] = useState(null)
    const [loading, setLoading] = useState(false)
    const getApiKey =async()=>{
        setLoading(true)
        const response = await axios.get("http://localhost:3000/api/getApiKey")
        console.log(response.data);
        setApiKey(response.data.apiKey)
        setLoading(false)
    }
    console.log(ApiKey);
  return (
    <div className="container d-flex align-items-center justify-content-center flex-column" style={{height:'100vh !important'}}>
        <button onClick={getApiKey} className='btn btn-info btn-lg'>Get Api Key</button>
        {loading? <h1>Loading...</h1>:!loading&&ApiKey==null?"":<h1>{`${ApiKey}`}</h1>}
    </div>
  )
}

export default Api