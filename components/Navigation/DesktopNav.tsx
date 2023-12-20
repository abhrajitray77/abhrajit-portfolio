import React from 'react'

const DesktopNav = () => {
  return (
    <nav className='border-[1px] border-neutral-900 py-4 px-10'>
        <ul className='flex justify-between space-x-10 uppercase'>
           <li>
                About Me
            </li> 
            <li>
                Projects
            </li>
            <li>
                Blog
            </li>
            <li>
                Contact
            </li>
        </ul>
    </nav>
  )
}

export default DesktopNav