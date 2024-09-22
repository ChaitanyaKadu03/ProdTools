import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { httpTracerData } from '../../store/atoms'

const Navigation = () => {
  const navigate = useNavigate()
  const [httpData, setHttpData] = useRecoilState(httpTracerData)

  console.log(httpData.data);


  useEffect(() => {
    async function getHTTPData() {
      const response = await axios.get('http://localhost:3000/httptracer', { headers: { Authorization: localStorage.getItem("token") } })

      if (!response.data.success) {
        navigate('/signin')
      }

      setHttpData(response.data)
    }

    getHTTPData()
  }, [])
  return (
    <div className='text-black1'>
      <p>URLs</p>
      <div>
        {
          httpData.data.map(response => {
            return <div>
              <p>{JSON.stringify(response)}</p>
              {/* <p>{Object.keys(response)}</p>
              <p>{Object.values(response)}</p> */}
            </div>
          })
        }
      </div>
    </div>
  )
}

export default Navigation