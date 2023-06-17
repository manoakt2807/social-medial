import React, { useEffect, useState } from "react"
import "../../style/feeds.css"
import {
  MdOutlineThumbUp,
  MdChatBubbleOutline,
  MdOutlineShare,
  MdMoreHoriz,
} from "react-icons/md"
import { AiOutlineSend } from "react-icons/ai"
import { connect } from "react-redux"
import { fetchUserById } from "../../store/action/userAction"
import { getAllPost, updateComment } from "../../store/action/postAction"
const Feeds = (props) => {
  const { user, post, getAllPost, updateComment, allUser } = props
  const [replay, setReplay] = useState()
  const [validate, setValidate] = useState(false)
  useEffect(() => {
    getAllPost()
  }, [getAllPost])

  const handleComments = async (vl) => {
    try {
      if (!replay?.length) {
        setValidate(true)
        return
      }
      let array = vl?.replaysComments?.length ? [...vl?.replaysComments] : []
      array.push({ user: user?.id, replays: replay })
      await updateComment(vl?.id, { replaysComments: array })
      setReplay("")
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <>
      {post?.map((dt) => (
        <div className='card-post mt-4 mb-5'>
          <div className='row ml-1 mr-1'>
            <div className='image-container'>
              <img
                src={
                  allUser?.find((pt) => pt?.id == dt?.userId)?.logo ??
                  "assest/avatar/alpha-men.jpg"
                }
                alt='Logo'
                className='logo-image'
              />
            </div>
            <div className='profile-name'>
              <h6 className='h6-font-size'>
                {allUser?.find((pt) => pt?.id == dt?.userId)?.name}
              </h6>
              <div className='year-font-size'>
                {allUser?.find((pt) => pt?.id == dt?.userId)?.role}
              </div>
            </div>
            <div>
              <MdMoreHoriz className='more-horiz-icon' />
            </div>
          </div>
          <hr className='divider-comment' />
          {dt?.img && (
            <div>
              <img src={dt?.img} className='image-view' />
            </div>
          )}
          <span className='comment-des mt-1'>{dt?.post}</span>
          <hr className='divider-comment' />
          <div className='row ml-1 mr-1'>
            <div className='image-container'>
              <img
                src={user?.logo ?? "assest/avatar/alpha-men.jpg"}
                alt='Logo'
                className='logo-image'
              />
            </div>
            <div className='input-container'>
              <input
                type='text'
                className='input-area'
                value={replay}
                onChange={(e) => setReplay(e.target.value)}
                placeholder='Write something...'
              ></input>
              {validate && !replay?.length && (
                <p className='error-feild'> This field is Mandatory </p>
              )}
            </div>
            <div className='button-container'>
              <button
                className='circle-button'
                onClick={() => handleComments(dt)}
              >
                <AiOutlineSend />
              </button>
            </div>
          </div>
          <hr className='divider-comment' />
          <div className='col ml-1 mr-1'>
            {dt?.replaysComments?.length &&
              dt?.replaysComments?.map((vl) => (
                <div className='row'>
                  <div className='image-container'>
                    <img
                      src={
                        allUser?.find((pt) => pt?.id == vl?.user)?.logo ??
                        "assest/avatar/alpha-men.jpg"
                      }
                      alt='Logo'
                      className='logo-image'
                    />
                  </div>
                  <div className='profile-name'>
                    <h6 className='h6-font-size'>
                      {allUser?.find((pt) => pt?.id == vl?.user)?.name}
                    </h6>
                    <div className='year-font-size'>{vl?.replays}</div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      ))}
    </>
  )
}
const mapStateToProps = (state) => ({
  user: state.user.userDetails,
  post: state.post.allFeed,
  allUser: state.user.allUser,
})

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserById: (id) => dispatch(fetchUserById(id)),
    getAllPost: () => dispatch(getAllPost()),
    updateComment: (id, val) => dispatch(updateComment(id, val)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Feeds)
