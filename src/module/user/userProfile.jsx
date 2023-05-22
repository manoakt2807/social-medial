import React from 'react'
import '../../style/userProfile.css'
import { MdOutlineMailOutline, MdOutlinePeopleAlt } from 'react-icons/md'
const UserProfile = () => {
  return (
    <div className="card">
      <div className="logo-container">
        <img
          src="assest/avatar/alpha-men.jpg"
          alt="Profile"
          className="profile-image"
        />
      </div>
      <span className="logo-name">Duran Clyton</span>
      <span className="logo-name-des">UI/UX Design</span>
      <div className="button-container mt-4">
        <button className="message-button">
          <MdOutlineMailOutline
            className="mr-1 msg-follow-img"
            color="#939292"
          />
          <span className="msg-follow-font">Message</span>
        </button>
        <button className="following-button">
          <MdOutlinePeopleAlt className="mr-1 msg-follow-img" color="#939292" />
          <span className="msg-follow-font"> Following</span>
        </button>
      </div>
      <hr className="divider" />
      <div className="row">
        <div className="col count-item">
          <span className="count-number">$72,786</span> <br />
          <span className="count-name">Total Revenue</span>
        </div>
        <div className="col count-item">
          <span className="count-number">32,407</span> <br />
          <span className="count-name">Orders</span>
        </div>
        <div className="col count-item">
          <span className="count-number">786</span> <br />
          <span className="count-name">Products</span>
        </div>
      </div>
    </div>
  )
}

export default UserProfile
