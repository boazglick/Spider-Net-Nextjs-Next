import React, { useEffect } from 'react'
import Link from 'next/link'

import {
  DataProvider,
  Repeater,
  DateTimePrimitive,
} from '@teleporthq/react-components'
import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

import postsListResource from '../resources/posts-list'

const PostsList = (props) => {
  useEffect(() => import('@lottiefiles/lottie-player'), [])
  return (
    <>
      <div className="posts-list-container">
        <DataProvider
          renderSuccess={(params) => (
            <>
              <Repeater
                items={params}
                renderItem={(Posts_List) => (
                  <>
                    <Link href={`/post/${Posts_List?.slug}`}>
                      <a>
                        <div className="posts-list-product-minitura">
                          <div className="posts-list-image">
                            <DataProvider
                              fetchData={(params) =>
                                fetch(
                                  `/api/attachment1-resource-attachment1?${new URLSearchParams(
                                    params
                                  )}`,
                                  {
                                    headers: {
                                      'Content-Type': 'application/json',
                                    },
                                  }
                                )
                                  .then((res) => res.json())
                                  .then((data) => data?.data?.[0])
                              }
                              fetchData={(params) =>
                                fetch(
                                  `/api/attachment1-resource-attachment1?${new URLSearchParams(
                                    params
                                  )}`,
                                  {
                                    headers: {
                                      'Content-Type': 'application/json',
                                    },
                                  }
                                )
                                  .then((res) => res.json())
                                  .then((data) => data?.data?.[0])
                              }
                              renderSuccess={(Featured_Image) => (
                                <>
                                  <img
                                    alt={props.imageAlt}
                                    src={Featured_Image?.source_url}
                                    className="posts-list-image1"
                                  />
                                </>
                              )}
                              params={{
                                include: Posts_List?.featured_media,
                              }}
                            />
                          </div>
                          <span className="posts-list-text">
                            {Posts_List?.title?.rendered}
                          </span>
                          <div className="posts-list-date-and-author">
                            <span className="posts-list-prefix">
                              {props.prefix}
                            </span>
                            <span className="posts-list-date-time">
                              <DateTimePrimitive
                                format="DD/MM/YYYY"
                                date={Posts_List?.date}
                              ></DateTimePrimitive>
                            </span>
                          </div>
                          <div>
                            <Script
                              html={Posts_List?.excerpt?.rendered}
                            ></Script>
                          </div>
                        </div>
                      </a>
                    </Link>
                  </>
                )}
              />
            </>
          )}
          renderLoading={() => (
            <>
              <div className="posts-list-div">
                <lottie-player
                  src="https://lottie.host/c1e3a30b-9c83-46be-a838-a249c8aa863c/vZZAyBVfeU.json"
                  loop="true"
                  speed="1"
                  autoplay="true"
                  background="transparent"
                ></lottie-player>
              </div>
              <div className="posts-list-div1">
                <lottie-player
                  src="https://lottie.host/c1e3a30b-9c83-46be-a838-a249c8aa863c/vZZAyBVfeU.json"
                  loop="true"
                  speed="1"
                  autoplay="true"
                  background="transparent"
                ></lottie-player>
              </div>
              <div className="posts-list-div2">
                <lottie-player
                  src="https://lottie.host/c1e3a30b-9c83-46be-a838-a249c8aa863c/vZZAyBVfeU.json"
                  loop="true"
                  speed="1"
                  autoplay="true"
                  background="transparent"
                ></lottie-player>
              </div>
              <div className="posts-list-div3">
                <lottie-player
                  src="https://lottie.host/c1e3a30b-9c83-46be-a838-a249c8aa863c/vZZAyBVfeU.json"
                  loop="true"
                  speed="1"
                  autoplay="true"
                  background="transparent"
                ></lottie-player>
              </div>
            </>
          )}
          initialData={props.postsListProp}
          persistDataDuringLoading={true}
          initialData={props.postsListProp}
          persistDataDuringLoading={true}
        />
      </div>
      <style jsx>
        {`
          .posts-list-container {
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
          .posts-list-product-minitura {
            flex: 0 0 auto;
            width: auto;
            cursor: pointer;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: column;
            text-decoration: none;
          }
          .posts-list-image {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .posts-list-image1 {
            width: 100%;
            height: 300px;
            object-fit: cover;
            border-radius: 20px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .posts-list-text {
            width: 100%;
            height: 60px;
            font-size: 1.5em;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .posts-list-date-and-author {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
          }
          .posts-list-prefix {
            font-weight: 300;
            margin-left: var(--dl-space-space-halfunit);
          }
          .posts-list-date-time {
            font-weight: 600;
          }
          .posts-list-div {
            width: 100%;
            height: 300px;
          }
          .posts-list-div1 {
            width: 100%;
            height: 300px;
          }
          .posts-list-div2 {
            width: 100%;
            height: 300px;
          }
          .posts-list-div3 {
            width: 100%;
            height: 300px;
          }
          @media (max-width: 1200px) {
            .posts-list-container {
              grid-template-columns: repeat(3, 1fr);
            }
          }
          @media (max-width: 991px) {
            .posts-list-container {
              grid-template-columns: repeat(2, 1fr);
            }
          }
          @media (max-width: 767px) {
            .posts-list-container {
              grid-template-columns: repeat(1, 1fr);
            }
          }
        `}
      </style>
    </>
  )
}

PostsList.defaultProps = {
  text: 'Previous',
  text1: 'Next',
  imageAlt: 'image',
  prefix: 'פורסם בתאריך: \n',
}

PostsList.propTypes = {
  text: PropTypes.string,
  text1: PropTypes.string,
  imageAlt: PropTypes.string,
  prefix: PropTypes.string,
}

export default PostsList

export async function getStaticProps(context) {
  try {
    const postsListProp = await postsListResource({
      ...context?.params,
    })
    if (!postsListProp) {
      return {
        notFound: true,
      }
    }
    const postsListProp = await postsListResource({
      ...context?.params,
    })
    if (!postsListProp) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        postsListProp: postsListProp,
        postsListProp: postsListProp,
      },
      revalidate: 60,
    }
  } catch (error) {
    return {
      notFound: true,
    }
  }
}
