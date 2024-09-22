import axios from 'axios'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { currentHttpDataAtom, httpTracerData } from '../../store/atoms'

let count = -1

const Navigation = () => {
  const navigate = useNavigate()
  const [httpData, setHttpData] = useRecoilState(httpTracerData)
  const [currentHttpData, setCurrentHttpData] = useRecoilState(currentHttpDataAtom)


  useEffect(() => {
    async function getHTTPData() {
      const response = await axios.get('http://localhost:3000/httptracer/data', { headers: { Authorization: localStorage.getItem("token") } })

      if (!response.data.success) {
        navigate('/signin')
      }

      setHttpData(response.data.response.httpData)
      setCurrentHttpData(response.data.response.httpData[0])
    }

    getHTTPData()
  }, [])

  return (
    <div className='text-black1 flex flex-col bg-black5 w-[360px] h-full'>
      <p className='h3 p-8'>URLs</p>
      <div className='flex flex-col'>
        {httpData.map(response => {
          count++
          return (
            <div
              key={count}
              className={`flex gap-4 p-4 cursor-pointer ${count % 2 == 0 ? 'bg-black5' : 'bg-black6'}`}
              onClick={() => {
                setCurrentHttpData(httpData[count])
              }}>
              <p className='h5'>{response["method"]}</p>
              <p className='h5 '>{response['headers']["host"]}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Navigation