import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  return (
    <div className='nav-bar'>
      <NavLink className='short-havens-title' exact to="/">Short Havens</NavLink>
        <div className='profile-options-container'>
          <ul className='profile-nav'>
            <li>
              <NavLink exact to="/">Home</NavLink>
            </li>
            {isLoaded && (
              <li>
                <ProfileButton user={sessionUser} />
              </li>
            )}
          </ul>
          </div>
    </div>
  );
}

export default Navigation;
