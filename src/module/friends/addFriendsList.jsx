import React, { useEffect, useState } from "react"
import "../../style/addFriendsList.css"
import { connect } from "react-redux"
import {
  fetchUserById,
  setUserDetails,
  fetchAllUser,
} from "../../store/action/userAction"
import AddUser from "../user/addUser"
import { toast } from "react-toastify"

const AddFriendsList = (props) => {
  const { fetchAllUser, allUser, fetchUserById } = props
  const [open, setOpen] = useState(false)

  useEffect(() => {
    fetchAllUser()
  }, [])

  const logInto = async (vl) => {
    try {
      localStorage.setItem("userId", vl?.id)
      fetchUserById(vl?.id)
    } catch (e) {
      console.log(e)
      toast.error("some error occured")
    }
  }

  return (
    <div className='card-friend mt-4 mb-5'>
      <div className='friend-head'> Friends</div>
      <hr className='divider-friend' />
      {allUser.map((item) => (
        <div className='row ml-1 mr-1 mb-5'>
          <div className='image-container'>
            <img
              src={item.logo ?? "assest/avatar/photo-men.jpg"}
              alt='Logo'
              className='logo-image'
            />
          </div>
          <div className='friend-profile-name'>
            <h6 className='h6-font-size'>{item.name}</h6>
            <div className='year-font-size'>{item.role}</div>
          </div>
          <div className='follow-btn-center'>
            <button
              className='friend-follow-button'
              onClick={() => logInto(item)}
            >
              Log As
            </button>
          </div>
        </div>
      ))}
      <div className='d-flex justify-content-center'>
        <button className='btn btn-primary' onClick={() => setOpen(true)}>
          + Add Users
        </button>
      </div>
      <AddUser open={open} setOpen={setOpen} />
    </div>
  )
}

const mapStateToProps = (state) => ({
  user: state.user.userDetails,
  allUser: state.user.allUser,
})

const mapDispatchToProps = (dispatch) => {
  return {
    setUserDetails: (data) => dispatch(setUserDetails(data)),
    fetchUserById: (id) => dispatch(fetchUserById(id)),
    fetchAllUser: () => dispatch(fetchAllUser()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddFriendsList)
