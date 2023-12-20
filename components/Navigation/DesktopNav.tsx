import React from 'react'

const DesktopNav = () => {
  return (
    <nav className='border-[1px] border-neutral-900 bg-neutral-100 py-4 px-10 lg:px-20'>
        <ul className='flex justify-between space-x-10 uppercase'>
           <li className="nav-item">
                About Me
            </li> 
            <li className="nav-item">
                Projects
            </li>
            <li className="nav-item">
                Blog
            </li>
            <li className="nav-item">
                Contact
            </li>
        </ul>
    </nav>
  )
}

export default DesktopNav