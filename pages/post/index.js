import React from 'react'
import Head from 'next/head'

import {
  DataProvider,
  Repeater,
  DateTimePrimitive,
} from '@teleporthq/react-components'
import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

import postPageInitialPropsTqJ7Resource from '../../resources/post-page-initial-props-tq_j7'

const Post1 = (props) => {
  return (
    <>
      <div className="post1-container">
        <Head>
          <title>Post1 - Spider Net Nextjs</title>
          <meta property="og:title" content="Post1 - Spider Net Nextjs" />
        </Head>
        <div className="post1-container1">
          <DataProvider
            renderSuccess={(params) => (
              <>
                <Repeater
                  items={params}
                  renderItem={(PostEntities) => (
                    <>
                      <div className="post1-product-minitura">
                        <div className="post1-image">
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
                            renderSuccess={(context_n8m6f) => (
                              <>
                                <img
                                  alt="image"
                                  src={context_n8m6f?.source_url}
                                  className="post1-image1"
                                />
                              </>
                            )}
                            params={{
                              include: PostEntities?.featured_media,
                            }}
                          />
                        </div>
                        <span className="post1-text">
                          {PostEntities?.title?.rendered}
                          {[0]?.title?.rendered}
                        </span>
                        <div className="post1-date-and-author">
                          <span className="post1-prefix">פורסם בתאריך: </span>
                          <span className="post1-date-time">
                            <DateTimePrimitive
                              format="DD/MM/YYYY"
                              date={[0]?.date}
                            ></DateTimePrimitive>
                          </span>
                        </div>
                        <div>
                          <Script
                            html={PostEntities?.excerpt?.rendered}
                          ></Script>
                        </div>
                      </div>
                    </>
                  )}
                />
              </>
            )}
            initialData={props.postEntities}
            persistDataDuringLoading={true}
            key={props?.pagination?.page}
          />
        </div>
      </div>
      <style jsx>
        {`
          .post1-container {
            width: 100%;
            display: flex;
            overflow: auto;
            direction: rtl;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .post1-container1 {
            width: 100%;
            height: auto;
            display: grid;
            align-items: flex-start;
            grid-template-columns: repeat(4, 3fr);
          }
          .post1-product-minitura {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: column;
          }
          .post1-image {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .post1-image1 {
            width: 100%;
            height: 300px;
            object-fit: cover;
            border-radius: 20px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .post1-text {
            width: 100%;
            height: 60px;
            font-size: 1.5em;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .post1-date-and-author {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
          }
          .post1-prefix {
            font-weight: 300;
            margin-left: var(--dl-space-space-halfunit);
          }
          .post1-date-time {
            font-weight: 600;
          }
        `}
      </style>
    </>
  )
}

Post1.defaultProps = {
  postEntities: [],
}

Post1.propTypes = {
  postEntities: PropTypes.array,
}

export default Post1

export async function getStaticProps(context) {
  try {
    const response = await postPageInitialPropsTqJ7Resource({
      ...context?.params,
    })
    if (!response) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        postEntities: response,
        ...response?.meta,
      },
      revalidate: 60,
    }
  } catch (error) {
    return {
      notFound: true,
    }
  }
}
