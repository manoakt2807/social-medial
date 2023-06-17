import React, { useState } from "react"
import { Modal } from "react-bootstrap"
import { X } from "react-feather"
import { Button, Form, FormGroup, Input, Label } from "reactstrap"
import Select from "react-select"
import { connect } from "react-redux"
import {
  fetchAllUser,
  fetchUserById,
  setUserDetails,
} from "../../store/action/userAction"
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap"
import { MdOutlineImage, MdMoreHoriz } from "react-icons/md"
import { avatarImage, roleOptions } from "../../constant"

const ModalUser = (props) => {
  const { open, setOpen, setUserDetails, fetchAllUser } = props
  const [state, setState] = useState({
    name: undefined,
    role: undefined,
    email: undefined,
    password: undefined,
    mobile: undefined,
    address: undefined,
    pincode: undefined,
    bio: undefined,
    logo: "assest/avatar/photo-men.jpg",
  })
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [validate, setValidate] = useState(false)
  const handleSubmit = async (e) => {
    if (
      !state?.name?.length &&
      !state?.role?.length &&
      !state?.email?.length &&
      !state?.password?.length &&
      !state?.mobile?.length &&
      !state?.address?.length &&
      !state?.pincode?.length &&
      !state?.bio?.length
    ) {
      setValidate(true)
      return
    }
    const res = await setUserDetails(state)
    res?.id && fetchAllUser()
    setState({
      name: undefined,
      role: undefined,
      email: undefined,
      password: undefined,
      mobile: undefined,
      address: undefined,
      pincode: undefined,
      bio: undefined,
      logo: "assest/avatar/photo-men.jpg",
    })
    setOpen(false)
  }

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen)
  }

  return (
    <Modal size='lg' show={open}>
      <Modal.Header>
        <h3>Add User</h3>
        <span color='secondary' outline onClick={() => setOpen(false)}>
          <X />
        </span>
      </Modal.Header>
      <Modal.Body>
        <div className='col-md-12'>
          <FormGroup className='form-row'>
            <Label for='name' className='col-sm-2 col-form-label'>
              Name:
            </Label>
            <div className='col-sm-10'>
              <Input
                type='text'
                id='name'
                value={state?.name}
                onChange={(e) => setState({ ...state, name: e.target.value })}
              />
              {validate && !state?.name?.length && (
                <p className='error-feild'> This field is Mandatory </p>
              )}
            </div>
          </FormGroup>
          <FormGroup className='form-row'>
            <Label for='role' className='col-sm-2 col-form-label'>
              Role:
            </Label>
            <div className='col-sm-10'>
              <Select
                id='role'
                value={
                  state?.role
                    ? { label: state?.role, value: state?.role }
                    : null
                }
                onChange={(val) => setState({ ...state, role: val.value })}
                options={roleOptions}
              />

              {validate && !state?.role?.length && (
                <p className='error-feild'> This field is Mandatory </p>
              )}
            </div>
          </FormGroup>
          <FormGroup className='form-row'>
            <Label for='email' className='col-sm-2 col-form-label'>
              Email:
            </Label>
            <div className='col-sm-10'>
              <Input
                type='email'
                id='email'
                value={state?.email}
                onChange={(e) => setState({ ...state, email: e.target.value })}
              />
              {validate && !state?.email?.length && (
                <p className='error-feild'> This field is Mandatory </p>
              )}
            </div>
          </FormGroup>
          <FormGroup className='form-row'>
            <Label for='password' className='col-sm-2 col-form-label'>
              Password:
            </Label>
            <div className='col-sm-10'>
              <Input
                type='password'
                id='password'
                value={state?.password}
                onChange={(e) =>
                  setState({ ...state, password: e.target.value })
                }
              />
              {validate && !state?.password?.length && (
                <p className='error-feild'> This field is Mandatory </p>
              )}
            </div>
          </FormGroup>
          <FormGroup className='form-row'>
            <Label for='mobile' className='col-sm-2 col-form-label'>
              Mobile:
            </Label>
            <div className='col-sm-10'>
              <Input
                type='number'
                id='mobile'
                value={state?.mobile}
                onChange={(e) => setState({ ...state, mobile: e.target.value })}
              />
              {validate && !state?.mobile?.length && (
                <p className='error-feild'> This field is Mandatory </p>
              )}
            </div>
          </FormGroup>
          <FormGroup className='form-row'>
            <Label for='address' className='col-sm-2 col-form-label'>
              Address:
            </Label>
            <div className='col-sm-10'>
              <Input
                type='textarea'
                id='address'
                value={state?.address}
                onChange={(e) =>
                  setState({ ...state, address: e.target.value })
                }
              />

              {validate && !state?.address?.length && (
                <p className='error-feild'> This field is Mandatory </p>
              )}
            </div>
          </FormGroup>
          <FormGroup className='form-row'>
            <Label for='address' className='col-sm-2 col-form-label'>
              Bio:
            </Label>
            <div className='col-sm-10'>
              <Input
                type='textarea'
                id='address'
                value={state?.bio}
                onChange={(e) => setState({ ...state, bio: e.target.value })}
              />

              {validate && !state?.bio?.length && (
                <p className='error-feild'> This field is Mandatory </p>
              )}
            </div>
          </FormGroup>
          <FormGroup className='form-row'>
            <Label for='pincode' className='col-sm-2 col-form-label'>
              Pincode:
            </Label>
            <div className='col-sm-10'>
              <Input
                type='number'
                id='pincode'
                value={state?.pincode}
                onChange={(e) =>
                  setState({ ...state, pincode: e.target.value })
                }
              />

              {validate && !state?.pincode?.length && (
                <p className='error-feild'> This field is Mandatory </p>
              )}
            </div>
          </FormGroup>
          <FormGroup className='form-row'>
            <Label for='address' className='col-sm-2 col-form-label'>
              Logo:
            </Label>
            <div className='col-sm-10'>
              <Dropdown
                isOpen={dropdownOpen}
                toggle={toggleDropdown}
                className='toggle-attachment-button'
              >
                <DropdownToggle caret className='custom-dropdown-toggle'>
                  <MdOutlineImage
                    className='photo-icons mr-1'
                    color='#0e8596'
                  />
                  Photo
                </DropdownToggle>
                <DropdownMenu className='dropdown-menu-item'>
                  {avatarImage.map((option) => (
                    <DropdownItem
                      key={option.id}
                      onClick={() => setState({ ...state, logo: option.path })}
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
          </FormGroup>
          <div className='float-right'>
            <Button
              color='primary'
              className='mr-2'
              type='submit'
              onClick={handleSubmit}
            >
              Submit
            </Button>
            <Button
              color='primary'
              type='submit'
              onClick={() => setOpen(false)}
            >
              Close
            </Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  )
}
const mapStateToProps = (state) => ({
  user: state.user.userDetails,
})

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserById: (id) => dispatch(fetchUserById(id)),
    setUserDetails: (val) => dispatch(setUserDetails(val)),
    fetchAllUser: () => dispatch(fetchAllUser()),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ModalUser)
