import Feeds from "./module/feed"
import AddPost from "./module/feed/addPost"
import AddFriendsList from "./module/friends/addFriendsList"
import AboutUser from "./module/user/aboutUser"
import CoverPage from "./module/user/coverpage"
import UserProfile from "./module/user/userProfile"
import { connect } from "react-redux"
import { fetchUserById } from "./store/action/userAction"
import { useEffect } from "react"

const Home = (props) => {
  const { user, fetchUserById } = props
  useEffect(() => {
    let val = localStorage.getItem("userId")
    fetchUserById(val ? parseInt(val) : 1)
  }, [])
  return (
    <div className='container'>
      <div className='home-page'>
        <div className='row'>
          <div className='col-md-4 col-sm-6'>
            <UserProfile />
            <AboutUser />
          </div>
          <div className='col-md-8 col-sm-6'>
            <CoverPage />
            <div className='row'>
              <div className='col-md-7 col-sm-4'>
                <AddPost />
                <Feeds />
              </div>
              <div className='col-md-5 col-sm-4'>
                <AddFriendsList />
              </div>
            </div>
          </div>
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
    fetchUserById: (id) => dispatch(fetchUserById(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
