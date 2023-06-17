import React from "react"
import "../../style/userProfile.css"
import { MdOutlineMailOutline, MdOutlinePeopleAlt } from "react-icons/md"
import { connect } from "react-redux"
const UserProfile = (props) => {
  const { user } = props
  return (
    <div className='card'>
      <div className='logo-container'>
        <img
          src={user?.logo ?? "assest/avatar/alpha-men.jpg"}
          alt='Profile'
          className='profile-image'
        />
      </div>
      <span className='logo-name'>{user?.name}</span>
      <span className='logo-name-des'>{user?.role}</span>
    </div>
  )
}

const mapStateToProps = (state) => ({
  user: state.user.userDetails,
})

export default connect(mapStateToProps)(UserProfile)
