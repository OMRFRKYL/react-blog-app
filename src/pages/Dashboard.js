import React from 'react'
import {useFetch} from "../helpers/functions"
import BlogForm from "../components/BlogForm"


const Dashboard = () => {
  const {info}= useFetch()
  return (
    <div>
        <h1> ----  DASHBOARD ----- </h1>
            <BlogForm info={info}/>
    </div>
  )
}

export default Dashboard