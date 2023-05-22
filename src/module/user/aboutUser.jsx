import React from 'react'
import '../../style/aboutUser.css'
import {
  MdOutlineMailOutline,
  MdOutlineCall,
  MdOutlineLanguage,
} from 'react-icons/md'
const AboutUser = () => {
  return (
    <div className="card-bio mt-4">
      <span className="bio-title mb-1"> User Bio</span>
      <span className="bio-des">
        Nam males dolor tellus pertium amet was headrerit facilties id vitae
        enim sad omare there suspendisse sed orci neque ac sed aliquet rius
        fauibus in pretium molesite nisl tempur quis odio habitant
      </span>
      <hr className="divider-bio" />
      <span className="bio-title mb-1">CONTANCT INFO</span>
      <div>
        <MdOutlineMailOutline className="mr-1 bio-icons" color="#646871" />
        <span className="bio-des">Clayton@example.com</span>
      </div>
      <div>
        <MdOutlineCall className="mr-1 bio-icons" color="#646871" />
        <span className="bio-des">+44 (0161) 347 8854</span>
      </div>
      <div>
        <MdOutlineLanguage className="mr-1 bio-icons" color="#646871" />
        <span className="bio-des">www.example.com</span>
      </div>
    </div>
  )
}

export default AboutUser
