import React from 'react'
import axios from 'axios'

function Api() {

    axios.get("http://localhost:8000/api/services/ghala/").then((res)=>{
        console.log(res.data)
        const Data = res.data
        Data.map((ghala)=>{
            console.log(ghala.title)
        })
    })
  return (
    <div>
        <h1>Hel;lo world</h1>

    </div>
  )
}

export default Api