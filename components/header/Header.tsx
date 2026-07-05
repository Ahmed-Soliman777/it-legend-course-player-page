/**
 * @component Header
 * @description Player page component for displaying current page for users
 * @styleFile header.css
 * 
 */

import '../header/Header.css'

import { FaChevronRight } from "react-icons/fa";


const Header = () => {
  return (
    <header className='header-container'>
      <ul className='page-list'>
        <li>home</li>
        <FaChevronRight 
          color='#515151'
          size={12}
        />
        <li>courses</li>
        <FaChevronRight 
          color='#515151'
          size={12}
        />
        <li>course details</li>
      </ul>
    </header>
  )
}

export default Header
