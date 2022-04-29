import {createContext, useEffect, useState} from "react"
import { userObserver } from "../helpers/firebase"

const initialValues={title:"",ımageUrl:"",content:""}


export const AuthContext = createContext()

const AuthContextProvider =(props)=>{
    const [currentUser, setCurrentUser] = useState()
    const [info, setİnfo] = useState(initialValues)

    useEffect(() => {
      userObserver(setCurrentUser)
    }, [])
    
    return(
        <AuthContext.Provider value={{currentUser,info,setİnfo}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider
