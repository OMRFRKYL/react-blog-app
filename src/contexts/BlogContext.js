import {createContext, useState} from "react"


const initialValues={title:"",ımageUrl:"",content:""}


export const BlogContext = createContext()

const BlogContextProvider =(props)=>{
    const [info, setİnfo] = useState(initialValues)

    return(
        <BlogContext.Provider value={{info,setİnfo}}>
            {props.children}
        </BlogContext.Provider>
    )
}

export default BlogContextProvider
