import { useCallback, useEffect, useState } from "react"


const useFetchData = () => {
    const [data, setData] = useState([])

    const fetchData = useCallback(async()=>{
        const res = await axios()
    },[])

    useEffect(()=>{
        fetchData
    },[fetchData])

    return 
}

export default useFetchData
