import axios from 'axios';
import { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useNavigate } from 'react-router-dom';

function ASinglePage() {
  const [value, setValue] = useState('');
  const navigate = useNavigate()

  useEffect(() => {
    async function getInitialvalue() {
      const response = await axios.get('http://localhost:3000/aplainpage', {
        headers: {
          Authorization: localStorage.getItem("token")
        }
      })

      if (!response.data.success) {
        navigate('/signin')
      }

      console.log(response.data.data);
      

      setValue(response.data.data)
    }

    getInitialvalue()
  }, [])

  return (
    <div className='flex'>
      <div
        className='fixed right-0 cursor-pointer rounded-md hover:bg-black4 bg-black5 p-4'
        onClick={async () => {
          const response = await axios.post('http://localhost:3000/aplainpage', {
            newData: value
          }, {
            headers: {
              Authorization: localStorage.getItem("token")
            }
          })

          console.log(response);

        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-orange2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 7.5h-.75A2.25 2.25 0 0 0 4.5 9.75v7.5a2.25 2.25 0 0 0 2.25 2.25h7.5a2.25 2.25 0 0 0 2.25-2.25v-7.5a2.25 2.25 0 0 0-2.25-2.25h-.75m0-3-3-3m0 0-3 3m3-3v11.25m6-2.25h.75a2.25 2.25 0 0 1 2.25 2.25v7.5a2.25 2.25 0 0 1-2.25 2.25h-7.5a2.25 2.25 0 0 1-2.25-2.25v-.75" />
        </svg>
      </div>
      <ReactQuill
        theme="snow"
        value={value}
        onChange={setValue}
        className='text-black1 w-[1024px] mx-auto mt-[6vh] min-h-[88vh]'
      />
    </div>
  );
}

export default ASinglePage