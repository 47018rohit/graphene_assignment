import axios from "axios"
import { useCallback, useEffect, useState } from "react"


const useFetchCategory = (e) => {
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

export default useFetchCategory
