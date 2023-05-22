import React, { useState } from 'react'
import '../../style/addFriendsList.css'

const AddFriendsList = () => {
  const data = [
    {
      id: 1,
      logo: 'assest/avatar/photo-men.jpg',
      friendName: 'Suriya Carles',
      yearsAgo: '2 years ago',
    },
    {
      id: 2,
      logo: 'assest/avatar/photo-men.jpg',
      friendName: 'Ajith Carles',
      yearsAgo: '2 years ago',
    },
    {
      id: 3,
      logo: 'assest/avatar/photo-men.jpg',
      friendName: 'Vijay Carles',
      yearsAgo: '2 years ago',
    },
  ]
  return (
    <div className="card-friend mt-4 mb-5">
      <div className="friend-head"> Friends</div>
      <hr className="divider-friend" />
      {data.map((item) => (
        <div className="row ml-1 mr-1 mb-5">
          <div className="image-container">
            <img src={item.logo} alt="Logo" className="logo-image" />
          </div>
          <div className="friend-profile-name">
            <h6 className="h6-font-size">{item.friendName}</h6>
            <div className="year-font-size">{item.yearsAgo}</div>
          </div>
          <div className="follow-btn-center">
            <button className="friend-follow-button">Follow</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default AddFriendsList
