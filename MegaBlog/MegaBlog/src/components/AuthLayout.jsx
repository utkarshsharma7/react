import React, {useEffect, useState} from 'react'
import {  useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function Protected({children, authenticaton = true}) {

    const navigate = useNavigate()
    const [loader, setLoader] = useState(true)
    const authStatus = useSelector(state => state.auth.status)

    useEffect(() => {
        if(authenticaton && authStatus !== authenticaton){
            navigate("/login")
            
        }

        else if(!authenticaton&& authStatus !== authenticaton){
            navigate("/")
        }
        setLoader(false)
    }, [authStatus, navigate, authenticaton])
    


  return loader ? <h1>loading...</h1> : <>{children}</>
}

