import React from 'react';
import PropTypes from 'prop-types';

const Header = props => {
  const { branding, text } = props;
  return (
    <div>
      {/*
       */}
      <nav className='navbar navbar-expand-sm navbar-dark bg-primary mb-3 py-0'>
        <div className='container'>
          <a href='/' className='navbar-brand'>
            <h1>{branding}</h1>
          </a>
          <div>
            <ul className='navbar-nav mr-auto'>
              <li className='nav-item'>
                <a className='nav-link' href='/'>
                  Home
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className='card text-center mb-5 pt-3 mx-5'>
        <h3>{text}</h3>
      </div>
    </div>
  );
};

Header.defaultProps = {
  branding: 'My Calorie App',
  text: 'default text about Calorie App'
};

Header.propTypes = {
  branding: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default Header;
