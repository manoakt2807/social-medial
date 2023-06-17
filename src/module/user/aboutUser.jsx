import React from "react"
import "../../style/aboutUser.css"
import {
  MdOutlineMailOutline,
  MdOutlineCall,
  MdOutlineLanguage,
} from "react-icons/md"
import { connect } from "react-redux"
const AboutUser = (props) => {
  const { user } = props
  return (
    <div className='card-bio mt-4'>
      <span className='bio-title mb-1'> User Bio</span>
      <span className='bio-des'>{user?.bio}</span>
      <hr className='divider-bio' />
      <span className='bio-title mb-1'>CONTANCT INFO</span>
      <div>
        <MdOutlineMailOutline className='mr-1 bio-icons' color='#646871' />
        <span className='bio-des'>{user?.email}</span>
      </div>
      <div>
        <MdOutlineCall className='mr-1 bio-icons' color='#646871' />
        <span className='bio-des'>{user?.mobile}</span>
      </div>
      <div>
        <MdOutlineLanguage className='mr-1 bio-icons' color='#646871' />
        <span className='bio-des'>www.example.com</span>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  user: state.user.userDetails,
})

export default connect(mapStateToProps)(AboutUser)
