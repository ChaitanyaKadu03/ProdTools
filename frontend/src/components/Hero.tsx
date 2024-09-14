import Button from './Button'
import { tick } from '../assets/icons/icons'

const Hero = () => {
  return (
    <div className='text-black1 flex flex-col justify-center items-center gap-9 text-center px-[64px] py-[96px]'>
      <h1 className='text-[64px] font-bold text-black1 tracking-wider'>Collaborate, Manage, Innovate</h1>
      <h2 className='h3 w-[780px]'>Empower your team with ProdTools - the all-in-one platform for seamless collaboration, efficient management, and groundbreaking innovation.</h2>
      <div className='flex gap-8'>
        <div className='flex items-center gap-3'>
          <img src={tick} alt='tick icon' className='h-6' />
          <p className='p1'>Real-Time Collaboration</p>
        </div>
        <div className='flex items-center gap-3'>
          <img src={tick} alt='tick icon' className='h-6' />
          <p className='p1'>Simple Design</p>
        </div>
        <div className='flex items-center gap-3'>
          <img src={tick} alt='tick icon' className='h-6' />
          <p className='p1'>Note Sharing</p>
        </div>
      </div>
      <Button needIcon={true} link={'/#products'} text={'Get Started'} />
    </div>
  )
}

export default Hero