import {createContext, useState} from "react"

export const BlogContext = createContext()

const BlogContextProvider =(props)=>{

    const [info, setİnfo] = useState([{}]);
  
    return(
        <BlogContext.Provider value={{info,setİnfo}}>
            {props.children}
        </BlogContext.Provider>
    )
}

export default BlogContextProvider
