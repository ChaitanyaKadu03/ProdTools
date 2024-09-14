import { arrow } from '../assets/icons/icons'

const Button = ({ needIcon = true, text = 'Explore Now', link = '/' }) => {
    return (
        <button className='text-black2 border-2 w-fit px-8 py-3 border-orange2 bg-orange2 rounded-full'>
            <a href={link} className='flex gap-3 h4 items-center'>
                <p>{text}</p>
                {needIcon ? <img src={arrow} alt='arrow icon' className='h-6' /> : null}
            </a>
        </button>
    )
}

export default Button