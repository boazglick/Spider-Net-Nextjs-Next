import React from 'react'

import { DateTimePrimitive } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

const SinglePostComp = (props) => {
  return (
    <>
      <div className={`single-post-comp-container ${props.rootClassName} `}>
        <div className="single-post-comp-top-title">
          <span className="single-post-comp-text">{props.text}</span>
        </div>
        <div className="single-post-comp-featured-image">
          <></>
        </div>
        <div className="single-post-comp-content">
          <h1 className="single-post-comp-text1">{props.heading}</h1>
          <div className="single-post-comp-date-and-author">
            <span className="single-post-comp-prefix">{props.prefix}</span>
            <span className="single-post-comp-date-time">
              <DateTimePrimitive
                format="DD/MM/YYYY"
                date="2024-03-01T20:41:32.888Z"
              ></DateTimePrimitive>
            </span>
          </div>
          <div className="single-post-comp-container1">
            <cms-richtext className="single-post-comp-cms-richtext"></cms-richtext>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .single-post-comp-container {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .single-post-comp-top-title {
            flex: 0 0 auto;
            width: 100%;
            height: 250px;
            display: flex;
            align-self: center;
            align-items: center;
            justify-content: center;
            background-color: #111;
          }
          .single-post-comp-text {
            color: var(--dl-color-gray-900);
            font-size: 3.5em;
            align-self: center;
            font-style: normal;
            font-family: 'Heebo';
            font-weight: 900;
          }
          .single-post-comp-featured-image {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .single-post-comp-content {
            gap: 12px;
            width: 75%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            margin-top: var(--dl-space-space-twounits);
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: column;
          }
          .single-post-comp-text1 {
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .single-post-comp-date-and-author {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
          }
          .single-post-comp-prefix {
            font-weight: 300;
            margin-left: var(--dl-space-space-halfunit);
          }
          .single-post-comp-date-time {
            font-weight: 600;
          }
          .single-post-comp-container1 {
            width: 100%;
            align-self: stretch;
            line-height: 1.8;
          }
          .single-post-comp-cms-richtext {
            width: 100%;
            align-self: stretch;
            line-height: 1.8;
          }
          @media (max-width: 1200px) {
            .single-post-comp-text {
              font-size: 3em;
            }
          }
          @media (max-width: 991px) {
            .single-post-comp-text {
              font-size: 2em;
            }
            .single-post-comp-content {
              width: 85%;
            }
          }
          @media (max-width: 767px) {
            .single-post-comp-text {
              padding: var(--dl-space-space-unit);
            }
            .single-post-comp-content {
              width: 95%;
            }
          }
          @media (max-width: 479px) {
            .single-post-comp-text {
              padding: var(--dl-space-space-oneandhalfunits);
              font-size: 2em;
              text-align: center;
            }
            .single-post-comp-content {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

SinglePostComp.defaultProps = {
  imageAlt: 'image',
  rootClassName: '',
  text: 'text',
  prefix: 'פורסם בתאריך: \n',
  heading: 'text',
}

SinglePostComp.propTypes = {
  imageAlt: PropTypes.string,
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  prefix: PropTypes.string,
  heading: PropTypes.string,
}

export default SinglePostComp
