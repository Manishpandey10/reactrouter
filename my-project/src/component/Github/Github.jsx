import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
    const data = useLoaderData()
    // ***********************************************
    // const [data, setData]= useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/Manishpandey10')
    //     .then(response =>response.json())
    //     .then(data=>{
    //         console.log(data);
    //         setData(data)
    //     })
    // },[])
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github Par mere Followers  : {data.followers}
    <img src={data.avatar_url} alt='Profile picture' width={300 }></img>
    </div>
  )
}

export default Github
export const githubInfo = async ()=>{
    const response = await fetch('https://api.github.com/users/Manishpandey10')
    return response.json()
}