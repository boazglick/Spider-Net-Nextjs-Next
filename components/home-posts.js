import React from 'react'

import PropTypes from 'prop-types'

const HomePosts = (props) => {
  return (
    <>
      <div className="home-posts-container"></div>
      <style jsx>
        {`
          .home-posts-container {
            flex: 0 0 auto;
            width: 95%;
            height: auto;
            display: grid;
            position: relative;
            direction: rtl;
            align-self: center;
            margin-top: var(--dl-space-space-fourunits);
            align-items: flex-start;
            grid-template-columns: repeat(4, 1fr);
          }
          @media (max-width: 1200px) {
            .home-posts-container {
              grid-template-columns: repeat(3, 1fr);
            }
          }
          @media (max-width: 991px) {
            .home-posts-container {
              grid-template-columns: repeat(2, 1fr);
            }
          }
          @media (max-width: 767px) {
            .home-posts-container {
              grid-template-columns: repeat(1, 1fr);
            }
          }
        `}
      </style>
    </>
  )
}

HomePosts.defaultProps = {
  prefix: 'פורסם בתאריך: \n',
  imageAlt: 'image',
}

HomePosts.propTypes = {
  prefix: PropTypes.string,
  imageAlt: PropTypes.string,
}

export default HomePosts
