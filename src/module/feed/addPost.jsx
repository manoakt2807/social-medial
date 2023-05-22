import React, { useState } from 'react'
import '../../style/addPost.css'
import { MdOutlineImage, MdMoreHoriz } from 'react-icons/md'
const AddPost = () => {
  const [selectedFile, setSelectedFile] = useState(null)
  const handleFileChange = (event) => {
    const file = event.target.files[0]
    setSelectedFile(file)
  }

  const handleAttachFile = () => {
    if (selectedFile) {
      console.log('Attached file:', selectedFile)
    }
  }
  return (
    <div className="card-post mt-4">
      <div className="post-head"> Post Something</div>
      <hr className="divider-post" />
      <div className="row ml-1 mr-1">
        <div className="image-container">
          <img
            src="assest/avatar/alpha-men.jpg"
            alt="Logo"
            className="logo-image"
          />
        </div>
        <div className="text-container">
          <textarea
            className="text-area"
            placeholder="Write something..."
          ></textarea>
        </div>
      </div>
      <hr className="divider-post" />
      <div className="row ml-1">
        <div className="attachment-container">
          <label htmlFor="file-input" className="attachment-button">
            <MdOutlineImage className="photo-icons mr-1" color="#0e8596" />
            Photo/Video
            <input
              id="file-input"
              type="file"
              accept="image/*,video/*"
              style={{ display: 'none' }}
              onChange={handleFileChange}
            />
          </label>
          <label className="attachment-button ml-3">
            <MdMoreHoriz className="more-horiz-icon" />
          </label>
        </div>
      </div>
      {selectedFile && <span className="file-name">{selectedFile.name}</span>}
    </div>
  )
}

export default AddPost
