import { Menu, X } from 'lucide-react';
import React, { useState } from 'react';
const navigationData = [
    {
      id: 1,
      name: "Home",
      path: "/"
    },
    {
      id: 2,
      name: "About",
      path: "/about"
    },
    {
      id: 3,
      name: "Services",
      path: "/services"
    },
    {
      id: 4,
      name: "Blog",
      path: "/blog"
    },
    {
      id: 5,
      name: "Contact",
      path: "/contact"
    }
  ];
  
  
const Navbar = () => {

    const [open,setOpen]=useState(false);

    const links=navigationData.map(route=><li className='mr-10'><a href={route.path}>{route.name}</a></li>)

    
    return (
        <div className=''>
            <nav className='flex justify-between py-5 items-center'>
                <div className='flex' onClick={()=>{
                     setOpen(!open)
                }}>
                    {
                    open?
                    <X className='md:hidden'></X>: <Menu className='md:hidden'></Menu>
                    }
                    <ul className={`md:hidden absolute duration-1000 ${open ? 'top-12': '-top-40'}`}>
                        {links}
                    </ul>
                
                <h3 className='font-bold'>Chefs Table</h3>
                </div>
                <ul className='md:flex hidden'>
                       
                        {links}
                    
                </ul>
                <button className='btn hover:bg-white bg-green-400 rounded-full px-8'>Sign In</button>
            </nav>
            
        </div>
    );
};

export default Navbar;