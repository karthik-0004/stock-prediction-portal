import React,{useEffect} from 'react'
import axiosInstance from '../../axiosInstace'
const Dashboard = () => {
    
    useEffect(()=>{
        const fetchProtectedData = async () =>{
            try{
                const response = await axiosInstance.get('/protected-view')
                // console.log("success:",response.data)
            }
            catch(error){
                console.error("Error fetching ",error)
            }
        }
        fetchProtectedData()
    }, [])
  return (
    <>
        <h1 className='text-light'>Dashboard</h1>
    </>
  )
}

export default Dashboard