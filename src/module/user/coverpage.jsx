import React, { useEffect, useState } from "react"
import "../../style/coverPage.css"
import { MdOutlineCameraAlt } from "react-icons/md"
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap"
import { postImage } from "../../constant"
import { connect } from "react-redux"
import { updateUserInfo } from "../../store/action/userAction"
import { getAllPost } from "../../store/action/postAction"
import { toast } from "react-toastify"
const CoverPage = (props) => {
  const { user, updateUserInfo, getAllPost } = props
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen)
  }

  const onCOverHandler = (vl) => {
    try {
      console.log("akka", vl)
      updateUserInfo(user?.id, { coverImg: vl?.path })
      getAllPost()
    } catch (e) {
      console.log(e)
      toast.error("some error occured")
    }
  }

  return (
    <div className='right-banner'>
      <div className='card-banner'>
        <img
          src={user?.coverImg ?? "assest/banner/quotes.jpg"}
          alt='Banner'
          className='banner'
        />
        <button className='button mt-3'>
          {/* <MdOutlineCameraAlt className="mr-1" />
          Change Cover */}
          <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
            <DropdownToggle caret className='custom-dropdown-toggle'>
              <MdOutlineCameraAlt className='mr-1' />
              Change Cover
            </DropdownToggle>
            <DropdownMenu className='dropdown-menu-item'>
              {postImage.map((option) => (
                <DropdownItem
                  key={option.id}
                  onClick={() => onCOverHandler(option)}
                >
                  <img
                    src={option.path}
                    alt={option.label}
                    className='dropdown-image mr-2'
                  />
                  {option.label}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
        </button>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  user: state.user.userDetails,
})

const mapDispatchToProps = (dispatch) => {
  return {
    updateUserInfo: (id, data) => dispatch(updateUserInfo(id, data)),
    getAllPost: () => dispatch(getAllPost()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CoverPage)
