import React from 'react';
import PropTypes from 'prop-types';
import Contacts from '../contacts/Contacts';

const Home = props => {
  return (
    <div className='grid-2'>
      {/* Contact Form */}
      <div></div>
      <div>
        <Contacts />
      </div>
    </div>
  );
};

Home.propTypes = {};

export default Home;
