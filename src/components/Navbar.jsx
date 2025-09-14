import React, {useEffect,useState} from 'react'
import {Link} from 'react-router-dom'
import {navLinks} from '../constants'
import {logo,menu,close} from '../assets'
const Navbar = () => {
  const [active,setActive] = useState('');
  const [toggle,setToggle] = useState(false);
  return (
    <nav className='w-full flex items-center py-5 fixed top-0 z-20 sm:p-5' style={{padding: '1.8rem 3rem'}}>
      <div className='w-full flex justify-between items-center max-w-7xl m-auto'>
        <Link to={'/`'} className='flex gap-2' onClick={()=>{setActive('')
          window.scrollTo(0,0)
        }}>
          <img src={logo} alt="logo" className='w-9 h-9 object-contain' />
          <p className='text-white text-[20px] font-bold cursor-pointer flex'>Subhan &nbsp; <span className='sm:block hidden'>Ali</span></p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link)=>(
            <li key={link.id}
            className={`${active===link.title ? "text-white":"text-blue-100"} hover:text-white text-[17px] hover:text-[18px] cursor-pointer`}
            onClick={()=>setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img src={toggle?close:menu} alt='menu' className='w-[20px] h-[28px] objec-contain cursor-pointer'
          onClick={()=>setToggle(!toggle)}
          />

          <div className={`${!toggle?'hidden':'flex'} nav-gradient p-9 absolute top-20 right-0 mx-4 my-2 min-w-[140px]  z-10 rounded-xl`}>
            <ul className='list-none flex justify-end items-start px-2 flex-col mr-3 gap-4'>
          {navLinks.map((link)=>(
            <li key={link.id}
            className={`${active===link.title ? "text-white":"text-blue-100"} font-poppins font-medium cursor-pointer text-[16px]`}
            onClick={()=>{
              setActive(!active)
              setToggle(!toggle)
            }}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar