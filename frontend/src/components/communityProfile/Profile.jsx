import React from 'react'
import './Profile.css';

const Profile = () => {
  return (
    <div className='profile-main'>
      <div className='profile-sub'>
        <div className='profile-image'>
          <img src="https://i.pravatar.cc/23" alt="Profile Image" />
        </div>
        <div className='profile-descrip'>
          <div className=''>
            <h1 className='profile-name' >Robin Hood Community</h1>
          </div>
          {/* <br /> */}
          <div className=''>
            <p className='profile-info' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ut animi dolor commodi, culpa fuga amet obcaecati neque ducimus eligendi laboriosam deleniti cupiditate, consequatur reiciendis a voluptate nostrum pariatur. Rem?</p>
          </div>
          {/* <br /> */}
          <div className='profile-loc'>
            <label>Latitude:&nbsp;<span>&nbsp;23.5</span></label>
            &nbsp;
            <label>Longitude:&nbsp;<span>&nbsp;45.5</span></label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
