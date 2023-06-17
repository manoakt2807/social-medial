import React, { useEffect, useState } from "react"
import "../../style/addPost.css"
import { MdOutlineImage, MdMoreHoriz } from "react-icons/md"
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap"
import { postImage } from "../../constant"
import { connect } from "react-redux"
import { feedPost } from "../../store/action/postAction"
import { toast } from "react-toastify"
import { getAllPost } from "../../store/action/postAction"
const AddPost = (props) => {
  const { user, feedPost, getAllPost } = props
  const [state, setState] = useState({
    img: undefined,
    post: undefined,
    imgName: undefined,
    userId: user?.id,
  })
  const [validate, setValidate] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  useEffect(() => {
    setState({ ...state, userId: user?.id })
  }, [user])

  const addPost = async () => {
    try {
      if (!state?.post?.length) {
        setValidate(true)
        return
      }
      console.log("chec", state)
      debugger
      const res = await feedPost(state)
      console.log("pdad", res)
      res?.id &&
        setState({
          img: "",
          post: "",
          imgName: "",
          userId: user?.id,
        })
      getAllPost()
    } catch (e) {
      console.log(e)
      toast.error("some error occured")
    }
  }

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen)
  }

  return (
    <div className='card-post mt-4'>
      <div className='post-head'> Post Something</div>
      <hr className='divider-post' />
      <div className='row ml-1 mr-1'>
        <div className='image-container'>
          <img
            src={user?.logo ?? "assest/avatar/alpha-men.jpg"}
            alt='Logo'
            className='logo-image'
          />
        </div>
        <div className='text-container'>
          <textarea
            className='text-area'
            value={state?.post}
            placeholder='Write something...'
            onChange={(e) => setState({ ...state, post: e.target.value })}
          ></textarea>
          {validate && !state?.post?.length && (
            <p className='error-feild'> This field is Mandatory </p>
          )}
        </div>
      </div>
      <hr className='divider-post' />
      <div className='row ml-1'>
        <div className='attachment-container col-md-6'>
          {/* <label htmlFor="file-input" className="attachment-button">
            <MdOutlineImage className="photo-icons mr-1" color="#0e8596" />
            Photo/Video
            <input
              id="file-input"
              type="file"
              accept="image/*,video/*"
              style={{ display: 'none' }}
              onChange={handleFileChange}
            />
          </label> */}
          <Dropdown
            isOpen={dropdownOpen}
            toggle={toggleDropdown}
            className='toggle-attachment-button'
          >
            <DropdownToggle caret className='custom-dropdown-toggle'>
              <MdOutlineImage className='photo-icons mr-1' color='#0e8596' />
              Photo/Video
            </DropdownToggle>
            <DropdownMenu className='dropdown-menu-item'>
              {postImage.map((option) => (
                <DropdownItem
                  key={option.id}
                  onClick={() =>
                    setState({
                      ...state,
                      img: option.path,
                      imgName: option.label,
                    })
                  }
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
        </div>
        <div className='col-md-4'>
          {" "}
          {state?.imgName && (
            <span className='file-name'>{state?.imgName}</span>
          )}{" "}
        </div>
        <div className='d-flex justify-content-end'>
          {" "}
          <button className='btn btn-primary' onClick={addPost}>
            Post
          </button>{" "}
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  user: state.user.userDetails,
})

const mapDispatchToProps = (dispatch) => {
  return {
    feedPost: (dt) => dispatch(feedPost(dt)),
    getAllPost: () => dispatch(getAllPost()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPost)
