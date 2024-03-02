import React from 'react'
import Link from 'next/link'

import {
  DataProvider,
  Repeater,
  DateTimePrimitive,
} from '@teleporthq/react-components'
import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

import homePostsResource from '../resources/home-posts'

const HomePosts = (props) => {
  return (
    <>
      <div className="home-posts-container">
        <DataProvider
          renderSuccess={(params) => (
            <>
              <Repeater
                items={params}
                renderItem={(context_yx3d9n) => (
                  <>
                    <Link href={`/post/${context_yx3d9n?.id}`}>
                      <a>
                        <div className="home-posts-container1">
                          <div className="home-posts-image">
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
                              renderSuccess={(context_67uhhg) => (
                                <>
                                  <img
                                    alt={props.imageAlt}
                                    src={context_67uhhg?.source_url}
                                    className="home-posts-image1"
                                  />
                                </>
                              )}
                              params={{
                                include: context_yx3d9n?.featured_media,
                              }}
                            />
                          </div>
                          <span className="home-posts-text">
                            {context_yx3d9n?.title?.rendered}
                          </span>
                          <div
                            id="cont13b5"
                            className="home-posts-date-and-author"
                          >
                            <span className="home-posts-prefix">
                              {props.prefix}
                            </span>
                            <span className="home-posts-date-time">
                              <DateTimePrimitive
                                format="DD/MM/YYYY"
                                date={context_yx3d9n?.date}
                              ></DateTimePrimitive>
                            </span>
                          </div>
                          <div className="home-posts-rich">
                            <div>
                              <Script
                                html={context_yx3d9n?.excerpt?.rendered}
                              ></Script>
                            </div>
                          </div>
                        </div>
                      </a>
                    </Link>
                  </>
                )}
              />
            </>
          )}
          initialData={props.contextYx3d9nProp}
          persistDataDuringLoading={true}
          initialData={props.contextYx3d9nProp}
          persistDataDuringLoading={true}
        />
      </div>
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
          .home-posts-container1 {
            flex: 0 0 auto;
            width: auto;
            cursor: pointer;
            margin: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            text-decoration: none;
          }
          .home-posts-image {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-posts-image1 {
            width: 100%;
            height: 250px;
            object-fit: cover;
            border-radius: 20px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-posts-text {
            width: 100%;
            height: 60px;
            font-size: 1.5em;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .home-posts-date-and-author {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
          }
          .home-posts-prefix {
            font-weight: 300;
            margin-left: var(--dl-space-space-halfunit);
          }
          .home-posts-date-time {
            font-family: 'Exo 2';
            font-weight: 700;
          }
          .home-posts-rich {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
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

export async function getStaticProps(context) {
  try {
    const contextYx3d9nProp = await homePostsResource({
      ...context?.params,
    })
    if (!contextYx3d9nProp) {
      return {
        notFound: true,
      }
    }
    const contextYx3d9nProp = await homePostsResource({
      ...context?.params,
    })
    if (!contextYx3d9nProp) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        contextYx3d9nProp: contextYx3d9nProp,
        contextYx3d9nProp: contextYx3d9nProp,
      },
      revalidate: 60,
    }
  } catch (error) {
    return {
      notFound: true,
    }
  }
}
