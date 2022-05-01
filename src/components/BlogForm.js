import React from 'react'
import BlogCard from "../components/BlogCard"

const BlogForm = ({info}) => {
  return (
    <div>
      {
        info?.map((item,index)=>{
          return(
            <BlogCard item={item} key={index} />
          )
        })
      }
    </div>
  )
}

export default BlogForm