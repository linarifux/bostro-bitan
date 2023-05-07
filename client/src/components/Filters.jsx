import React from 'react'
import {IoIosArrowDown} from 'react-icons/io'
import {BsFilter} from 'react-icons/bs'
import './filters.css'

const Filters = () => {
  return (
    <>
        <div className="filters container d-flex justify-content-between">
          <div className="left-section">
            <ul className='d-flex gap-5 list-unstyled'>
              <li className="filter-bg p-1 px-2 rounded-pill">Headphone Type <IoIosArrowDown /></li>
              <li className="filter-bg p-1 px-2 rounded-pill">Price <IoIosArrowDown /></li>
              <li className="filter-bg p-1 px-2 rounded-pill">Review <IoIosArrowDown /></li>
              <li className="filter-bg p-1 px-2 rounded-pill">Color <IoIosArrowDown /></li>
              <li className="filter-bg p-1 px-2 rounded-pill">Material <IoIosArrowDown /></li>
              <li className="filter-bg p-1 px-2 rounded-pill">Offer <IoIosArrowDown /></li>
              <li className="filter-bg p-1 px-2 rounded-pill">All Filters <BsFilter /></li>
            </ul>
        </div>
        <div className="right-section">
          <p>Sort by <IoIosArrowDown /> </p>
        </div>
        </div>
    </>
  )
}

export default Filters