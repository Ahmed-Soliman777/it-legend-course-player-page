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
    <header className='header-container page-container'>
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

      <h1>Starting SEO as your Home</h1>
    </header>
  )
}

export default Header
