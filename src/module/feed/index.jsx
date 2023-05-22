import React, { useState } from 'react'
import '../../style/feeds.css'
import {
  MdOutlineThumbUp,
  MdChatBubbleOutline,
  MdOutlineShare,
  MdMoreHoriz,
} from 'react-icons/md'
import { AiOutlineSend } from 'react-icons/ai'
const Feeds = () => {
  return (
    <div className="card-post mt-4 mb-5">
      <div className="row ml-1 mr-1">
        <div className="image-container">
          <img
            src="assest/avatar/alpha-men.jpg"
            alt="Logo"
            className="logo-image"
          />
        </div>
        <div className="profile-name">
          <h6 className="h6-font-size">Meyri Carles</h6>
          <div className="year-font-size">2 years ago</div>
        </div>
        <div>
          <MdMoreHoriz className="more-horiz-icon" />
        </div>
      </div>
      <hr className="divider-comment" />
      <div>
        <img src="assest/banner/quotes.jpg" className="image-view" />
      </div>

      <span className="comment-des mt-1">
        Nam males dolor tellus pertium amet was headrerit facilties id vitae
        enim sad omare there suspendisse sed
      </span>
      <hr className="divider-comment" />

      <div className="row ml-1">
        <div className="comment-attachment-container">
          <div className="comment-icons-size">
            <MdOutlineThumbUp className="comment-icons mr-1" />
            <span>4</span>
          </div>
          <div className="ml-3 comment-icons-size">
            <MdChatBubbleOutline className=" mr-1" />
            <span>2</span>
          </div>
          <div className="ml-3 comment-icons-size">
            <MdOutlineShare className="comment-icons mr-1" />
            <span>Share</span>
          </div>
        </div>
      </div>
      <hr className="divider-comment" />
      <div className="row ml-1 mr-1">
        <div className="image-container">
          <img
            src="assest/avatar/alpha-men.jpg"
            alt="Logo"
            className="logo-image"
          />
        </div>
        <div className="input-container">
          <input
            type="text"
            className="input-area"
            placeholder="Write something..."
          ></input>
        </div>
        <div className="button-container">
          <button className="circle-button">
            <AiOutlineSend />
          </button>
        </div>
      </div>
      <hr className="divider-comment" />
      <div className="col ml-1 mr-1">
        <div className="row">
          <div className="image-container">
            <img
              src="assest/avatar/alpha-men.jpg"
              alt="Logo"
              className="logo-image"
            />
          </div>
          <div className="profile-name">
            <h6 className="h6-font-size">Meyri Carles</h6>
            <div className="year-font-size">
              If the dolor tellus pertium amet was headrerit facilties id vitae
              enim sad omare there suspendisse
            </div>
            <div className="row ml-1 mt-3">
              <div className="comment-attachment-container">
                <div className="comment-text-size">
                  <span>Like</span>
                </div>
                <div className="ml-3 comment-text-size">
                  <span>Reply</span>
                </div>
                <div className="ml-3 comment-icons-size">
                  <span>2 years ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col ml-5 mr-1 mt-3">
        <div className="row">
          <div className="image-container">
            <img
              src="assest/avatar/alpha-men.jpg"
              alt="Logo"
              className="logo-image"
            />
          </div>
          <div className="profile-name">
            <div className=" reply-msg">Hello Alex</div>
            <div className="row ml-1 mt-3">
              <div className="comment-attachment-container">
                <div className="comment-text-size">
                  <span>Like</span>
                </div>
                <div className="ml-3 comment-text-size">
                  <span>Reply</span>
                </div>
                <div className="ml-3 comment-icons-size">
                  <span>2 years ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Feeds
