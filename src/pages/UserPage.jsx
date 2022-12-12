import React from 'react'
import { useParams } from 'react-router-dom'
export const UserPage = () => {
    const {id} = useParams("id")
 
  return (
    <div>User:{id}</div>
  )
}
