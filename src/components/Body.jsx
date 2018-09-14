import React from 'react';
import PropTypes from 'prop-types';

const Body = (props) => {
  return (
    <div>
      <style jsx>{`
        div {
          max-width: 1200px;
          margin: 0 auto;
        }
      `}
      </style>
      <h1>What's On Tap?</h1>
      <KegList />
    </div>
  )
}

Body.propTypes = {
  isAdmin: PropTypes.bool.isRequired
}

export default Body
