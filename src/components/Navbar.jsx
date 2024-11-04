import  { useState } from 'react'

import mylogo from "../assets/mylogo.png"
import { NAVIGATION_LINKS } from '../constants';
import { FaTimes } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa6';

const Navbar = () => {
    const [isMobileMenuOpen,setIsMobileMenuOpen]=useState(false);
    const toggleMenu=()=>{
        setIsMobileMenuOpen(!isMobileMenuOpen);
    }
    const handleLinkClick=(e,href)=>{
             e.preventDefault();
             const targetElement=document.querySelector(href);
             if(targetElement){
                const offset=-85;
                const elementPosition=targetElement.getBoundingClientRect().top;
                const offsetPosition=elementPosition+window.scrollY;
                window.scrollTo({
                    top:offsetPosition,
                    behavior:"smooth"
                })
             }
             setIsMobileMenuOpen(false)
    }
  return (
    <div >
     <nav className='fixed left-9 right-0 top-4 z-50 '>
        {/* DesktopMenu */}
        <div className='mx-auto hidden max-w-2xl items-center justify-center rounded-lg border border-stone-50/30 py-3 bg-black/20 backdrop-blur-lg lg:flex'>
      <div className='flex justify-between items-center gap-6'>
      <div>
        <a href='#'>
            <img src={mylogo} width={150} height={130} className='h-[70px]'  alt="mylogo"></img>
        </a>
      </div>
      <div>
        <ul className='flex items-center gap-4'>
            {/* {NAVIGATIONLINK} */}
            {NAVIGATION_LINKS.map((item,index)=>{
                return (<li key={index}><a className='text-md hover:text-yellow-400 ' href={item.href} onClick={(e)=>handleLinkClick(e,item.href)}>
    {item.label}
                </a></li>)
            })}
        </ul>
      </div>
        
      </div>
        </div>
        {/* mobilemenu */}
        <div className='rounded-lg backdrop-blur-md lg:hidden'>
            <div className='flex items-center justify-between'>
                <div>
                    <a href="#">
                        <img src={mylogo} alt="mylogo" width={90} className='m-2'></img>
                    </a>
                </div>
                <div className='flex items-center '>
                    <button className='focus:outline-none lg:hidden' onClick={toggleMenu}>
                        {isMobileMenuOpen?(<FaTimes className='m-2 h-6 w-5'></FaTimes>):(<FaBars className='h-6 w-5 m-2'/>)}
                    </button>
                </div>
            </div>
            {isMobileMenuOpen&& (<ul className='ml-4 mt-4 flex flex-col gap-4 backdrop-blur-md'>
                {NAVIGATION_LINKS.map((item,index)=>{ 
                    return (<li key={index}><a href={item.href} className='block w-full text-lg ' onClick={(e)=>handleLinkClick(e,item.href)}>{item.label}</a></li>)
                })}
            </ul>)}
        </div>
     </nav>
    </div>
  )
}

export default Navbar
