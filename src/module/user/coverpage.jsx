import React from 'react'
import '../../style/coverPage.css'
import { MdOutlineCameraAlt } from 'react-icons/md'
const CoverPage = () => {
  return (
    <div className="right-banner">
      <div className="card-banner">
        <img src="assest/banner/quotes.jpg" alt="Banner" className="banner" />
        <button className="button mt-3">
          <MdOutlineCameraAlt className="mr-1" />
          Change Cover
        </button>
      </div>
    </div>
  )
}

export default CoverPage
