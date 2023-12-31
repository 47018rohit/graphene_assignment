import axios from "axios"
import { useCallback, useEffect, useState } from "react"


const useFetchData = (e) => {
    const [data, setData] = useState()
   
    const fetchData = useCallback(async()=>{
        const res = await axios(e)
        setData(res.data)
       
    },[])

    useEffect(()=>{
        fetchData()
    },[fetchData])

    return  data
}

export default useFetchData
