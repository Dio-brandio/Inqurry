import axios from 'axios'
import React,{useState} from 'react'

const CallApi = () => {
    const [loading, setLoading] = useState(false)
    const getApiKey =async()=>{
        setLoading(true)
        const response = await axios.get("http://localhost:3000/api/getApiHit",{
            headers:{
                api_key:"f07e2384-0d4b-4629-b343-89e5e05c68e0"
            }
        })
        console.log(response.data);
        setLoading(false)
    }
  return (<>
    <div className="container d-flex align-items-center justify-content-center flex-column" style={{height:'100vh !important'}}>

        {loading?<h1>Loading...</h1>:null}
        <button onClick={getApiKey} className='btn btn-info btn-lg'> Call ApiKey</button>
    </div>
  </>
  )
}

export default CallApi