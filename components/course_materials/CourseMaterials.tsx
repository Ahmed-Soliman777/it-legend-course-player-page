/**
 * @title course materials comonent
 * @description this component shows course info
 * @props [duration - lessons - enrolled - language]
 */


import './CourseMaterials.css'

import { FaRegClock, FaGlobeAfrica } from "react-icons/fa";

import { ImBooks } from "react-icons/im";

import { PiStudentFill } from "react-icons/pi";



const CourseMaterials = () => {
  return (
    <div className="container">
      <h1>Course Materials</h1>
      <ul className="course-material-list">
        <li className='course-item'>
          <h3>
            <FaRegClock />&nbsp;
            Duration:
          </h3>
          <span>
            8 weeks
          </span>
        </li>
        <li className='course-item'>
          <h3>
            <ImBooks />&nbsp;
            Lessons:
          </h3>
          <span>
            8
          </span>
        </li>
        <li className='course-item'>
          <h3>
            <PiStudentFill />&nbsp;
            Enrolled:
          </h3>
          <span>
            65 Students
          </span>
        </li>
        <li className='course-item'>
          <h3>
            <FaGlobeAfrica />&nbsp;
            Language
          </h3>
          <span>
            English
          </span>
        </li>
      </ul>
    </div>
  )
}

export default CourseMaterials
