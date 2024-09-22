import { logo } from '../assets/logo/icons'

const Navbar = () => {
    return (
        <nav className='px-[64px] py-[20px] flex justify-between items-center text-black2'>
            <a href='/' >
                <img src={logo} alt='Company Logo' className='h-[56px]' />
            </a>
            <ul className='flex gap-12'>
                <li className='h4 hover:text-orange2'><a href='/'>Home</a></li>
                <li className='h4 hover:text-orange2'><a href='#about'>About Us</a></li>
                <li className='h4 hover:text-orange2'><a href='#features'>Features</a></li>
                <li className='h4 hover:text-orange2'><a href='#products'>Products</a></li>
            </ul>
            <button className={`h4 border-2 px-6 py-2 rounded-full border-orange2 text-orange2 ${localStorage.getItem('token') ? 'hidden' : null}`}>
                <a href='/signin'>Signin/Signup</a>
            </button>
        </nav>
    )
}

export default Navbar