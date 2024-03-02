import React from 'react'

import PropTypes from 'prop-types'

const ListPosts = (props) => {
  return (
    <>
      <div className="list-posts-list-posts">
        <h1 className="list-posts-text">{props.heading}</h1>
      </div>
      <style jsx>
        {`
          .list-posts-list-posts {
            gap: 12px;
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .list-posts-text {
            width: auto;
            cursor: pointer;
            margin: var(--dl-space-space-oneandhalfunits);
            padding: var(--dl-space-space-twounits);
            border-color: var(--dl-color-gray-700);
            border-width: 1px;
            border-radius: 20px;
            text-decoration: none;
          }
        `}
      </style>
    </>
  )
}

ListPosts.defaultProps = {
  heading: 'text',
}

ListPosts.propTypes = {
  heading: PropTypes.string,
}

export default ListPosts
